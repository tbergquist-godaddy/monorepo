import React from 'react';
import {observer} from 'mobx-react';
import flex from '../../flex.scss';
import styles from '../../app.scss';
import {Episode} from './';
import {FlexItem} from '../'
import searchResultStyles from '../SearchPage/SearchPage.scss';

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
      <div className={flex.flexContainerRow}>
        <FlexItem
          className={`${searchResultStyles.borderItem} ${searchResultStyles.header}`}
          flex={20}
        >
          Season/episode
        </FlexItem>
        <FlexItem
          flex={20}
          className={`${searchResultStyles.borderItem} ${searchResultStyles.header}`}
        >
          Airdate
        </FlexItem>
        <FlexItem
          className={`${searchResultStyles.borderItem} ${searchResultStyles.header}`}
          flex={60}
        >
          Summary
        </FlexItem>
      </div>
      {episodes.map(episode => <Episode key={episode.id} episode={episode} /> )}
    </div>
    )
  }
}

export default Episodes;