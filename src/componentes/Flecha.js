import React, { Component } from 'react';
import { render } from 'react-dom';
import { Arrow } from 'react-konva';

class Flecha extends React.Component {

  render() {
    return (
      <Arrow
         points = {this.props.points}
         pointerLength = {20}
         pointerWidth = {20}
         fill = {'black'}
         stroke = {'black'}
         tension= {4}
         draggable
      />
    );
  }
}

export default Flecha;
