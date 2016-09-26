import { execute } from '../config/mysql'
import qsb from 'node-qsb';

export const insertFileDatas = (vals, callback) => {
  const cols = [
    'file_idx',
    'order_where',
    'order_number',
    'order_at',
    'price_total',
    'price_one',
    'order_name',
    'order_call',
    'order_phone',
    'product_name',
    'product_count',
    'address'
  ];

  let qs = new qsb().insert('file_type1').values(cols, vals[0]);
  for(let i=1; i<vals.length; i++) {
    qs.addValues(vals[i]);
  }
  execute(qs, (err, result) => {
    if(err) callback(err, null);
    else callback(null, result);
  })
}
