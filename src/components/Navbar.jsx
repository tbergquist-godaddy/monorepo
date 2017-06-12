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
import Translate from '../utils/Translate';

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
    let favoritesLink = null;

    if (this.isLoggedIn) {
      rightNav = (
        <Nav pullRight>
          <NavItem
            href="/logout"
            onClick={this.onLogoutClick}
          >
            {Translate('components.Header.logout')}
          </NavItem>
        </Nav>
      );
      favoritesLink =
        <NavItem href="/favorites" onClick={() => this.onLinkClick('/favorites')}>{Translate('components.Header.favorites')}</NavItem>;
    }
    else {
      rightNav = (
        <Nav pullRight>
          <NavItem
            href="/login"
            onClick={() => this.onLinkClick('/login')}
          >
            {Translate('components.Header.login')}
          </NavItem>
        </Nav>
      );
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
              {Translate('components.Header.search')}
            </NavItem>
            {favoritesLink}
          </Nav>
          {rightNav}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Header);
