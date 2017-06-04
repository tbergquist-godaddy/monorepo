import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.jsx';
import Spinner from './spinner/Spinner.jsx';
import * as actions from '../actions/SeriesPage.actions';
import SeriesHeader from '../components/SeriesHeader.jsx';
import EpisodeTable from '../components/EpisodeTable.jsx';
import AddToFavorites from '../components/AddToFavorites.jsx';

class SeriesPage extends React.Component {

  constructor(props) {
    super(props);

    this.addToFavorite = this.addToFavorite.bind(this);
  }

  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.loadSerie(match.params.id));
    dispatch(actions.isFavorite(match.params.id));
  }

  addToFavorite() {
    const { dispatch, match } = this.props;
    dispatch(actions.addToFavorite(match.params.id));
  }

  render() {
    const { serie, isFavorite } = this.props;
    return (
      <div>
        <Navbar/>
        <Spinner/>
        <div className="container main-content">
          <div className="row">
            <div className="col-xs-12">
              <SeriesHeader
                serie={serie}
              />
              <AddToFavorites
                isFavorite={isFavorite}
                addToFavorite={this.addToFavorite}
              />
              <EpisodeTable
                episodes={serie._embedded.episodes}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  serie: state.SeriePage.serie,
  isFavorite: state.SeriePage.isFavorite,
});

export default connect(mapStateToProps)(SeriesPage);
