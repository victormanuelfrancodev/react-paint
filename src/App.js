import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import Konva from 'konva';

import Mundo from './componentes/Mundo';

class App extends Component {

  state = {
    rectangulos: {},
    circulos: {},
    textos: {},
    flechas: {},
    triangulos: {}
  }

  componentDidMount(){
    this.setState({
       rectangulos : [{
                     width: 100,
                     height: 200,
                     x: 100,
                     y: 100,
                     fill: 'black',
                     radius: 20,
                     name: "rect1"
                   }],
       circulos : [{
         radius: 50,
         x : 200,
         y: 100,
         fill: "red",
         name: "circle1"
       }],
       textos : [{
         name : "texto1",
         x : 150,
         y : 150,
         fontSize : 30,
         texto : "ttt mundo",
         fontFamily : "Calibri",
         fill: "red"
       }],
       flechas: [{
         x : 500,
         y : 500,
         points : [0,0, 100 / 2, 200 / 2],
         pointerLength : 20,
         pointerWidth : 20,
         fill : 'black',
         stroke : 'black',
         strokeWidth :4,
         width: 200,
         height: 200
       }],
       triangulos: [{
         x : 190,
         y : 180,
         sides : 3,
         radius :  80,
         fill : "green",
         stroke : "black",
         strokeWidth : 4,
         draggable : true,
         name : 'triangle'
       }],
       selectedShapeName: ""
    })
  }

  selectShapeNameFuncion = (name) =>{
    this.setState({
      selectedShapeName: name
    })
  }

insertarRectangulo = (e) => {

  const rectangulos = {...this.state.rectangulos};
  rectangulos[`rectangulo${Date.now()}`] =   {
                width: 100,
                height: 200,
                x: e.evt.x,
                y: e.evt.y,
                fill: 'black',
                radius: 20,
                name: `rectangulo${Date.now()}`
            };
            this.setState({
              rectangulos
            })
}

insertarFlecha = (e) => {

  const flechas = {...this.state.flechas};
  flechas[`flecha{Date.now()}`] =   {
                   x : 500,
                   y : 500,
                   points : [0,0, 100 / 2, 200 / 2],
                   pointerLength : 20,
                   pointerWidth : 20,
                   fill : 'black',
                   stroke : 'black',
                   strokeWidth :4
            };
            this.setState({
              flechas
            })
}

insertarCirculo = (e) => {
  const circulos = {...this.state.circulos};
  circulos[`circulo{Date.now()}`] =   {
                radius: 50,
                x : e.evt.x,
                y: e.evt.y,
                fill: "red"
            };
            this.setState({
                circulos
            })

}

insertarText = (e) => {
  const textos = {...this.state.textos};
  textos[`texto{Date.now()}`] =   {
                x : e.evt.x,
                y : e.evt.y,
                fontSize : 35,
                text : "hola",
                fontFamily : "Calibri",
                fill: "green"
            };
            this.setState({
                textos
            })
}


  render() {
    const {
      selectedShapeName,
      rectangulos,
      circulos,
      textos,
      flechas,
      triangulos
    } = this.state
    return (
        <Mundo
          selectedShapeName = {selectedShapeName}
          rects= { rectangulos }
          circulos = {circulos}
          textos = {textos}
          flechas = {flechas}
          triangulos = {triangulos}
          insertarCirculo = {this.insertarCirculo}
          insertarRectangulo = { this.insertarRectangulo }
          selectShapeName = {this.selectShapeNameFuncion}
        />
    );
  }
}

export default App;
