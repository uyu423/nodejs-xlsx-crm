
import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import moment from 'moment';

export default class FileListItem extends React.Component {
  tf(arg) { return moment(arg).format('YYYY-MM-DD HH:mm'); }
  render() {
    const ts = { textAlign : 'center' }
    const data = this.props.data;
    const tooltipAddress = (
        <Tooltip id="tooltip">{data.address}</Tooltip>
    );
    const tooltipProduct = (
        <Tooltip id="tooltip">{data.product_name}</Tooltip>
    );
    return(
      <tr>
        <td style={ts}>{data.idx}</td>
        <td>{data.order_where}</td>
        <td style={ts}>{data.order_number}</td>
        <td style={ts}>{this.tf(data.order_at)}</td>
        <td>{data.price_total}</td>
        <td>{data.price_one}</td>
        <td style={ts}>{data.order_name}</td>
        <td style={ts}>{data.order_call}</td>
        <td style={ts}>{data.order_phone}</td>
        <td style={ts}>
          <OverlayTrigger placement="top" overlay={tooltipProduct}>
            <Button bsStyle="primary" bsSize="xsmall">보기</Button>
          </OverlayTrigger>
        </td>
        <td style={ts}>{data.product_count}</td>
        <td style={ts}>
          <OverlayTrigger placement="top" overlay={tooltipAddress}>
            <Button bsStyle="primary" bsSize="xsmall">보기</Button>
          </OverlayTrigger>
        </td>
      </tr>
    );
  }
}
