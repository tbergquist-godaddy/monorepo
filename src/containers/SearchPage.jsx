import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.jsx';
import SearchForm from './SearchForm.jsx';
import * as actions from '../actions/SearchPage.actions';
import SerieTable from '../components/SerieTable.jsx';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);

    this.searchSeries = this.searchSeries.bind(this);
  }

  searchSeries(text) {
    const { dispatch } = this.props;
    dispatch(actions.searchSeries(text));
  }

  render() {
    const { series } = this.props;
    let seriesTableHeader = series.length > 0 ? 'Search Result' : null;
    return (
      <div>
        <Navbar/>
        <div className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <h2>Search</h2>
                <SearchForm
                  onFormSubmitted={this.searchSeries}
                />
              </div>
              <div className="col-sm-6 col-xs-12">
                <h2>{seriesTableHeader}</h2>
                <SerieTable series={series}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  series: state.SearchPage.series,
});

export default connect(mapStateToProps)(SearchPage);