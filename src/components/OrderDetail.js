//using fatilure, not use comp
import React from 'react';
import { Row, Col, Modal, Button, Table } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import moment from 'moment';
import { DetailItem } from 'components';

class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
//    this.props.req(this.props.idx);
  }
  render() {
    const ths = (
      <tr>
        <th>Idx</th>
        <th>구분</th>
        <th>주문 번호</th>
        <th>결제 날짜</th>
        <th>판매 금액</th>
        <th>주문자</th>
        <th>연락처</th>
        <th>휴대전화</th>
        <th>주소</th>
      </tr>
    )
    const mapToComponents = data => {
      data.shift();
      return data.map((item, i) => {
        return (
          <DetailItem
            data={item}
            key={item.idx}
          />);
      });
    };
    if(this.props.results) {
      const de = this.props.results.default;
      const on = this.props.results.orderName;
      const oc = this.props.results.orderCall;
      const op = this.props.results.orderPhone;
      const a = this.props.results.address;
      console.log('on', on);
      return(
        <Modal show={this.props.flag} onHide={this.props.detailModalOff} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">주문번호 : {de.order_number} / 주문자 : {de.order_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12}>
                <h4><b>주문 정보</b></h4>
              </Col>
              <Col md={6}>
                <p><b>구분 :</b> {de.order_where}</p>
                <p><b>결제 날짜 :</b> {moment(de.order_at).format('YYYY-MM-DD HH:mm')}</p>
                <p><b>판매 금액 :</b> {de.price_total}</p>
                <p><b>판매 단가 :</b> {de.price_one}</p>
                <p><b>상품명 :</b> {de.product_name}</p>
                <p><b>수량 :</b> {de.product_count}</p>
              </Col>
              <Col md={6}>
                <p><b>주문 번호 :</b> {de.order_number}</p>
                <p><b>주문자 :</b> {de.order_name}</p>
                <p><b>연락처 :</b> {de.order_call}</p>
                <p><b>휴대전화 :</b> {de.order_phone}</p>
                <p><b>주소 :</b> {de.address}</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col md={12}>
                <h4><b>데이터베이스 : 주문자명</b></h4>
                <Table>
                  <thead>{ ths }</thead>
                  <tbody>
                  { de.order_name != '데이터 없음' ? mapToComponents(on) : ''}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h4><b>데이터베이스 : 연락처</b></h4>
                <Table>
                  <thead>{ ths }</thead>
                  <tbody>
                  { de.order_call != '데이터 없음' ? mapToComponents(oc) : ''}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h4><b>데이터베이스 : 휴대전화</b></h4>
                <Table>
                  <thead>{ ths }</thead>
                  <tbody>
                  { de.order_phone != '데이터 없음' ? mapToComponents(op) : ''}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h4><b>데이터베이스 : 주소</b></h4>
                <Table>
                  <thead>{ ths }</thead>
                  <tbody>
                  { de.address != '데이터 없음' ? mapToComponents(a) : ''}
                  </tbody>
                </Table>
              </Col>
            </Row>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.detailModalOff}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
    return (
      <Modal show={this.props.flag} onHide={this.props.detailModalOff} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <h3>Loading...</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.detailModalOff}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    results : state.modalRequest.results
  }
}

export default connect(mapStateToProps, null)(OrderDetail);
