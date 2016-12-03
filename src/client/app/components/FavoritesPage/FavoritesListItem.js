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
import moment from 'moment';
import {Link} from 'react-router';
import {SeriesStore} from '../../stores';

@observer
class FavoritesListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let nextEpisode = this.props.show.nextEpisode;
    let latestEpisdoe = this.props.show.latestEpisode;
    return (
      <FlexContainerRow>
        <FlexItem
          className={`${styles.borderItem}`}
          flex={25}>
          <Link to={`/series/${this.props.show.id}`}>
            {this.props.show.name}
          </Link>
        </FlexItem>
        <FlexItem
          className={`${styles.borderItem}`}
          flex={25}>
          {this.props.show.status}
        </FlexItem>
        <FlexItem
          className={`${styles.borderItem}`}
          flex={20}>
          {nextEpisode ? moment(nextEpisode.airdate).format('DD.MM.YYYY') : 'Unknown'}
        </FlexItem>
        <FlexItem
          className={`${styles.borderItem}`}
          flex={20}>
          {latestEpisdoe ? moment(latestEpisdoe.airdate).format('DD.MM.YYYY') : 'Unknown'}
        </FlexItem>
        <FlexItem
          className={`${styles.borderItem} `}
          flex={10}>
          <button
            className="btn btn-danger"
            onClick={() => SeriesStore.deleteFavorite(this.props.show.id)}
            >
            <div className="glyphicon glyphicon-trash" />
          </button>
        </FlexItem>
      </FlexContainerRow>
    )
  }
}

export default FavoritesListItem;