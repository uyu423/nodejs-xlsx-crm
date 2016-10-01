import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends React.Component {
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
            <MenuItem divider />
            <LinkContainer to="/viewer/ordername">
              <MenuItem>주문자 이름으로 그룹화</MenuItem>
            </LinkContainer>
            <LinkContainer to="/viewer/callnumber">
              <MenuItem>주문자 연락처로 그룹화</MenuItem>
            </LinkContainer>
            <LinkContainer to="/viewer/address">
              <MenuItem>주소로 그룹화</MenuItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem>뭐 넣을까</NavItem>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }
}
