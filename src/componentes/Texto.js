import React, { Component } from 'react';
import { render } from 'react-dom';
import { Text } from 'react-konva';

class Texto extends React.Component {

  render() {
    return (
      <Text
        name = {this.props.name}
        x = {this.props.x}
        y = {this.props.y}
        fontSize = {30}
        text = {this.props.texto}
        fontFamily = {"Calibri"}
        fill= {this.props.fill}
        id = {"TextEdit"}
        draggable
      />
    );
  }
}

export default Texto;
