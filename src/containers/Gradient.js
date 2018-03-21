import React from 'react';
import Input from './Input';
import { validate, convertToHex as convert } from '../utils';

export default class Gradient extends React.Component {
  state = {
    inputFrom: {
      type: 'hex',
      color: '#ffff00',
      isValid: true,
    },
    inputTo: {
      type: 'hex',
      color: '#000044',
      isValid: true,
    },
    gradient: {
      from: '#ffff00',
      to: '#000044',
    },
  };

  onAddColor = (id, color) =>
    this.setState({ [id]: { ...this.state[id], color } });

  onGo = e => {
    e.preventDefault();
    const {
      inputFrom: { type: typeFrom, color: colorFrom },
      inputTo: { type: typeTo, color: colorTo },
      inputFrom,
      inputTo,
    } = this.state;
    this.setState(
      {
        inputFrom: {
          ...inputFrom,
          isValid: validate(colorFrom, typeFrom),
        },
        inputTo: {
          ...inputTo,
          isValid: validate(colorTo, typeTo),
        },
      },
      () =>
        this.state.inputFrom.isValid &&
        this.state.inputTo.isValid &&
        this.setState({
          gradient: {
            from: convert(colorFrom, typeFrom),
            to: convert(colorTo, typeTo),
          },
        }),
    );
  };

  onSelectType = (id, type) =>
    this.setState({ [id]: { ...this.state[id], type } });

  render() {
    const { inputFrom, inputTo, gradient: { from, to } } = this.state;
    const divStyle = { background: `linear-gradient(${from}, ${to})` };
    return (
      <div className="form" style={divStyle}>
        <form onSubmit={this.onGo}>
          <Input
            color={inputFrom.color}
            isValid={inputFrom.isValid}
            type={inputFrom.type}
            selectValue={inputFrom.type}
            onAddColor={e => this.onAddColor('inputFrom', e.target.value)}
            onPicColor={color => {
              this.onAddColor('inputFrom', color.hex);
              this.onSelectType('inputFrom', 'hex');
            }}
            onSelectType={e => this.onSelectType('inputFrom', e.target.value)}
          />
          <Input
            color={inputTo.color}
            isValid={inputTo.isValid}
            type={inputTo.type}
            selectValue={inputTo.type}
            onAddColor={e => this.onAddColor('inputTo', e.target.value)}
            onPicColor={color => {
              this.onAddColor('inputTo', color.hex);
              this.onSelectType('inputTo', 'hex');
            }}
            onSelectType={e => this.onSelectType('inputTo', e.target.value)}
          />
          <input className="button" type="submit" value="Go" />
        </form>
      </div>
    );
  }
}
