import React from 'react';
import { Row, Col, PageHeader, Table, Button, FormControl, Alert } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { fileUploadRequest } from 'actions/file';
import { fileListRequest, fileDeleteRequest } from 'actions/fileList';

import { FileListItem } from 'components';

class FileManager extends React.Component {
  constructor(props) {
    super(props);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleOnChangeFile = this.handleOnChangeFile.bind(this);
    this.handleFileDelete = this.handleFileDelete.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.state = {
      isUploading : false
    };
  }
  componentDidMount() {
    this.props.fileListRequest();
  }
  showAlert() {
    alert("개발 예정입니다.");
  }
  handleFileUpload(file) {
    console.log('Received file: ', file);
    return this.props.fileUploadRequest(file).then(
      () => {
          if(this.props.fileStatus === 'SUCCESS') {
            console.log("OK");
            this.props.fileListRequest();
            return true;
          }
          else {
            console.log("FAILURE");
            return false;
          }
          this.setState({
            isUploading : false
          });
      }
    );
  }
  handleFileDelete(fileIdx) {
    return this.props.fileDeleteRequest(fileIdx).then(
      () => {
        if(this.props.fileDeleteStatus === 'SUCCESS') {
          alert("파일 삭제 성공");
          this.props.fileListRequest();
          return true;
        }
        else {
          alert("파일 삭제 실패");
          return false;
      }
    }
    );
  }
  handleOnChangeFile(e) {
    this.setState({
      isUploading : true
    });
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('xlsx', file, file.name);
    this.handleFileUpload(formData);
  }
  render() {
    const ts = {
      "textAlign" : "center"
    };
    const mapToComponents = data => {
      return data.map((item, i) => {
        return (
          <FileListItem
            data={item}
            key={item.idx}
            handleFileDelete={this.handleFileDelete}
          />);
      });
    };
    return(
      <Row>
        <Row>
        <Col md={12}>
          <PageHeader>파일 업로드</PageHeader>
          <Alert bsStyle="info">
            <strong>xls, xlsx</strong> 확장자를 가진 엑셀 파일만 업로드 할 수 있습니다.
          </Alert>
          <FormControl id="formControlsFile"
            type="file"
            label="File"
            onChange={this.handleOnChangeFile} />
        </Col>
        </Row>
        <Row>
          <Col md={12}>
            <PageHeader>파일 관리</PageHeader>
            <Table responsive>
              <thead>
                <tr>
                  <th style={ts}>Index</th>
                  <th>파일 이름</th>
                  <th style={ts}>업로드 날짜</th>
                  <th style={ts}>데이터 갯수</th>
                  <th style={ts}>Show Datas</th>
                  <th style={ts}>데이터 삭제</th>
                  <th style={ts}>삭제 날짜</th>
                </tr>
              </thead>
              <tbody>
                { mapToComponents(this.props.fileList) }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    fileStatus : state.file.status,
    fileListStatus : state.fileList.status,
    fileList : state.fileList.list,
    fileDeleteStatus : state.fileDelete.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fileUploadRequest : (xlsx) => {
      return dispatch(fileUploadRequest(xlsx));
    },
    fileListRequest : () => {
      return dispatch(fileListRequest());
    },
    fileDeleteRequest : (fileIdx) => {
      return dispatch(fileDeleteRequest(fileIdx));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileManager);
