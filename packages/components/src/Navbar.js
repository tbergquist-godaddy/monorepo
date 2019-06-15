// @flow

import * as React from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { MdMenu } from 'react-icons/md';

import Button from './Button';

const NAV_BACKGROUND = '#222';
const Nav = styled.nav({
  backgroundColor: NAV_BACKGROUND,
  borderColor: '#090909',
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  minHeight: '50px',
  zIndex: defaultTokens.zIndexOnTheTop,
});

const NavLink = styled.a(({ marginLeft }) => ({
  color: '#e2e2e2',
  textDecoration: 'none',
  ':hover': {
    color: '#fff',
  },
  marginLeft: 0,
  [`@media only screen and (min-width: ${defaultTokens.widthBreakpointTablet}px)`]: {
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
  maxHeight: '20px',
  backgroundColor: NAV_BACKGROUND,
  ':hover': {
    backgroundColor: NAV_BACKGROUND,
  },
  [`@media only screen and (min-width: ${defaultTokens.widthBreakpointTablet}px)`]: {
    display: 'none',
  },
});

const HeaderContainer = styled.div({
  display: 'none',
  [`@media only screen and (min-width: ${defaultTokens.widthBreakpointTablet}px)`]: {
    display: 'flex',
  },
});

const HeaderLeftContainer = styled.div({
  display: 'flex',
});

const ExpandedHeader = styled.div({
  paddingTop: '8px',
  [`@media only screen and (min-width: ${defaultTokens.widthBreakpointTablet}px)`]: {
    display: 'none',
  },
});

type Props = {|
  +brand: React.Node,
  +headerLeft?: React.Node,
  +headerRight?: React.Node,
|};

export default function Navbar(props: Props) {
  const [expandMenu, setExpandMenu] = React.useState(false);
  function toggleExpand() {
    setExpandMenu(expand => !expand);
  }
  return (
    <Nav>
      <NavContainer>
        <ContentPadding>
          <FlexContainer>
            <HeaderLeftContainer>
              <Brand href="/">{props.brand}</Brand>
              <HeaderContainer>{props.headerLeft}</HeaderContainer>
            </HeaderLeftContainer>
            <HeaderContainer>{props.headerRight}</HeaderContainer>
            <BurgerButton size="small" onClick={toggleExpand}>
              <MdMenu />
            </BurgerButton>
          </FlexContainer>
          {expandMenu && (
            <ExpandedHeader>
              <div>{props.headerLeft}</div>
              <div>{props.headerRight}</div>
            </ExpandedHeader>
          )}
        </ContentPadding>
      </NavContainer>
    </Nav>
  );
}
