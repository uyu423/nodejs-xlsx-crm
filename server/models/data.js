import { execute } from '../config/mysql'
import qsb from 'node-qsb';
import moment from 'moment';

/* 어휴..
SELECT F.*, VON.order_name_count,
  VOC.order_call_count, VOP.order_phone_count, VA.address_count
FROM `file_type1` F
	join `view_order_name_cnt` VON
		on F.order_name = VON.order_name
    join `view_order_call_cnt` VOC
    	on F.order_call = VOC.order_call
    join `view_order_phone_cnt`VOP
    	on F.order_phone = VOP.order_phone
    join `view_address_cnt` VA
    	on F.address = VA.address
WHERE `order_at` >= '2016-10-01' AND `order_at` < '2016-10-02'
ORDER BY `order_at` desc
LIMIT 0, 100
*/
export const selectDatas = (date, page, callback) => {
  const st = (page - 1) * 100;
  const todayDate = moment(date, 'YYYYMMDD').format('YYYY-MM-DD');
  const nextDate = moment(date, 'YYYYMMDD').add(1, 'd').format('YYYY-MM-DD');
  const str = "SELECT F.*, VON.order_name_count, VOC.order_call_count, VOP.order_phone_count, VA.address_count, (VM3.count - 1) as reorder_count FROM `file_type1` F join `view_order_name_cnt` VON	on F.order_name = VON.order_name join `view_order_call_cnt` VOC	on F.order_call = VOC.order_call join `view_order_phone_cnt`VOP	on F.order_phone = VOP.order_phone join `view_address_cnt` VA	on F.address = VA.address left join `view_match3cols_count` VM3	on F.order_name = VM3.order_name and F.order_call = VM3.order_call and F.order_phone = VM3.order_phone WHERE `order_at` >= '" + todayDate + "' AND `order_at` < '" + nextDate +"' ORDER BY `reorder_count` desc, `order_at` desc LIMIT "+ st +", 100";
  const qs = new qsb().forceQuery(str);
  execute(qs, (err, result) => {
    if(err) callback(err, null);
    else callback(null, result);
  });
};

//미안해 Node.js야
export const selectDataByIdx = (idx, cb) => {
  const qs = new qsb().select('file_type1').where('idx', '=', idx);
  execute(qs, (err, result) => {
    if(err) cb(err, null);
    else cb(null, result);
  });
};
export const selectDataWhereOrdername = (orderName, cb) => {
  const qs = new qsb().select('file_type1').where('order_name', '=', orderName).orderBy('order_at', 'desc');
  execute(qs, (err, result) => {
    if(err) cb(err, null);
    else cb(null, result);
  });
};
export const selectDataWhereOrdercall = (orderCall, cb) => {
  const qs = new qsb().select('file_type1').where('order_call', '=', orderCall).orderBy('order_at', 'desc');
  execute(qs, (err, result) => {
    if(err) cb(err, null);
    else cb(null, result);
  });
};
export const selectDataWhereOrderphone = (orderPhone, cb) => {
  const qs = new qsb().select('file_type1').where('order_phone', '=', orderPhone).orderBy('order_at', 'desc');
  execute(qs, (err, result) => {
    if(err) cb(err, null);
    else cb(null, result);
  });
};
export const selectDataWhereAddress = (address, cb) => {
  const qs = new qsb().select('file_type1').where('address', '=', address).orderBy('order_at', 'desc');
  execute(qs, (err, result) => {
    if(err) cb(err, null);
    else cb(null, result);
  });
};
