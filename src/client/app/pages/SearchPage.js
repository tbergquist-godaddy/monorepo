import React from 'react';
import {observer} from 'mobx-react';
import flex from '../flex.scss';
import {action, observable} from 'mobx';
import {
  SearchForm,
  SearchResult
} from '../components/SearchPage';
import {SeriesStore} from '../stores';

@observer
class SearchPage extends React.Component {

  @observable searchText;

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
    console.log('seaching');
    await SeriesStore.searchForSeries(this.searchText);
  }

  render() {
    return (
      <div className={`${flex.flexContainerRow}`}>
        <div className={flex.flexBasis50}>
          <div className={flex.flexInner}>
            <SearchForm
              onChange={this.onChange}
              value={this.searchText}
              onSubmit={this.onSubmit}
            />
          </div>
        </div>
        <div className={flex.flexBasis50}>
          <div className={flex.flexInner}>
            <SearchResult />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPage;