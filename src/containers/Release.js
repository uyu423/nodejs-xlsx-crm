import React from 'react';
import { Row, Col, PageHeader, Label } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class Release extends React.Component {
  render() {
    return (
        <Row>
          <Col md={12}>
            <PageHeader>v0.1.0 BETA <small>2016-10-03 (Apple)</small></PageHeader>
            <p>
              <ul>
                <li>기본적인 엑셀 파일 업로드, 삭제 기능이 제공됩니다. (파일별 데이터 확인 기능은 제공하지 않습니다.)</li>
                <li>데이터 관리에서 다음 기능을 제공합니다.</li>
                <ul>
                <li>업로드된 엑셀 파일의 데이터를 날짜별로 확인할 수 있으며, 100개 단위로 출력됩니다.</li>
                <li>데이터 단위 범주와 날짜는 상단의 버튼으로 이동할 수 있습니다.</li>
                <li>'주문자 이름', '연락처', '휴대전화', '주소'를 기준으로 각각에 대해 데이터베이스 값을 검사하여 각 컬럼 옆에 <Label bsStyle="primary">3</Label> 으로 표시합니다.</li>
                <li>'주문자 이름', '연락처', '휴대전화' 세 값이 모두 일치하는 값이 데이터베이스에 있을 시 <b>'재주문'</b> 컬럼에 <Label bsStyle="success"><FontAwesome name="repeat"/> 3</Label> 으로 표시됩니다.</li>
                <ul>
                  <li>'재주문' 컬럼에 라벨이 표시되었다면 높은 확률로 재구매일 가능성이 높습니다.</li>
                </ul>
                <li>각 라벨안의 숫자는 데이터베이스에서 확인된 데이터 갯수입니다.</li>
                <li><b>'상세 분석'</b> 기능을 제공합니다. 상세 분석 페이지에서는 해당 주문의 상세 정보와 '주문자 이름', '연락처', '휴대전화', '주소'에 대한 재주문 데이터를 확인 할 수 있습니다.</li>
                </ul>
                <li><b>확인된 문제점</b></li>
                <ul>
                <li>일부 브라우저에서 제대로 작동하지 않습니다. 가능하면 Internet Explorer를 제외한 <b>Google Chrome</b>이나 <b>Mozila Firefox</b> 등을 사용해주세요.</li>
                <ul>
                  <li>Microsoft Edge : 파일 업로드시 정상 처리되었음에도 에러로 나타남.</li>
                  <li>Microsoft Internet Explorer : 데이터베이스의 데이터가 정상적으로 나타나지 않음.</li>
                </ul>
                <li>최적화된 모바일 화면을 제공하지 않습니다.</li>
                </ul>
              </ul>
            </p>
          </Col>
        </Row>
    );
  }
}
