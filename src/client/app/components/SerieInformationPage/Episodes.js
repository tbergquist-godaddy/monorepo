import React from 'react';
import {observer} from 'mobx-react';
import flex from '../../flex.scss';
import styles from '../../app.scss';
import {Episode} from './';

@observer
class Episodes extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let episodes = this.props.episodes;
    if(!episodes) {
      return null;
    }
    return (
    <div>
      {episodes.map(episode => <Episode key={episode.id} episode={episode} /> )}
    </div>
    )
  }
}

export default Episodes;