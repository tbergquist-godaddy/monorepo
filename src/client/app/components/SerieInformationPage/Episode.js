import React from 'react';
import {observer} from 'mobx-react';
import flex from '../../flex.scss';
import styles from '../../app.scss';
import {FlexItem} from '../';
import searchResultStyles from '../SearchPage/SearchPage.scss';

@observer
class Episode extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let episode = this.props.episode;

    return (
      <div className={flex.flexContainerColumn}>
        <div className={`${flex.flexOne} ${flex.flexInner}`}>
          <div className={flex.flexContainerRow}>
            <FlexItem
               className={searchResultStyles.borderItem}
              flex={20}
            >
              {episode.name}
            </FlexItem>
            <FlexItem
              flex={20}
              className={searchResultStyles.borderItem}
            >
              {episode.airdate}
            </FlexItem>
            <FlexItem
              className={searchResultStyles.borderItem}
              flex={60}
            >
              <div dangerouslySetInnerHTML={episode.summary}/>
            </FlexItem>
          </div>
        </div>
      </div>
    )
  }
}

export default Episode;