
import React from 'react';
import { Button, OverlayTrigger, Tooltip, DropdownButton, MenuItem, Label } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import { OrderDetail } from 'components';
import { LinkContainer } from 'react-router-bootstrap';

export default class DataItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleModalOn = this.handleModalOn.bind(this);
  }
  tf(arg) { return moment(arg).format('YY-MM-DD HH:mm'); }
  shortWhere(arg) {
    switch(arg) {
      case '옥': case 'A': return (
        <Label bsStyle="danger">A</Label>
      );
      case '지': case 'G': return (
        <Label bsStyle="success">G</Label>
      );
      case '데' : return (
        <Label>X</Label>
      );
      default: return (
        <Label>외</Label>
      );
    }
  }
  isEmpty(arg) {
    if(arg === "데이터 없음") return true;
    else return false;
  }
  isReorder(cnt, text) {
    if(cnt > 1 && text !== "데이터 없음") {
      return (
        <Label bsStyle="primary">{cnt - 1}</Label>
      );
    }
  };
  handleModalOn() {
    this.props.detailModalOn(this.props.data.idx);
    this.props.detailModalRequest(this.props.data.idx);
  }
  judgeDate(date) {
    if(date === "Invalid date") {
      return "데이터 없음";
    }
    else
      return date;
  }
  render() {
    const ts = { textAlign : 'center' };
    const fg = { color : '#999', textAlign : 'center' };
    const newLabel = (<Label bsStyle="success">N</Label>);
    const data = this.props.data;
    const tooltipReorderHigh = (<Tooltip id="tooltip">데이터베이스에서 이름, 연락처, 휴대전화 모두 동일한 데이터를 {data.reorder_count}건 찾았습니다. 재주문일 확률이 매우 높습니다.</Tooltip>);
    const tooltipOrderWhere = (<Tooltip id="tooltip">{data.order_where}</Tooltip>);
    const tooltipProduct = (<Tooltip id="tooltip">{data.product_name}</Tooltip>);
    const tooltipFunctions = {
      '검색' : (<Tooltip id="tooltip">개발 예정입니다.</Tooltip>)
    };
    return(
      <tr>
        <td style={ts}>{data.idx}</td>
        <td style={ts}>{data.file_idx}</td>
        <td>
          <OverlayTrigger placement="top" overlay={tooltipOrderWhere}>
            {this.shortWhere(data.order_where[0])}
          </OverlayTrigger>
        </td>
        <td style={ this.isEmpty(data.order_at) ? fg : ts }>{this.judgeDate(this.tf(data.order_at))}</td>
        <td style={ this.isEmpty(data.price_total) ? fg : ts }>{data.price_total}</td>
        <td style={ this.isEmpty(data.order_name) ? fg : ts }>
          {data.order_name}&nbsp;{this.isReorder(data.order_name_count, data.order_name)}
        </td>
        <td style={ this.isEmpty(data.order_call) ? fg : ts }>
          {data.order_call}&nbsp;{this.isReorder(data.order_call_count, data.order_call)}
        </td>
        <td style={ this.isEmpty(data.order_phone) ? fg : ts }>
          {data.order_phone}&nbsp;{this.isReorder(data.order_phone_count, data.order_phone)}
        </td>
        <td style={ this.isEmpty(data.address) ? fg : ts }>
          <span>{data.address.slice(0, 10)}...&nbsp;</span>
          {this.isReorder(data.address_count, data.address)}
        </td>
        <td style={ts}>
          { data.reorder_count > 0 && data.reorder_count != null ?
            <OverlayTrigger placement="top" overlay={tooltipReorderHigh}>
              <Label bsStyle="success">
                <FontAwesome name="repeat"/>&nbsp;{data.reorder_count}
              </Label>
            </OverlayTrigger>
            : ''
          }
        </td>
        <td style={ts}>
          <OverlayTrigger placement="top" overlay={tooltipProduct}>
            <Button bsStyle="default" bsSize="xsmall">보기</Button>
          </OverlayTrigger>
        </td>
        <td style={ts}>
            <Button onClick={this.handleModalOn} bsSize="xsmall" bsStyle="primary">보기</Button>
        </td>
        <td style={ts}>
          <DropdownButton bsSize='xsmall' bsStyle="default" title='' id=''>
            <OverlayTrigger placement="top" overlay={tooltipFunctions['검색']}>
              <MenuItem>검색</MenuItem>
            </OverlayTrigger>
          </DropdownButton>
        </td>
      </tr>
    );
  }
}
