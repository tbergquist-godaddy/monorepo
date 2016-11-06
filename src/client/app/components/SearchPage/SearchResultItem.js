import React from 'react';
import {observer} from 'mobx-react';
import flex from '../../flex.scss';
import styles from './SearchPage.scss';
import {Link} from 'react-router';

@observer
class SearchResultItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let show = this.props.show
    return (
      <div className={flex.flexContainerRow}>
        <div className={`${flex.flexBasis33} ${styles.borderItem}`}>
          <Link to={`/series/${show.id}`}>{show.name}</Link>
        </div>
        <div className={`${flex.flexBasis33} ${styles.borderItem}`}>
          {show.status}
        </div>
        <div className={`${flex.flexBasis33} ${styles.borderItem}`}>
          {show.score ? show.score.toFixed(1) : 'N/A'}
        </div>
      </div>
    )
  }
}

export default SearchResultItem;