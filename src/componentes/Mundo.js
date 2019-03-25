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


    handleStageMouseDown = e => {
    // this.props.insertarRectangulo(e);
  // clicked on stage - cler selection
  if (e.target === e.target.getStage()) {
      this.props.selectShapeName('');
    return;
  }
  // clicked on transformer - do nothing
  // find clicked rect by its name
  const name = e.target.name();

  if (e.target.name().trim() !== "") {
    const clickedOnTransformer =
      e.target.getParent().className === "Transformer";
    if (clickedOnTransformer) {
      return;
    }

    const shapes = [...this.props.rects,...this.props.circulos, ...this.props.textos, ...this.props.flechas, ...this.props.triangulos];
    //const shapes = [...this.props.rects];
    const shape = shapes.find(shape => shape.name === name);
    if (shape) {
      this.props.selectShapeName(name);
    } else {
      this.props.selectShapeName('');
    }
    }else{

      if (e.target.id().trim() === "rectangulo"){
         this.props.insertarRectangulo(e);
      }else if (e.target.id().trim() === "triangulo"){
         this.props.insertarTriangulo(e);
      }else if (e.target.id().trim() === "circulo"){
        this.props.insertarCirculo(e);
      }

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

            <Circle x={500} y={600} radius={30} fill={"black"} id={"rectangulo"}/>
            <Circle x={600} y={600} radius={30} fill={"black"} id={"circulo"}/>
            <Circle x={700} y={600} radius={30} fill={"black"} id={"triangulo"}/>

            <TransformerComponent
              selectedShapeName={this.props.selectedShapeName}
            />
          </Layer>
        </Stage>
      );
    };
}

export default Mundo;
