import React from 'react';
import { Jumbotron, Button, ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class Main extends React.Component {
  render() {
    return(
      <div>
        <Jumbotron>
          <h1>CRM <small>고객관리 프로그램</small></h1>
          <p>
          <ButtonToolbar>
            <LinkContainer to="/manage">
              <Button bsStyle="primary">
                <FontAwesome name='folder-open'/> 파일 관리</Button>
            </LinkContainer>
            <LinkContainer to="/viewer">
              <Button bsStyle="primary">
                <FontAwesome name='database'/> 데이터 보기</Button>
            </LinkContainer>
            <LinkContainer to="/release">
              <Button bsStyle="success">
                <FontAwesome name='sticky-note'/> 릴리즈 노트</Button>
            </LinkContainer>
          </ButtonToolbar>
          </p>
          <h3>사용 방법</h3>
          <ul>
            <li>흑흑흑흑흑</li>
            <ul>
              <li>흑흑흑흑흑</li>
            </ul>
          </ul>
        </Jumbotron>
      </div>
    )
  }
}
