import React from 'react';
import { Row, Col, PageHeader, Label } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class Release extends React.Component {
  render() {
    return (
        <Row>
          <Col md={12}>
            <PageHeader>v0.1.1 <small>2016-10-04 <Label bsStyle="success">ALPHA</Label></small></PageHeader>
            <ul>
              <li>엑셀 파일 업로드 관련</li>
              <ul>
                <li>일부 엑셀 파일이 업로드 되지 않는 문제가 있었습니다. <b>엑셀 파일 업로드에 실패했을 경우 컴퓨터에서 엑셀 파일을 열고 '다른 이름으로 저장' 후 업로드 해보시기 바랍니다.</b></li>
                <li>엑셀 파일 업로드시 업로드 상태를 알려주는 창을 만들었습니다.</li>
                <li>업로드 할 수 있는 엑셀 파일 양식이 추가되었습니다.</li>
              </ul>
              <li>'데이터-전체보기' 관련</li>
              <ul>
                <li>이제 재주문 건수를 기준으로 내림차순 정렬되어 출력됩니다. 재주문 건수가 같을 경우 날짜순 내림차순이 됩니다.</li>
                <li>'주문 옵션' 칼럼이 추가되었습니다. 업데이트 이 후 업로드 되는 파일에만 적용됩니다.</li>
                <li>주문처를 알려주는 '구분' 컬럼에 옥션과 지마켓 외의 데이터를 표시합니다</li>
                <ul>
                  <li><Label bsStyle="danger">A</Label> : 옥션</li>
                  <li><Label bsStyle="success">G</Label> : 지마켓</li>
                  <li><Label>외</Label> : 한아름, 미소진 등 기타 플랫폼</li>
                  <li><Label>X</Label> : 데이터 없음</li>
                </ul>
              </ul>
              <li>이제 '파일 관리' 메뉴에서 파일 목록이 업로드 날짜의 내림차순으로 표시됩니다. (최근 것이 위에 나타남)</li>
              <li>테이블(표)을 모바일에서 잘 볼 수 있도록 기능을 추가했습니다.</li>
              <li>데이터베이스에서 데이터를 불러올 때 안내 문구를 표시하는 기능을 추가했습니다.</li>
            </ul>
          </Col>
          <Col md={12}>
            <PageHeader>v0.1.0 <small>2016-10-03 <Label bsStyle="success">ALPHA</Label></small></PageHeader>
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
          </Col>
        </Row>
    );
  }
}
