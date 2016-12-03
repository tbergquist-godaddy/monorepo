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
          onClick={() => this.props.sortBy('name')}
          className={`${styles.borderItem} ${styles.header} ${appStyles.clickable}`}
          flex={25}>
          Name
        </FlexItem>
        <FlexItem
          onClick={() => this.props.sortBy('status')}
          className={`${styles.borderItem} ${styles.header} ${appStyles.clickable}`}
          flex={25}>
          Status
        </FlexItem>
        <FlexItem
          onClick={() => this.props.sortByAirDate()}
          className={`${styles.borderItem} ${styles.header} ${appStyles.clickable}`}
          flex={20}>
          Next episode
        </FlexItem>
        <FlexItem
          onClick={() => this.props.sortBypreviousDate()}
          className={`${styles.borderItem} ${styles.header} ${appStyles.clickable}`}
          flex={20}>
          Latest episode
        </FlexItem>
        <FlexItem
          className={`${styles.borderItem} ${styles.header}`}
          flex={10}>
          Action
        </FlexItem>
      </FlexContainerRow>
    )
  }
}

export default FavoritesListHeader;