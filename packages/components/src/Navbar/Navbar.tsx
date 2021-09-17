import { ReactNode } from 'react';
import { MdMenu } from 'react-icons/md';
import AnimateHeight from 'react-animate-height';

import Container from '../Container';
import { Media } from '../Media';
import { classNames } from './Navbar.css';
import { useNavbar } from './useNavbar';

type Props = Readonly<{
  brand: ReactNode;
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
}>;

export default function Navbar(props: Props): JSX.Element {
  const {
    models: { expandMenu },
    operations: { toggleExpand },
  } = useNavbar();
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
                <button type="button" className={classNames.clickCapture} onClick={toggleExpand}>
                  {props.headerLeft}
                  {props.headerRight}
                </button>
              </Container>
            </AnimateHeight>
          </Media>
        </div>
      </Container>
    </nav>
  );
}
