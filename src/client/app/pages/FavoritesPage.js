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

@observer
class FavoritesPage extends React.Component {

  @observable favorites = [];

  constructor(props) {
    super(props);
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
          <FavoritesListHeader />
          {this.favorites.map(favorite =>
            <FavoritesListItem key={favorite.id} show={favorite}/>
          )}
        </FlexItem>
      </FlexContainerColumn>
    )
  }
}

export default FavoritesPage;