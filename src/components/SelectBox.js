import React from 'react';
import PropTypes from 'prop-types';

const SelectBox = ({ value, onChange, types }) => (
  <select value={value} onChange={onChange}>
    {types.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
);

export default SelectBox;

SelectBox.propTypes = {
  value: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
