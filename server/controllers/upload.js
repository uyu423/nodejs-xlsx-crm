import XLSX from 'xlsx';
import path from 'path';
import fs from 'fs';
import colors from 'colors';

import { insertFileInfo, insertFileDatas } from '../models';

export function uploadXlsxFileType1(req, res) {
  console.log(req.file);
  const workbook = XLSX.readFile(req.file.path);
  const json = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
  insertFileInfo(req.file.originalname, json.length, (err, result) => {
    if(err) res.status(500).send(err);
    else {
      console.log('File Info Insert OK'.green);
      let arr = [];
      for(let i=0; i<json.length; i++) {
        arr.push([
          result.insertId,
          json[i]['아이디'],
          json[i]['주문번호'],
          json[i]['주문일자(결제확인전)'],
//          moment(json[i]['주문일자(결제확인전)'], 'YYYY-MM-DD HH:mm:ss'),
          parseInt(json[i]['판매금액'].replace(/,/g, '')),
          parseInt(json[i]['판매단가'].replace(/,/g, '')),
          json[i]['구매자명'],
          json[i]['구매자 휴대폰'],
          json[i]['구매자 전화번호'],
          json[i]['상품명'],
          parseInt(json[i]['수량'].replace(/,/g, '')),
          json[i]['주소']
        ]);
      }
      insertFileDatas(arr, (err2, result2) => {
        if(err2) res.status(500).send(err2);
        else {
          console.log("File Datas Insert OK".green);
          res.send(json[0]);
        }
      });
    }
  })
}
