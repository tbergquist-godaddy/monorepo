import React from 'react';
import {observer} from 'mobx-react';
import {
  SeriesStore,
  FavoritesStore
} from '../stores'
import {
  action,
  observable
} from 'mobx';
import flex from '../flex.scss';
import styles from '../app.scss';
import {SerieInformation, Episodes} from '../components/SerieInformationPage';
import {MySpinner} from '../components';

@observer
class SerieInformationPage extends React.Component {

  @observable serie = null;

  constructor(props) {
    super(props);

    this.addToFavorites = this.addToFavorites.bind(this);
  }

  @action
  async componentWillMount() {
    this.serie = await SeriesStore.getSerie(this.props.params.id);
  }

  @action
  async addToFavorites() {
    try {
      let reply = await FavoritesStore.addToFavorites(this.serie.id);
      alert('added');
    }
    catch(error) {
      console.log('err')
    }
  }

  render() {
    let serie = this.serie;
    if (!serie) {
      return <MySpinner spin={true}/>;
    }
    return (
      <div >

        <SerieInformation serie={serie}/>
        <button
          className="btn btn-success"
          style={{marginBottom : '5px'}}
          onClick={this.addToFavorites}
        >
          Add to favorites
        </button>
        <Episodes episodes={serie.episodes} />
      </div>
    )
  }
}

export default SerieInformationPage;