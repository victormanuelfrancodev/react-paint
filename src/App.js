import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import Konva from 'konva';

import Mundo from './componentes/Mundo';

class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        rectangulos: [],
        circulos: [],
        textos: [],
        flechas: [],
        triangulos: [],
        isMakingLine:false,
        countClick:0,
        firstPosX:0,
        firstPosY:0,
        secondPosX:0,
        secondPosY:0
      };
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
       countClick: 0,
       selectedShapeName: "",
       selectedColor:"",
       isMakingLine:false,
       firstPosX:0,
       firstPosY:0,
       secondPosX:0,
       secondPosY:0
    })
  }

  selectShapeNameFuncion = (name) =>{
    this.setState({
      selectedShapeName: name
    })
  }

insertarRectangulo = (e) => {
    let rectangulos = this.state.rectangulos;
    rectangulos.push (   {
                width: 100,
                height: 200,
                x: 200,
                y: 300,
                fill: 'black',
                name: `rectangulo${Date.now()}`
            });

            this.setState({
              rectangulos
            })
}

insertarTriangulo = (e) => {
    let triangulos = this.state.triangulos;
    triangulos.push(  {
                  x : 190,
                  y : 180,
                  sides : 3,
                  radius :  80,
                  fill : "green",
                  stroke : "black",
                  strokeWidth : 4,
                  draggable : true,
                  name: `triangulo${Date.now()}`
            });

            this.setState({
              triangulos
            })
}

insertarFlecha = (active) => {
  this.setState({
    isMakingLine: active
  })
}

insertArrowWithTwoPositions =() =>
{
  let flechas = this.state.flechas;
  flechas.push({
                x : this.state.firstPosX,
                y : this.state.firstPosY ,
                points : [this.state.firstPosX,this.state.firstPosY , this.state.secondPosX,this.state.secondPosY],
                pointerLength : 20,
                pointerWidth : 20,
                fill : 'black',
                stroke : 'black',
                strokeWidth :4,
                width: 20,
                height: 20,
                name: `flechas${Date.now()}`});


          this.setState({
            flechas: flechas
          })


}

insertarCirculo = (e) => {
  let circulos = this.state.circulos;
  circulos.push ({
                radius: 50,
                x : e.evt.x,
                y: e.evt.y,
                fill: "red",
                name: `circulo${Date.now()}`
            })
            this.setState({
                circulos
            })

}

insertarText = (e) => {
  let textos = this.state.textos;
  textos.push({
                x : e.evt.x,
                y : e.evt.y,
                fontSize : 35,
                texto : "hola",
                fontFamily : "Calibri",
                fill: "green",
                name: `texto{Date.now()}`
            });

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

aumentarClick = (numero) =>{
  this.setState({
    countClick:numero
  })
}

firstPos = (x,y) => {
  this.setState({
    firstPosX: x,
    firstPosY: y
  })
}

secondPos = (x,y) => {
  this.setState({
    secondPosX: x,
    secondPosY: y
  })
}

  render() {
    const {
      selectedColor,
      selectedShapeName,
      isMakingLine,
      rectangulos,
      circulos,
      textos,
      flechas,
      triangulos,
      countClick,
      firstPosX,
      firstPosY,
      secondPosX,
      secondPosY
    } = this.state

    return (
        <Mundo
          firstPosX = {firstPosX}
          firstPosY = {firstPosY}
          secondPosX = {secondPosX}
          secondPosY = {secondPosY}
          firstPos = {this.firstPos}
          secondPos = {this.secondPos}
          selectedColor = {selectedColor}
          selectedShapeName = {selectedShapeName}
          rects= { rectangulos }
          circulos = {circulos}
          textos = {textos}
          flechas = {flechas}
          isMakingLine = {isMakingLine}
          triangulos = {triangulos}
          countClick = {countClick}
          insertArrowWithTwoPositions = {this.insertArrowWithTwoPositions}
          resetColor = {this.resetColor}
          insertarText = {this.insertarText}
          insertarFlecha = {this.insertarFlecha}
          insertarTriangulo = {this.insertarTriangulo}
          insertarCirculo = {this.insertarCirculo}
          insertarRectangulo = { this.insertarRectangulo }
          selectShapeName = {this.selectShapeNameFuncion}
          changeColor = {this.changeColor}
          aumentarClick = {this.aumentarClick}
        />
    );
  }
}

export default App;
