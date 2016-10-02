import React from 'react';
import { Row, Col, PageHeader, Table, Alert, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

class Detail extends React.Component {
  render() {
    return (
      <Row>
        <Col md={12}>
          <PageHeader>Idx : {this.props.params.idx}</PageHeader>
        </Col>
      </Row>
    );
  }
}

export default Detail;
