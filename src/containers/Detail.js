import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, PageHeader, Table, Alert, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { getDetailRequest } from 'actions/detail';
import { LinkContainer } from 'react-router-bootstrap';

class Detail extends React.Component {
  componentDidMount() {
    this.props.getDetailRequest(this.props.params.idx);
  }
  render() {
    const de = this.props.detailRestults.default;
    const on = this.props.detailRestults.orderName;
    const oc = this.props.detailRestults.orderCall;
    const op = this.props.detailRestults.orderPhone;
    const a = this.props.detailRestults.address;
    if(de && on && oc && op && a) {
      return (
          <Row>
            <Col md={12}>
              <PageHeader>
                {de.order_number} / {de.order_name}&nbsp;
                <Button bsStyle="primary">돌아가기</Button>
              </PageHeader>
            </Col>
          </Row>
      );
    }
    return (
      <p>Loading..</p>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    detailStatus : state.detail.status,
    detailRestults : state.detail.results,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailRequest : (idx) => {
      return dispatch(getDetailRequest(idx));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
