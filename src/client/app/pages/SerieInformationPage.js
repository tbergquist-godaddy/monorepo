import React from 'react';
import {observer} from 'mobx-react';
import {SeriesStore} from '../stores'
import {
  action,
  observable
} from 'mobx';
import flex from '../flex.scss';
import styles from '../app.scss';
import {SerieInformation, Episodes} from '../components/SerieInformationPage';

@observer
class SerieInformationPage extends React.Component {

  @observable serie = null;

  constructor(props) {
    super(props);
  }

  @action
  async componentWillMount() {
    this.serie = await SeriesStore.getSerie(this.props.params.id);
  }

  render() {
    let serie = this.serie;
    if (!serie) {
      return <div>...loading</div>;
    }
    return (
      <div >
        <SerieInformation serie={serie}/>
        <Episodes episodes={serie.episodes} />
      </div>
    )
  }
}

export default SerieInformationPage;