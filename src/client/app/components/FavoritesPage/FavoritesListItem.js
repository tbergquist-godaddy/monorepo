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
class FavoritesListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlexContainerRow>
        <FlexItem
          className={`${styles.borderItem}`}
          flex={25}>
          {this.props.show.name}
        </FlexItem>
        <FlexItem
          className={`${styles.borderItem}`}
          flex={25}>
          {this.props.show.status || 'missing'}
        </FlexItem>
        <FlexItem
          className={`${styles.borderItem}`}
          flex={25}>
          Not yet impolemented
        </FlexItem>
        <FlexItem
          className={`${styles.borderItem} `}
          flex={25}>
          Coming soon
        </FlexItem>
      </FlexContainerRow>
    )
  }
}

export default FavoritesListItem;