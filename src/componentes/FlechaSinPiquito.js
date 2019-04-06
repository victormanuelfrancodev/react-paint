import React, { Component } from 'react';
import { render } from 'react-dom';
import { Line } from 'react-konva';

class FlechaSinPiquito extends React.Component {

  render() {
    return (
      <Line
         points = {this.props.points}
         stroke = {'black'}
         strokeWidth = {15}
         lineCap = {'round'}
         lineJoin = {'round'}
         draggable
      />
    );
  }
}

export default FlechaSinPiquito;
