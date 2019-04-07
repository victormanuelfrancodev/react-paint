import React, { Component } from 'react';
import { render } from 'react-dom';
import { RegularPolygon } from 'react-konva';

class Triangulo extends React.Component {

  render() {
    return (
      <RegularPolygon
          x = {190}
          y = {180}
          sides =  {3}
          radius = { 80}
          fill = {"red"}
          name = {this.props.name}
          draggable
      />
    );
  }
}

export default Triangulo;
