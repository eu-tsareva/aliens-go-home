import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas';
import { getCanvasPosition } from './utils/formulas';

class App extends Component {
  componentDidMount() {
    const self = this;
    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition);
    }, 10);
    window.onresize = () => {
      const cnv = document.getElementById('aliens-go-home-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    }
    window.onresize();
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  render() {
    return (
     <Canvas
      angle={this.props.angle}
      trackMouse={event => (this.trackMouse(event))}
      startGame={this.props.startGame}
      gameState={this.props.gameState}
     />
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
  }).isRequired,
  startGame: PropTypes.func.isRequired,
};

export default App;
