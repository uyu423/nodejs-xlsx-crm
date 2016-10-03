import XLSX from 'xlsx';
import path from 'path';
import fs from 'fs';
import colors from 'colors';

import { insertFileInfo, insertFileDatas } from '../models';

function colChecker(col) {
  if(col === undefined) return "데이터 없음";
  else return col;
}

function removeComma(col) {
  return parseInt(col.replace(/,/g, ''));
}

function ifStar(obj, str) {
  if(obj[str] === undefined) return str + '*';
  else return str;
}

function AorB(obj, A, B) {
  if(obj[A] !== undefined) {
    return ifStar(obj, A);
  }
  else return ifStar(obj, B);
}

export function uploadXlsxFileType1(req, res) {
  console.log(req.file);
  if(req.file === undefined) {
    res.status(500).send({
      "mseg" : "File Not Exist. Please Contact Developer"
    });
  }
  const workbook = XLSX.readFile(req.file.path);
  const json = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
  console.log(json);
  insertFileInfo(req.file.originalname, json.length, (err, result) => {
    if(err) res.status(500).send(err);
    else {
      console.log('File Info Insert OK'.green);
      let arr = [];
//      let colKeys = ['아이디', '주문번호', '결제완료일', '판매금액', '판매단가', '구매자명', '구매자 휴대폰', '구매자 전화번호', '상품명', '수량', '주소'];
      //나중에 반복되는 코드 부분을 빼서 반복문으로 돌리자.
      for(let i=0; i<json.length; i++) {
        arr.push([
          result.insertId,
          colChecker(json[i][AorB(json[i], '아이디', '판매처')]),
          colChecker(json[i][ifStar(json[i], '주문번호')]),
          colChecker(json[i][AorB(json[i], '결제완료일', '주문일자')]),
//          moment(json[i]['주문일자(결제확인전)'], 'YYYY-MM-DD HH:mm:ss'),
          removeComma(colChecker(json[i][AorB(json[i], '판매금액', '판매가')])),
          removeComma(colChecker(json[i][ifStar(json[i], '판매단가')])),
          colChecker(json[i][AorB(json[i], '구매자명', '주문자|이름')]),
          colChecker(json[i][AorB(json[i], '구매자 휴대폰', '주문자|전화번호')]),
          colChecker(json[i][AorB(json[i], '구매자 전화번호', '주문자|핸드폰')]),
          colChecker(json[i][AorB(json[i], '몰상품명', '상품명')]),
          colChecker(json[i][AorB(json[i], '주문옵션', '몰상품속성')]),
          removeComma(colChecker(json[i][ifStar(json[i], '수량')])),
          colChecker(json[i][AorB(json[i], '주소', '수화인|주소1')])
        ]);
      }
      insertFileDatas(arr, (err2, result2) => {
        if(err2) res.status(500).send(err2);
        else {
          console.log("File Datas Insert OK".green);
          res.send({
            mseg : "File Upload OK. File Id : " + result.insertId
          });
        }
      });
    }
  });
}
