import React from 'react';
import moment from 'moment';

export default class DetailItem extends React.Component {
  render() {
    const d = this.props.data;
    return(
      <tr>
        <td>{d.idx}</td>
        <td>{d.order_where}</td>
        <td>{d.order_number}</td>
        <td>{moment(d.order_at).format('YYMMDD')}</td>
        <td>{d.price_total}</td>
        <td>{d.order_name}</td>
        <td>{d.order_call}</td>
        <td>{d.order_phone}</td>
        <td>{d.address}</td>
      </tr>
    )
  }
}
