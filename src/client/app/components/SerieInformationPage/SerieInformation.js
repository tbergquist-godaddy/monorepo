import React from 'react';
import {observer} from 'mobx-react';
import flex from '../../flex.scss';
import styles from '../../app.scss';

@observer
class SerieInformation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let serie = this.props.serie;

    return (
      <div className={flex.flexContainerColumn}>
        <div className={`${flex.flexOne} ${flex.flexInner}`}>
          <div className={flex.flexContainerRow}>
            <div className={flex.flexOne}>
              <img src={serie.imageUrl}/>
            </div>
            <div className={`${flex.flexTen} ${styles.marginLeft}`}>
              <div dangerouslySetInnerHTML={{__html : serie.summary}}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SerieInformation;