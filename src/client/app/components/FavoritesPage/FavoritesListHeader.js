import React from 'react';
import {observer} from 'mobx-react';
import {
  MySpinner,
  FlexContainerColumn,
  FlexContainerRow,
  FlexItem
} from '../';
import styles from '../SearchPage/SearchPage.scss';
import appStyles from '../../app.scss';


@observer
class FavoritesListHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlexContainerRow>
        <FlexItem
          className={`${styles.borderItem} ${styles.header}`}
          flex={25}>
          Name
        </FlexItem>
        <FlexItem
          className={`${styles.borderItem} ${styles.header}`}
          flex={25}>
          Status
        </FlexItem>
        <FlexItem
          className={`${styles.borderItem} ${styles.header}`}
          flex={25}>
          Next episode
        </FlexItem>
        <FlexItem
          className={`${styles.borderItem} ${styles.header}`}
          flex={25}>
          Action
        </FlexItem>
      </FlexContainerRow>
    )
  }
}

export default FavoritesListHeader;