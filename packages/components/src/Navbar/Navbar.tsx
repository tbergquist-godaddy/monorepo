import { useState, Children, cloneElement, ReactNode } from 'react';
import { MdMenu } from 'react-icons/md';
import AnimateHeight from 'react-animate-height';

import Container from '../Container';
import { Media } from '../Media';
import { classNames } from './Navbar.css';

type Props = Readonly<{
  brand: ReactNode;
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
}>;

function Separator({ children, toggle }) {
  return <div className={classNames.separator}>{cloneElement(children, { onClick: toggle })}</div>;
}

export default function Navbar(props: Props): JSX.Element {
  const [expandMenu, setExpandMenu] = useState(false);
  function toggleExpand() {
    setExpandMenu((expand) => !expand);
  }
  return (
    <nav className={classNames.nav}>
      <Container className={classNames.navContainer} data-test="NavContainer">
        <div className={classNames.contentPadding}>
          <div className={classNames.flexContainer}>
            <div className={classNames.headerLeftContainer}>
              <a className={classNames.brand} href="/">
                {props.brand}
              </a>
              <Media greaterThanOrEqual="tablet">
                <div className={classNames.headerContainer}>{props.headerLeft}</div>
              </Media>
            </div>
            <div>
              <Media greaterThanOrEqual="tablet">
                <div className={classNames.headerContainer}>{props.headerRight}</div>
              </Media>
              <Media lessThan="tablet">
                <button
                  aria-label="menu"
                  aria-expanded={expandMenu}
                  className={classNames.burgerButton}
                  type="button"
                  onClick={toggleExpand}
                >
                  <MdMenu className={classNames.icon} />
                </button>
              </Media>
            </div>
          </div>
          <Media className={classNames.expandMenu} lessThan="tablet">
            <AnimateHeight height={expandMenu ? 'auto' : 0}>
              <Container className={classNames.smallMenuContainer}>
                {Children.map(props.headerLeft, (child) => (
                  <Separator toggle={() => setExpandMenu(false)}>{child}</Separator>
                ))}
                {Children.map(props.headerRight, (child) => (
                  <Separator toggle={() => setExpandMenu(false)}>{child}</Separator>
                ))}
              </Container>
            </AnimateHeight>
          </Media>
        </div>
      </Container>
    </nav>
  );
}
