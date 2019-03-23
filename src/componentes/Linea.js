import React, { Component } from 'react';
import { render } from 'react-dom';
import { Line } from 'react-konva';

class Linea extends React.Component {

  render() {
    return (
      <Line
          points = {[5, 70, 140, 23, 250, 60, 300, 20]},
         stroke = {'red'},
         strokeWidth = {15},
         lineCap =  {'round'},
         lineJoin =  {'round'}
      />
    );
  }
}

export default Triangulo;
