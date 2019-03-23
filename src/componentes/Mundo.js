import React, { Component } from 'react';
import { render } from 'react-dom';
import Rectangulo from './Rectangulo';
import Circulo from './Circulo';
import Texto from './Texto';
import Flecha from './Flecha';
import Triangulo from './Triangulo';
import { Stage, Layer, Rect, Circle,Text } from 'react-konva';
import TransformerComponent from './TransformerComponent';

class Mundo extends React.Component {

  handleDragEnd = e => {
     this.props.insertarRectangulo(e);

    };

    handleStageMouseDown = e => {
    // this.props.insertarRectangulo(e);
  // clicked on stage - cler selection
  if (e.target === e.target.getStage()) {
      this.props.selectShapeName('');
    return;
  }
  // clicked on transformer - do nothing
  const clickedOnTransformer =
    e.target.getParent().className === "Transformer";
  if (clickedOnTransformer) {
    return;
  }

  // find clicked rect by its name
  const name = e.target.name();
  const shapes = [...this.props.rects,...this.props.circulos, ...this.props.textos, ...this.props.flechas, ...this.props.triangulos];
  const shape = shapes.find(shape => shape.name === name);
  if (shape) {
    this.props.selectShapeName(name);
  } else {
    this.props.selectShapeName('');
  }
};

  render() {
      return (
        <Stage width={window.innerWidth} height={window.innerHeight} onMouseDown = {this.handleStageMouseDown} >
          <Layer>

            {Array.from(this.props.rects).map((rect, i) => (
              <Rectangulo key={i} {...rect} />
            ))}
            {Array.from(this.props.circulos).map((cir, i) => (
              <Circulo key={i} {...cir} />
            ))}

            {Array.from(this.props.textos).map((txt, i) => (
              <Texto key={i} {...txt} />
            ))}

            {Array.from(this.props.flechas).map((arr, i) => (
              <Flecha key={i} {...arr} />
            ))}

            {Array.from(this.props.triangulos).map((tri, i) => (
              <Triangulo key={i} {...tri} />
            ))}
            <Circle   name = {"boton"}
              x = {100}
              y = {800}
              radius = {20}
              fill= {"red"}
              onMouseDown = {this.handleDragEnd}
              />

            <TransformerComponent
              selectedShapeName={this.props.selectedShapeName}
            />
          </Layer>
        </Stage>
      );
    };
}

export default Mundo;
