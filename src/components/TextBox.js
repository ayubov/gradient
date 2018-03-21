import React from 'react';
import PropTypes from 'prop-types';
import { error } from '../constants';

const TextBox = ({ onChange, value = '', isValid, format }) =>
  isValid ? (
    <input type="text" value={value} onChange={onChange} />
  ) : (
    <div className="invalid">
      <input type="text" value={value} onChange={onChange} />
      {`${error}(${format})`}
    </div>
  );

export default TextBox;

TextBox.propTypes = {
  value: PropTypes.string,
  isValid: PropTypes.bool.isRequired,
  format: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
