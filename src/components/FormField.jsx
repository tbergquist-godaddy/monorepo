import React from 'react';
import PropTypes from 'prop-types';

class FormField extends React.Component {

  render() {
    const { labelText, type, name, value, onChange, placeholder } = this.props;
    return(
      <div className="form-group">
        <label>{labelText}</label>
        <input
          type={type || 'text'}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          />
      </div>
    )
  }
}

FormField.PropTypes = {
  labelText: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default FormField;
