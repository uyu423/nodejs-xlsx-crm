import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, PageHeader, Table, Alert, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { getDataRequest } from 'actions/data';
import { DataItem } from 'components';
import FontAwesome from 'react-fontawesome';

class ViewerCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page : 1,
      calcOps : {
        ko : ""
      }
    }
  }
  componentDidMount() {
    //this.props.getDataRequest(this.state.page);
  }
  componentDidUpdate() {
    switch(this.props.params.group) {
        case "ordername":
          this.setState({
            calcOps :{
              ko : "주문자 이름"
            }
          });
          break;
        case "callnumber":
          this.setState({
            calcOps :{
              ko : "주문자 연락처"
            }
          });
          break;
        case "address":
          this.state.calcOps.ko = "주소";
          break;
        default:
          throw new Error("잘못된 페이지 접근");
    }
  }
  showAlert() {
    alert("개발 예정입니다.");
  }
  nextPage() {
    this.setState({
      page : this.state.page + 1
    }, () => {
      //this.props.getDataRequest(this.state.page);
    })
  }
  setPageZero() {
    this.setState({
      page : 1
    }, () => {
      //this.props.getDataRequest(this.state.page);
    })
  }
  render() {
    const ts = {
      textAlign : "center"
    };
    const pr = {
      textAlign : "right"
    }
    const mapToComponents = data => {
      return data.map((item, i) => {
        return (
          <DataItem
            data={item}
            key={item.idx}
          />);
      });
    };
    return(
      <Row>
        <Col md={12}>
          <PageHeader>데이터 <small>전체보기</small></PageHeader>
              <Alert bsStyle="success">
                <FontAwesome name='exclamation-circle'/> <strong>{this.state.calcOps.ko}</strong> 기준으로 그룹핑되며 100개씩 출력됩니다. (총 판매 금액 내림차순)
                <span className="pull-right">
                <ButtonToolbar>
                  <ButtonGroup>
                    <Button disabled={ this.state.page == 1 ? true : false } onClick={this.setPageZero.bind(this)} bsSize="xsmall" bsStyle="primary">첫 페이지로</Button>
                    <Button onClick={this.nextPage.bind(this)} bsSize="xsmall" bsStyle="primary">다음 100개 보기</Button>
                  </ButtonGroup>
                </ButtonToolbar>
                </span>
              </Alert>
          <Table>
            <thead>
              <tr>
              <th style={ts}>그룹화 기준</th>
              <th>총 판매 금액</th>
              <th>데이터 갯수</th>
              <th style={ts}>상세 보기</th>
              </tr>
            </thead>
            <tbody>
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
    getDataRequest : (page) => {
      return dispatch(getDataRequest(page));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewerCalc);
