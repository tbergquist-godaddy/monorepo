import React from 'react';
import {observer} from 'mobx-react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import {Link, browserHistory} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import {UserStore, SeriesStore} from '../stores';
import {
  action
} from 'mobx'

@observer
class Header extends React.Component {

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  @action
  logout(e) {
    e.preventDefault();

    UserStore.logout();
    SeriesStore.clear();
    browserHistory.push('/');
  }

  render() {

    let username = UserStore.username;

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
            {username ?
              <LinkContainer to="/account/edit">
                <NavItem eventKey={4}>
                  Hello {username}
                </NavItem>
              </LinkContainer>
              :
              <LinkContainer to="/account/create">
                <NavItem eventKey={4}>
                  Create account
                </NavItem>
              </LinkContainer>
            }
            {username ?
              <LinkContainer
                to="#"
                onClick={this.logout}
              >
                <NavItem eventKey={5}>
                  Log out
                </NavItem>
              </LinkContainer>
              :
              <LinkContainer to="/login">
                <NavItem eventKey={5}>
                  Log in
                </NavItem>
              </LinkContainer>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
