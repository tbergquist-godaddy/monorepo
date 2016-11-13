import React from 'react';
import {observer} from 'mobx-react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

@observer
class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar
        inverse
        collapseOnSelect
        fluid
      >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">TV-Helper</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/">
              <NavItem eventKey={1}>
                Search
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/favorites">
              <NavItem eventKey={2}>
                Favorites
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={3}>
                About
              </NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/account/create">
              <NavItem eventKey={4}>
                Create account
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem eventKey={5}>
                Login
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
