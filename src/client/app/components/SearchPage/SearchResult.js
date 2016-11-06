import React from 'react';
import {observer} from 'mobx-react';
import {SeriesStore} from '../../stores';
import flex from '../../flex.scss';
import {SearchResultItem} from './';
import styles from './SearchPage.scss';

@observer
class SearchResult extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let series = SeriesStore.series;
    if(series.length === 0) {
      return null;
    }
    return (
      <div className={flex.flexContainerColumn}>
        <div className={flex.flexOne}>
          <div className={flex.flexContainerRow}>
            <div className={`${flex.flexBasis33} ${styles.borderItem} ${styles.header}`}>
              Name
            </div>
            <div className={`${flex.flexBasis33} ${styles.borderItem} ${styles.header}`}>
              Status
            </div>
            <div className={`${flex.flexBasis33} ${styles.borderItem} ${styles.header}`}>
              Score
            </div>
          </div>
          {series.map(serie => {
            return (
              <SearchResultItem show={serie} key={serie.id} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default SearchResult;