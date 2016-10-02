import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, PageHeader, Table, Alert, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { getDataRequest } from 'actions/data';
import { DataItem, OrderDetail } from 'components';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

class Viewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date : moment(),
      page : 1,
    };
  }
  openModal(idx) {
    this.setState({
      modal : true,
      modalIdx : idx
    }, () => {
      console.log(this.state);
    });
  }
  closeModal() {
    this.setState({
      modal : false
    }, () => {
      console.log(this.state);
    });
  }
  componentDidMount() {
    this.props.getDataRequest(this.state.date.format('YYYYMMDD'), this.state.page);
  }
  showAlert() {
    alert("개발 예정입니다.");
  }
  beforeDate() {
    this.setState({
      date : this.state.date.subtract(1, 'd'),
      page : 1
    }, () => {
      this.props.getDataRequest(this.state.date.format('YYYYMMDD'), this.state.page);
    });
  }
  nextDate() {
    this.setState({
      date : this.state.date.add(1, 'd'),
      page : 1
    }, () => {
      this.props.getDataRequest(this.state.date.format('YYYYMMDD'), this.state.page);
    });
  }
  setDateToday() {
    this.setState({
      date : moment(),
      page : 1
    }, () => {
      this.props.getDataRequest(this.state.date.format('YYYYMMDD'), this.state.page);
    });
  }
  nextPage() {
    this.setState({
      page : this.state.page + 1
    }, () => {
      this.props.getDataRequest(this.state.date.format('YYYYMMDD'), this.state.page);
    });
  }
  resetPage() {
    this.setState({
      page : 1
    }, () => {
      this.props.getDataRequest(this.state.date.format('YYYYMMDD'), this.state.page);
    });
  }
  render() {
    const ts = {
      textAlign : "center"
    };
    const pr = {
      textAlign : "right"
    };
    const noneData = (
      <tr><td style={ts} colSpan={13}><FontAwesome name='exclamation-circle'/> 해당 날짜의 데이터가 없습니다.</td></tr>
    );
    const mapToComponents = data => {
      return data.map((item, i) => {
        return (
          <DataItem
            data={item}
            key={item.idx}
            detailModalOn={this.props.detailModalOn}
            detailModalRequest={this.props.detailModalRequest}
          />);
      });
    };
    return(
      <Row>
        <Col md={12}>
          <PageHeader>데이터 <small>전체보기 ({this.state.date.format('YYYY-MM-DD')})</small></PageHeader>
              <Alert bsStyle="success">
                <FontAwesome name='exclamation-circle'/> <strong>결제 날짜</strong>를 기준으로 내림차순 정렬되며 날짜별로 100개씩 출력됩니다.
                <span className="pull-right">
                <ButtonToolbar>
                  <Button disabled={ this.state.date.format('YYYMMDD') == moment().format('YYYMMDD') ? true : false } onClick={this.setDateToday.bind(this)} bsSize="xsmall" bsStyle="primary">오늘 날짜로</Button>
                  <ButtonGroup>
                    <Button onClick={this.beforeDate.bind(this)} bsSize="xsmall" bsStyle="primary">이전 날짜로</Button>
                    <Button disabled={ this.state.date.format('YYYMMDD') == moment().format('YYYMMDD') ? true : false } onClick={this.nextDate.bind(this)} bsSize="xsmall" bsStyle="primary">다음 날짜로</Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button disabled={ this.state.page == 1 ? true : false } onClick={this.resetPage.bind(this)} bsSize="xsmall" bsStyle="primary">첫 페이지로</Button>
                    <Button disabled={ this.props.dataRows.length < 100 ? true : false } onClick={this.nextPage.bind(this)} bsSize="xsmall" bsStyle="primary">다음 100개</Button>
                  </ButtonGroup>
                </ButtonToolbar>
                </span>
              </Alert>
          <Table>
            <thead>
              <tr>
              <th style={ts}>Idx</th>
              <th style={ts}>파일</th>
              <th>구분</th>
              <th style={ts}>결제 날짜</th>
              <th>판매 금액</th>
              <th style={ts}>주문자</th>
              <th style={ts}>연락처</th>
              <th style={ts}>휴대전화</th>
              <th style={ts}>주소</th>
              <th style={ts}>재주문</th>
              <th style={ts}>상품명</th>
              <th style={ts}>상세 분석</th>
              <th style={ts}>기능</th>
              </tr>
            </thead>
            <tbody>
              { this.props.dataRows.length == 0 ? noneData : mapToComponents(this.props.dataRows) }
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    dataStatus : state.data.status,
    dataRows : state.data.rows,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDataRequest : (date, page) => {
      return dispatch(getDataRequest(date, page));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
