import { execute } from '../config/mysql'
import qsb from 'node-qsb';

export const insertFileInfo = (filename, rowCnt, callback) => {
  const col = ['filename', 'row_count'];
  const val = [filename, rowCnt];
  const qs = new qsb().insert('files').values(col, val);

  execute(qs, (err, result) => {
    if(err) callback(err, null);
    else callback(null, result);
  });
}

export const deleteFileByIdx = (fileIdx, callback) => {
  let qs = new qsb().delete('files').where('idx', '=', fileIdx);
  execute(qs, (err, result) => {
    if(err) callback(err, null);
    else callback(null, result);
  })
}
