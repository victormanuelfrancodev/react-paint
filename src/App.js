import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import Konva from 'konva';

import Mundo from './componentes/Mundo';

class App extends Component {

  state = {
    rectangulos: [],
    circulos: [],
    textos: {},
    flechas: {},
    triangulos: []
  }

  componentDidMount(){
    this.setState({
        rectangulos:[{}],
       circulos : [{
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

       selectedShapeName: "",
       selectedColor:""
    })
  }

  selectShapeNameFuncion = (name) =>{
    this.setState({
      selectedShapeName: name
    })
  }

insertarRectangulo = (e) => {
    const rectangulos = Object.values(this.state.rectangulos);
    rectangulos[`rect${Date.now()}`] =   {
                width: 100,
                height: 200,
                x: 200,
                y: 300,
                fill: 'black',
                name: `rectangulo${Date.now()}`
            };

            this.setState({
              rectangulos
            })
}

insertarTriangulo = (e) => {
    const triangulos = Object.values(this.state.triangulos);
    triangulos[`triangulo${Date.now()}`] =   {
                  x : 190,
                  y : 180,
                  sides : 3,
                  radius :  80,
                  fill : "green",
                  stroke : "black",
                  strokeWidth : 4,
                  draggable : true,
                  name: `triangulo${Date.now()}`
            };

            this.setState({
              triangulos
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
  const circulos = Object.values(this.state.circulos);
  circulos[`circulo{Date.now()}`] =   {
                radius: 50,
                x : e.evt.x,
                y: e.evt.y,
                fill: "red",
                name: `circulo${Date.now()}`
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

resetColor = () => {
  this.setState({
    selectedColor: ""
  })
}

changeColor = (color) => {
  this.setState ({
    selectedColor: color.target.id()
  })
}

  render() {
    const {
      selectedColor,
      selectedShapeName,
      rectangulos,
      circulos,
      textos,
      flechas,
      triangulos
    } = this.state

    return (
        <Mundo
          selectedColor = {selectedColor}
          selectedShapeName = {selectedShapeName}
          rects= { rectangulos }
          circulos = {circulos}
          textos = {textos}
          flechas = {flechas}
          triangulos = {triangulos}
          resetColor = {this.resetColor}
          insertarTriangulo = {this.insertarTriangulo}
          insertarCirculo = {this.insertarCirculo}
          insertarRectangulo = { this.insertarRectangulo }
          selectShapeName = {this.selectShapeNameFuncion}
          changeColor = {this.changeColor}
        />
    );
  }
}

export default App;
