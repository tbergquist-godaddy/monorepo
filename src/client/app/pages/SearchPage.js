import React from 'react';
import {observer} from 'mobx-react';
import flex from '../flex.scss';
import {action, observable} from 'mobx';
import {
  SearchForm,
  SearchResult
} from '../components/SearchPage';
import {SeriesStore} from '../stores';
import {MySpinner} from '../components';

@observer
class SearchPage extends React.Component {

  @observable searchText;
  @observable showSpinner = false;

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.searchText = '';
  }

  @action
  onChange(e) {
    this[e.target.name] = e.target.value;
  }

  @action
  async onSubmit(e) {
    e.preventDefault();
    this.showSpinner = true;
    //console.log('seaching');
    await SeriesStore.searchForSeries(this.searchText);
    this.showSpinner = false;
  }

  render() {
    return (
      <div className={`${flex.flexContainerRow}`}>
        <div className={flex.flexBasis50}>
          <div className={flex.flexInner}>
            <h2>Search for serie</h2>
            <SearchForm
              onChange={this.onChange}
              value={this.searchText}
              onSubmit={this.onSubmit}
            />
          </div>
        </div>
        <div className={flex.flexBasis50}>
          <div className={flex.flexInner}>
            {SeriesStore.series.length > 0 ? <h2>Search results</h2> : null}
            <SearchResult />
          </div>
        </div>
        <MySpinner
          spin={this.showSpinner}
        />
      </div>
    )
  }
}

export default SearchPage;