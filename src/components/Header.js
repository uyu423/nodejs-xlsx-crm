import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends React.Component {
  showAlertLogin() {
    alert("로그인 기능은 개발 예정입니다.");
  }
  render() {
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <FontAwesome name="apple"/> 다애컴퍼니
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/manage">
            <NavItem>파일 관리</NavItem>
          </LinkContainer>
          <NavDropdown title="데이터" id="basic-nav-dropdown">
            <LinkContainer to="/viewer">
              <MenuItem>전체 보기</MenuItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem onClick={this.showAlertLogin.bind(this)}><FontAwesome name="sign-in"/> 로그인</NavItem>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }
}
