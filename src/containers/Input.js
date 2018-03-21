import React from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import TextBox from '../components/TextBox';
import SelectBox from '../components/SelectBox';
import RadioBox from '../components/RadioBox';
import { types } from '../constants';

export default class Input extends React.Component {
  state = {
    isPickerActive: false,
  };

  togglePicker = value => this.setState({ isPickerActive: value === 'on' });

  render() {
    const {
      color,
      isValid,
      type,
      onAddColor,
      onSelectType,
      onPicColor,
    } = this.props;
    const { isPickerActive } = this.state;
    return (
      <div>
        <TextBox
          value={color}
          isValid={isValid}
          format={type}
          onChange={onAddColor}
        />
        {isPickerActive || (
          <SelectBox value={type} types={types} onChange={onSelectType} />
        )}
        <RadioBox
          onChange={this.togglePicker}
          isPickerActive={isPickerActive}
        />
        {isPickerActive && (
          <SketchPicker color={color} onChangeComplete={onPicColor} />
        )}
      </div>
    );
  }
}

Input.propTypes = {
  color: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  onAddColor: PropTypes.func.isRequired,
  onSelectType: PropTypes.func.isRequired,
  onPicColor: PropTypes.func.isRequired,
};
