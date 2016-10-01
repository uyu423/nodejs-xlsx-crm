import { execute } from '../config/mysql'
import qsb from 'node-qsb';

export const selectDatas = (page, callback) => {
  const st = (page - 1) * 100;
  const qs = new qsb().select('file_type1').limit(st, 100).orderBy('order_at', 'desc');
  execute(qs, (err, result) => {
    if(err) callback(err, null);
    else callback(null, result);
  });
};
