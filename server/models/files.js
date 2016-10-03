import { execute } from '../config/mysql'
import qsb from 'node-qsb';
import moment from 'moment';

export const insertFileInfo = (filename, rowCnt, callback) => {
  const col = ['filename', 'row_count'];
  const val = [filename, rowCnt];
  const qs = new qsb().insert('files').values(col, val);

  execute(qs, (err, result) => {
    if(err) callback(err, null);
    else callback(null, result);
  });
};

export const deleteFileByIdx = (fileIdx, callback) => {
  let qs = new qsb().forceQuery("UPDATE `files` SET `delete_flag` = true, `delete_at` = CURRENT_TIMESTAMP WHERE `idx` = " + fileIdx + ";");
  qs.build().printString();
  execute(qs, (err, result) => {
    if(err) callback(err, null);
    else {
      const qs2 = new qsb().delete('file_type1').where('file_idx', '=', fileIdx);
      execute(qs2, (err2, result2) => {
        if(err2) callback(err2, null);
        else callback(null, [result, result2]);
      });
    }
  });
};

export const selectFiles = (callback) => {
  const qs = new qsb().select('files').orderBy('upload_at', 'desc');
  execute(qs, (err, result) => {
    if(err) callback(err, null);
    else callback(null, result);
  });
};
