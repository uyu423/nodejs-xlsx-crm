import React from 'react';
import { Row, Col, PageHeader, Table, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';

class FileManager extends React.Component {
  constructor(props) {
    super(props);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }
  handleFileUpload(files) {
    console.log('Received files: ', files);
  }
  render() {
    const ts = {
      "textAlign" : "center"
    };
    return(
      <Row>
        <Row>
        <Col md={12}>
          <PageHeader>엑셀 파일 업로더(xls, xlsx)</PageHeader>
          <Dropzone onDrop={this.handleFileUpload}>
              <div>이 곳을 눌러 엑셀 파일을 선택하거나 Drag & Drop하세요.</div>
          </Dropzone>
        </Col>
        </Row>
        <Row>
          <Col md={12}>
            <PageHeader>업로드 파일 관리</PageHeader>
            <Table responsive>
              <thead>
                <tr>
                  <th style={ts}>Index</th>
                  <th>파일 이름</th>
                  <th style={ts}>데이터 갯수</th>
                  <th style={ts}>업로드 날짜</th>
                  <th style={ts}>Show Datas</th>
                  <th style={ts}>삭제</th>
                  <th style={ts}>삭제 날짜</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={ts}>16</td>
                  <td>복탱이0929.xls</td>
                  <td style={ts}>321</td>
                  <td style={ts}>2016-09-29 21:47:40</td>
                  <td style={ts}><Button bsStyle="primary">Show</Button></td>
                  <td style={ts}><Button bsStyle="danger">삭제</Button></td>
                  <td style={ts}></td>
                </tr>
                <tr>
                  <td style={ts}>17</td>
                  <td>2016-09-17 13_00.xls</td>
                  <td style={ts}>112</td>
                  <td style={ts}>2016-09-29 21:47:47</td>
                  <td style={ts}><Button disabled>삭제됨</Button></td>
                  <td style={ts}><Button disabled>삭제됨</Button></td>
                  <td style={ts}>2016-09-29 21:47:47
</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fileStatus : state.file.file
  }
}

const mapDispacthToProps = (dispatch) => {
  return {
    fileUploadRequest : (xlsx) => {
      return dispatch(fileUploadRequest(xlsx));
    }
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(FileManager);
