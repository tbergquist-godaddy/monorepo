// @flow

import { useState, Children, type Node, type Element } from 'react';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';
// eslint-disable-next-line no-restricted-imports
import Link from 'next/link';

import Container from './Container';
import Button from './button/Button';
import { Media } from './Media';

const NAV_BACKGROUND = '#222';
const Nav = styled.nav(({ theme, isExpanded }) => ({
  backgroundColor: theme.navBarColor,
  borderColor: '#090909',
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  minHeight: '50px',
  zIndex: theme.zIndex.onTop,
  transition: 'all 0.3s ease',
  maxHeight: isExpanded ? '200px' : '50px',
}));

const NavLink = styled.a(({ marginLeft, theme }) => ({
  'color': '#e2e2e2',
  'textDecoration': 'none',
  ':hover': {
    color: '#fff',
  },
  'marginLeft': 0,
  [theme.media.tablet]: {
    marginLeft,
  },
}));

const Brand = styled(NavLink)({
  fontSize: '18px',
});

const ContentPadding = styled.div({
  paddingTop: '15px',
  paddingBottom: '15px',
  flex: 1,
});

const FlexContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flex: 1,
});

const NavContainer = styled(Container)({
  display: 'flex',
});

const BurgerButton = styled(Button)({
  'maxHeight': '20px',
  'border': 'none',
  'backgroundColor': NAV_BACKGROUND,
  ':hover': {
    backgroundColor: NAV_BACKGROUND,
  },
});

const HeaderContainer = styled.div({
  'display': 'flex',
  '*': {
    'marginRight': '8px',
    ':last-child': {
      marginRight: 0,
    },
  },
});

const HeaderLeftContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const ExpandedHeader = styled.div({});

const Separator = styled.div({
  '*': {
    display: 'block',
    paddingTop: '12px',
  },
});

type Props = {
  +brand: Node,
  +headerLeft?: Node,
  +headerRight?: Node,
};

export default function Navbar(props: Props): Element<any> {
  const [expandMenu, setExpandMenu] = useState(false);
  function toggleExpand() {
    setExpandMenu((expand) => !expand);
  }
  return (
    <Nav isExpanded={expandMenu}>
      <NavContainer>
        <ContentPadding>
          <FlexContainer>
            <HeaderLeftContainer>
              <Link href="/">
                <Brand href="/">{props.brand}</Brand>
              </Link>
              <Media greaterThanOrEqual="tablet">
                <HeaderContainer>{props.headerLeft}</HeaderContainer>
              </Media>
            </HeaderLeftContainer>
            <div>
              <Media greaterThanOrEqual="tablet">
                <HeaderContainer>{props.headerRight}</HeaderContainer>
              </Media>
              <Media lessThan="tablet">
                <BurgerButton size="small" onClick={toggleExpand}>
                  <MdMenu />
                </BurgerButton>
              </Media>
            </div>
          </FlexContainer>
          <Media lessThan="tablet">
            {expandMenu && (
              <ExpandedHeader>
                {Children.map(props.headerLeft, (child) => (
                  <Separator>{child}</Separator>
                ))}
                {Children.map(props.headerRight, (child) => (
                  <Separator>{child}</Separator>
                ))}
              </ExpandedHeader>
            )}
          </Media>
        </ContentPadding>
      </NavContainer>
    </Nav>
  );
}
