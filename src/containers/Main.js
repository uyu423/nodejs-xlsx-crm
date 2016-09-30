import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default class Main extends React.Component {
  render() {
    return(
      <div>
        <Jumbotron>
          <h1>CRM <small>고객관리 프로그램</small></h1>
          <p>사용법</p>
          <p><Button bsStyle="primary">파일 관리</Button></p>
        </Jumbotron>
      </div>
    )
  }
}
