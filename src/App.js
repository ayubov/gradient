import React from 'react';
import ReactDOM from 'react-dom';
import Gradient from './containers/Gradient';

class App extends React.Component {
  render() {
    return <Gradient />;
  }
}

const mountNode = document.getElementById('app');

ReactDOM.render(<App />, mountNode);
