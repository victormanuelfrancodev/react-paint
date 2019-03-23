import React, { Component } from 'react';
import { render } from 'react-dom';
import { Circle } from 'react-konva';

class Circulo extends React.Component {

  render() {
    return (
      <Circle
        name = {this.props.name}
        x = {this.props.x}
        y = {this.props.y}
        radius = {this.props.radius}
        fill= {this.props.fill}
        draggable
      />
    );
  }
}

export default Circulo;
