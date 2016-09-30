import React from 'react';
import { Button } from 'react-bootstrap';
import moment from 'moment';

export default class FileListItem extends React.Component {
  showAlert() {
    alert("개발 예정입니다.");
  }
  handleFileDelete() {
    this.props.handleFileDelete(this.props.data.idx);
  }
  tf(arg) {
    return moment(arg).format('YYYY-MM-DD HH:mm');
  }
  render() {
    const data = this.props.data;
    const ts = {
      "textAlign" : "center"
    };
    const showDataBtn = (
      <Button bsSize="xsmall" bsStyle="primary" onClick={this.showAlert.bind(this)}>보기</Button>
    );
    const deleteBtn = (
      <Button bsSize="xsmall" bsStyle="danger"
        onClick={this.handleFileDelete.bind(this)}>삭제</Button>
    );
    const alreadyDelete = (
      <Button bsSize="xsmall" disabled>삭제됨</Button>
    );
    return (
      <tr>
        <td style={ts}>{data.idx}</td>
        <td>{data.filename}</td>
        <td style={ts}>{this.tf(data.upload_at)}</td>
        <td style={ts}>{data.row_count}</td>
        <td style={ts}>
          { data.delete_flag ? alreadyDelete : showDataBtn }
        </td>
        <td style={ts}>
          { data.delete_flag ? alreadyDelete : deleteBtn }
        </td>
        <td style={ts}>
          { data.delete_flag ? this.tf(data.delete_at) : '' }
        </td>
      </tr>
    );
  }
}
