import React from 'react';
import { Row, Col, PageHeader, Table } from 'react-bootstrap';

export default class Viewer extends React.Component {
  render() {
    const ts = {
      "text-align" : "center"
    };
    return(
      <Row>
        <Col md={12}>
          <PageHeader>통계 <small>전체보기</small></PageHeader>
          <Table>
            <thead>
              <tr>
              <th style={ts}>Idx</th>
              <th>구분</th>
              <th style={ts}>주문 번호</th>
              <th style={ts}>결제 날짜</th>
              <th>판매 금액</th>
              <th>판매 단가</th>
              <th style={ts}>주문자</th>
              <th style={ts}>연락처</th>
              <th style={ts}>휴대전화</th>
              <th>제품명</th>
              <th style={ts}>수량</th>
              <th>주소</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>2278</td>
              <td>옥션(boktengee)</td>
              <td>1219467852</td>
              <td>2016-09-29 10:21:00</td>
              <td>15000</td>
              <td>15000</td>
              <td>유용우</td>
              <td>010-000-0000</td>
              <td>데이터 없음</td>
              <td>햇살이랑 세척사과 3k(15과내외)</td>
              <td>1</td>
              <td>경상북도 안동시 태화동 175-8</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}
