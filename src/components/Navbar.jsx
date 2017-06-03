import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Transport from '../utils/Transport';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.isLoggedIn = null;
    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.onLinkClick = this.onLinkClick.bind(this);
  }

  componentWillMount() {
    this.isLoggedIn = Transport.isLoggedIn();
  }

  onLinkClick(path) {
    const { history } = this.props;
    history.push(path);
    return false;
  }

  onLogoutClick(e) {
    const { history } = this.props;
    Transport.clearToken();
    location.href = '/';
    return false;
  }

  render() {
    let rightNav;
    if (this.isLoggedIn) {
      rightNav = (
        <Nav pullRight>
          <NavItem
            href="/logout"
            onClick={this.onLogoutClick}
          >
            Log out
          </NavItem>
        </Nav>
      )
    }
    else {
      rightNav = (
        <Nav pullRight>
          <NavItem
            href="/login"
            onClick={() => this.onLinkClick('/login')}
          >
            Log in
          </NavItem>
        </Nav>
      )
    }
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/">Tv helper</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem
              href="/"
              onClick={() => this.onLinkClick('/')}
            >
              Search
            </NavItem>
          </Nav>
          {rightNav}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Header);
