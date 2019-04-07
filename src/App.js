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
        textoDialogo:"",
        rectangulos: [],
        circulos: [],
        textos: [],
        flechas: [],
        flechasSinPiquito:[],
        triangulos: [],
        isMakingLine:false,
        isMakingLineSinPiquito:false,
        countClick:0,
        firstPosX:0,
        firstPosY:0,
        secondPosX:0,
        secondPosY:0,
        objectText: null,
        tool : "pen",
        isDrawing : false,
        lines : [],
        isDrawLine: false,
        colorBackground:""
      };
    }


  componentDidMount(){
    this.setState({
      textoSeleccion:"",
      textoObject:null,
      rectangulos:[{}],
       circulos : [{
       }],
       textos : [{
       }],
       flechasSinPiquito:[{}],
       countClick: 0,
       selectedShapeName: "",
       selectedColor:"",
       isMakingLine:false,
       isMakingLineSinPiquito:false,
       firstPosX:0,
       firstPosY:0,
       secondPosX:0,
       secondPosY:0,
       objectText: null,
       tool : "pen",
       isDrawing : false,
       lines : [],
       isDrawLine: false,
       isColorBackground:false
    })
  }

setTextObject = (val) => {
  this.setState({
    textoDialogo: "Instrucciones: "+val
  })
}

  selectShapeNameFuncion = (name) =>{

    this.setState({
      selectedShapeName: name
    })
  }

objectCreate =(e) =>{
  this.setState({
    objectText: e.target
  })
}

insertarFlechaSinPiquito = (e) =>{

  let flechasSinPiquito = this.state.flechasSinPiquito;
  flechasSinPiquito.push({
                points : [this.state.firstPosX,this.state.firstPosY , this.state.secondPosX,this.state.secondPosY],
                stroke: 'red',
                strokeWidth: 15,
                lineCap: 'round',
                lineJoin: 'round',
                 name: `flechasSinPiquito${Date.now()}`});
          this.setState({
            flechasSinPiquito: flechasSinPiquito
          })
}

insertarRectangulo = (e) => {
    let rectangulos = this.state.rectangulos;
    rectangulos.push (   {
                width: 100,
                height: 200,
                x: 750,
                y: 350,
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
                  x : 750,
                  y : 350,
                  sides : 3,
                  radius :  80,
                  fill : "green",
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

setInsertarFlechaSinPiquito = (active) =>{
  this.setState({
    isMakingLineSinPiquito: active
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
                x : 750,
                y: 380,
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
                x : 750,
                y : 380,
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
    selectedColor: color
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

setTool = (val) => {
  this.setState({
    tool:val
  })
}

toggleDrawing = (val) => {
  this.setState({
    isDrawing:val
  })
}

setLines = (val) => {
  this.setState({
    lines:val
  })
}

getIsDrawingLine = (val) => {
  this.setState({
    isDrawLine:val
  })
}

setColorBackground =(val) =>{
  this.setState({
    isColorBackground:val
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
      secondPosY,
      objectText,
      isPaint,
      lastPointerPosition,
      mode,
      tool,
      isDrawing,
      lines,
      isDrawLine,
      isMakingLineSinPiquito,
      flechasSinPiquito,
      isColorBackground,
      textoDialogo
    } = this.state

    return (
        <Mundo
        textoDialogo = {textoDialogo}
         isColorBackground = {isColorBackground}
         isMakingLineSinPiquito= {isMakingLineSinPiquito}
          isDrawLine = {isDrawLine}
          tool = {tool}
          flechasSinPiquito= {flechasSinPiquito}
          isDrawing = {isDrawing}
          lines = {lines}
          isPaint = {isPaint}
          lastPointerPosition = {lastPointerPosition}
          mode = {mode}
          firstPosX = {firstPosX}
          firstPosY = {firstPosY}
          secondPosX = {secondPosX}
          secondPosY = {secondPosY}
          selectedColor = {selectedColor}
          selectedShapeName = {selectedShapeName}
          rects= { rectangulos }
          circulos = {circulos}
          textos = {textos}
          flechas = {flechas}
          isMakingLine = {isMakingLine}
          triangulos = {triangulos}
          countClick = {countClick}
          objectText = {objectText}
          firstPos = {this.firstPos}
          secondPos = {this.secondPos}
          objectCreate = {this.objectCreate}
          insertArrowWithTwoPositions = {this.insertArrowWithTwoPositions}
          resetColor = {this.resetColor}
          insertarFlechaSinPiquito = {this.insertarFlechaSinPiquito}
          insertarText = {this.insertarText}
          insertarFlecha = {this.insertarFlecha}
          setInsertarFlechaSinPiquito = {this.setInsertarFlechaSinPiquito}
          insertarTriangulo = {this.insertarTriangulo}
          insertarCirculo = {this.insertarCirculo}
          insertarRectangulo = { this.insertarRectangulo }
          selectShapeName = {this.selectShapeNameFuncion}
          changeColor = {this.changeColor}
          aumentarClick = {this.aumentarClick}
          setTool = {this.setTool}
          toggleDrawing = {this.toggleDrawing}
          setLines = {this.setLines}
          getIsDrawingLine = {this.getIsDrawingLine}
          setColorBackground ={this.setColorBackground}
          setTextObject = {this.setTextObject}
        />
    );
  }
}

export default App;
