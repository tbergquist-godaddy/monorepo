import React from 'react';
import {observer} from 'mobx-react';
import {SeriesStore} from '../stores';
import {
  action,
  observable
} from 'mobx';
import {
  MySpinner,
  FlexContainerColumn,
  FlexContainerRow,
  FlexItem
} from '../components';
import styles from '../components/SearchPage/SearchPage.scss';
import appStyles from '../app.scss';
import {
  FavoritesListHeader,
  FavoritesListItem
} from '../components/FavoritesPage';
import moment from 'moment';

@observer
class FavoritesPage extends React.Component {

  @observable favorites = [];

  constructor(props) {
    super(props);

    this.sortBy             = this.sortBy.bind(this);
    this.sortByAirDate      = this.sortByAirDate.bind(this);
    this.sortBypreviousDate = this.sortBypreviousDate.bind(this);
  }

  @action
  async componentWillMount() {
    try {
      await SeriesStore.getFavorites();
      this.favorites = SeriesStore.series;
    }
    catch (err) {
      console.log(err);
      this.favorites.push({id: 1, name: 'load failded'});

    }
  }

  @action
  componentWillUnmount() {
    SeriesStore.series = [];
  }

  @action
  sortBy(columnName) {
    this.favorites = this.favorites.sort((a, b) => {
      if (a[columnName] > b[columnName]) {
        return 1;
      }
      else if (a[columnName] < b[columnName]) {
        return -1;
      }
      return 0;
    })
  }

  @action
  sortByAirDate() {
    this.favorites = this.favorites.sort((a, b) => {
      let dateA = a.nextEpisode ? moment(a.nextEpisode.airdate) : moment().subtract(100, 'years');
      let dateB = b.nextEpisode ? moment(b.nextEpisode.airdate) : moment().subtract(100, 'years');
      if (dateA > dateB) {
        return 1;
      }
      else if (dateA < dateB) {
        return -1;
      }
      return 0;
    })
  }

  @action
  sortBypreviousDate() {
    this.favorites = this.favorites.sort((a, b) => {
      let dateA = a.latestEpisode ? moment(a.latestEpisode.airdate) : moment().subtract(100, 'years');
      let dateB = b.latestEpisode ? moment(b.latestEpisode.airdate) : moment().subtract(100, 'years');
      if (dateA > dateB) {
        return 1;
      }
      else if (dateA < dateB) {
        return -1;
      }
      return 0;
    })
  }

  render() {
    if (this.favorites.length === 0) {
      return <MySpinner spin={true}/>
    }
    return (
      <FlexContainerColumn>
        <FlexItem
          className={appStyles.innerContainer}
          flex={100}>
          <h2>My favorites</h2>
          <FavoritesListHeader
            sortBy={this.sortBy}
            sortByAirDate={this.sortByAirDate}
            sortBypreviousDate={this.sortBypreviousDate}
          />
          {this.favorites.map(favorite =>
            <FavoritesListItem key={favorite.id} show={favorite}/>
          )}
        </FlexItem>
      </FlexContainerColumn>
    )
  }
}

export default FavoritesPage;