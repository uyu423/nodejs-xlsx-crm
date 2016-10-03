import React from 'react';
import { Jumbotron, Button, ButtonToolbar, Label } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class Main extends React.Component {
  render() {
    return(
      <div>
        <Jumbotron>
          <h1>CRM <small>고객관리 프로그램</small></h1>
          <ButtonToolbar>
            <LinkContainer to="/manage">
              <Button bsStyle="primary">
                <FontAwesome name='folder-open'/> 파일 관리
              </Button>
            </LinkContainer>
            <LinkContainer to="/viewer">
              <Button bsStyle="primary">
                <FontAwesome name='database'/> 데이터 보기
              </Button>
            </LinkContainer>
            <LinkContainer to="/release">
              <Button bsStyle="success">
                <FontAwesome name='sticky-note'/> 릴리즈 노트
              </Button>
            </LinkContainer>
          </ButtonToolbar>
          <h3><FontAwesome name="file-text-o"/> 사용 방법</h3>
          <ul>
            <li><b>'파일 관리'</b> 메뉴에서 기본적인 엑셀 파일 업로드, 삭제 기능이 제공됩니다.</li>
              <ul>
                <li><b>'파일 업로드'</b> 세션에서 파일 선택시 별도의 업로드 버튼 없이 즉시 업로드가 진행됩니다. 2MB 기준 1~2초 정도 소요됩니다.</li>
                <li><b>'파일 관리'</b> 세션에서 데이터 갯수는 엑셀파일의 행 갯수입니다.</li>
                <li><b>'파일 관리'</b> 세션에서 데이터 삭제 기능 실행 시 파일의 삭제 기록은 남지만, 데이터베이스의 주문 데이터는 깔끔하게 사라집니다.</li>
              </ul>
            <li><b>'데이터 관리'</b> 메뉴에서 다음 기능을 제공합니다.</li>
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
          </ul>
          <h3><FontAwesome name="exclamation-circle"/> 확인된 문제점</h3>
            <ul>
              <li>일부 브라우저에서 제대로 작동하지 않습니다. 가능하면 Internet Explorer를 제외한 <b>Google Chrome</b>이나 <b>Mozila Firefox</b> 등을 사용해주세요.</li>
              <ul>
                <li>Microsoft Edge : 파일 업로드시 정상 처리되었음에도 에러로 나타남.</li>
                <li>Microsoft Internet Explorer : 데이터베이스의 데이터가 정상적으로 나타나지 않음.</li>
              </ul>
              <li>최적화된 모바일 화면을 제공하지 않습니다.</li>
            </ul>
          <h3><FontAwesome name="envelope-o"/> 문의 사항</h3>
            <p><small>사용 중 버그/에러 제보나 문의사항은 <a href="mailto:uyu423@gmail.com" target="_blank">uyu423@gmail.com</a>으로 보내주시기 바랍니다.</small></p>
          <h3><FontAwesome name="github"/> Technical License</h3>
            <ul>
              <li>DAEA CRM : The Apache License Version 2.0</li>
              <li>Express.js : The MIT License (MIT)</li>
              <li>React.js : The BSD 3-Clause License</li>
              <li>Redux : The MIT License (MIT)</li>
              <li>Bootstrap : The MIT License (MIT)</li>
              <li>MariaDB : The GNU Library General Public License Version 2.0</li>
            </ul>
        </Jumbotron>
      </div>
    )
  }
}
