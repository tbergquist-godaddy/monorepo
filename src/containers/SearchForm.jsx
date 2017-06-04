import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchTextChange } from '../actions/SearchForm.actions';
import FormField from '../components/FormField.jsx';

class SearchForm extends React.Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { dispatch } = this.props;
    dispatch(searchTextChange(e));
  }

  onSubmit(e) {
    const { name, onFormSubmitted } = this.props;
    e.preventDefault();
    onFormSubmitted(name);
  }

  render() {
    const { name } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <FormField
          value={name}
          onChange={this.onChange}
          placeholder="search"
          labelText="Tv show"
        />
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary pull-right"
            value="Search"/>
        </div>
      </form>
    );
  }
}

SearchForm.PropTypes = {
  onFormSubmitted: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  name: state.SearchForm.name,
});

export default connect(mapStateToProps)(SearchForm);
