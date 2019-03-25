import React, { Component } from 'react';
import { render } from 'react-dom';
import { Arrow } from 'react-konva';

class Flecha extends React.Component {

  render() {
    return (
      <Arrow
         x = {550}
         y = {600}
         points = {[0,0, this.props.width / 2, this.props.height / 2]}
         pointerLength = {20}
         pointerWidth = {20}
         fill = {'black'}
         stroke = {'black'}
         strokeWidth= {4}
         draggable
      />
    );
  }
}

export default Flecha;
