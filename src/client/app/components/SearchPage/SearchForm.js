import React from 'react';
import {observer} from 'mobx-react';


@observer
class SearchForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.onSubmit(e)}>
          <input
            name="searchText"
            onChange={(e) => this.props.onChange(e)}
            className="form-control"
            value={this.props.value}
          />
          <input
            type="submit"
            className="btn btn-primary pull-right"
            value="Search"
          />
        </form>
      </div>
    )
  }
}

export default SearchForm;