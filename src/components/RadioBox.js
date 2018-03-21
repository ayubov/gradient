import React from 'react';
import PropTypes from 'prop-types';

const RadioBox = ({ onChange, isPickerActive }) => (
  <form>
    <div className="radio">
      <label>
        <input
          type="radio"
          value="off"
          checked={!isPickerActive}
          onChange={() => onChange('off')}
        />
        color picker Off
      </label>
    </div>
    <div className="radio">
      <label>
        <input
          type="radio"
          value="on"
          checked={isPickerActive}
          onChange={() => onChange('on')}
        />
        color picker On
      </label>
    </div>
  </form>
);

export default RadioBox;

RadioBox.propTypes = {
  isPickerActive: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
