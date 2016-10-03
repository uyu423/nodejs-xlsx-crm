import React from 'react';
import moment from 'moment';

export default class DetailItem extends React.Component {
  judge(date) {
    if(date === "Invalid date") {
      return "데이터 없음";
    }
    else
      return date;
  }
  render() {
    const d = this.props.data;
    return(
      <tr>
        <td>{d.order_where}</td>
        <td>{d.order_number}</td>
        <td>{this.judge(moment(d.order_at).format('YYMMDD'))}</td>
        <td>{d.price_total}</td>
        <td>{d.order_name}</td>
        <td>{d.order_call}</td>
        <td>{d.order_phone}</td>
        <td>{d.address}</td>
      </tr>
    )
  }
}
