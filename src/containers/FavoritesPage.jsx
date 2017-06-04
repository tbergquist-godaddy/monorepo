import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.jsx';
import * as actions from '../actions/FavoritesPage.actions';
import Spinner from './spinner/Spinner.jsx';
import alertify from 'alertifyjs';
import { withRouter } from 'react-router-dom';
import FavoritesTable from '../components/FavoritesTable.jsx';

class FavoritesPage extends React.Component {

  constructor(props) {
    super(props);

    this.deleteFavorite = this.deleteFavorite.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchFavorites());
  }

  componentWillReceiveProps(nextProps) {
    const { loadError, history } = nextProps;

    if (loadError) {
      alertify.notify('Failed to fetch favorites', 'error', 5);
      history.push('/login');
    }
  }

  deleteFavorite(id) {
    const { dispatch } = this.props;
    dispatch(actions.deleteFavorite(id));
  }

  sortBy(property) {
    const { dispatch, sortProperty } = this.props;

    if (sortProperty === property && sortProperty.charAt(0) !== '-') {
      property = `-${property}`;
    }

    dispatch(actions.sortFavorites(property));
  }

  render() {
    const { favorites } = this.props;
    console.log('favorites', favorites);
    return (
      <div>
        <Navbar/>
        <Spinner/>
        <div className="container main-content">
          <div className="row">
            <div className="col-xs-12">
              <h2>My favorites</h2>
              <FavoritesTable
                favorites={favorites}
                deleteFavorite={this.deleteFavorite}
                sortBy={this.sortBy}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  favorites: state.FavoritesPage.favorites,
  loadError: state.FavoritesPage.loadError,
  sortProperty: state.FavoritesPage.sortProperty,
});

export default connect(mapStateToProps)(withRouter(FavoritesPage));
