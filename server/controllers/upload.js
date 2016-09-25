import XLSX from 'xlsx';
import path from 'path';
import fs from 'fs';

export function uploadXlsxFileType1(req, res) {
  console.log(req.file);
  const workbook = XLSX.readFile(req.file.path);
  const json = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

  res.send(json[0]);
}
