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
            <MenuItem>최다 주문자(이름)</MenuItem>
            <MenuItem>최다 주문자(주소)</MenuItem>
            <MenuItem>최다 주문자(연락처)</MenuItem>
            <MenuItem divider />
            <MenuItem>이건 뭐하지</MenuItem>
          </NavDropdown>`
        </Nav>
        <Nav pullRight>
          <NavItem>뭐 넣을까</NavItem>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }
}
