import excelParser from 'excel-parser';
import path from 'path';
import fs from 'fs';

export function uploadXlsxFileType1(req, res) {
  console.log(req.file);
    excelParser.parse({
    //  inFile: path.join(__dirname, '../tmp/' + req.file.filename),
      inFile: req.file.path,
      worksheet: 1,
      skipEmpty: true
    }, (err, records) => {
      if(err) throw err;
      else {
        let whereAt = [];
        for(let i=1; i<records.length; i++) {
          whereAt.push(records[i][0]);
        }
        res.send(records);
      }
    })
}
