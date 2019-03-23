import React, { Component } from 'react';
import { render } from 'react-dom';
import { Rect } from 'react-konva';

class Rectangulo extends React.Component {

  render() {
    return (
      <Rect
       name = {this.props.name}
        x = {this.props.x}
        y = {this.props.y}
        width= {this.props.width}
        height= {this.props.height}
        fill= {this.props.fill}
        draggable
      />
    );
  }
}

export default Rectangulo;
