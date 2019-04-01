import React, { Component } from 'react';
import { render } from 'react-dom';
import Rectangulo from './Rectangulo';
import Circulo from './Circulo';
import Texto from './Texto';
import Flecha from './Flecha';
import Triangulo from './Triangulo';
import { Stage, Layer, Rect, Circle,Text,Image } from 'react-konva';
import TransformerComponent from './TransformerComponent';
import DrawArea from './DrawArea';
import useImage from 'use-image';
import Portal from './Portal';
import './css/style.css'
import {SketchField, Tools} from 'react-sketch';

const IconoFlecha = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo40.svg');
  return <Image image={image} x={580} y={700} width={30} height={30} id={"flecha"}/>;
};

const IconoLapiz = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo33.svg');
  return <Image image={image} x={620} y={700} width={30} height={30}/>;
};

const IconoLinea = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo39.svg');
  return <Image image={image} x={660} y={700} width={30} height={30}/>;
};

const IconoCuadrado = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo41.svg');
  return <Image image={image} x={700} y={700} width={30} height={30} id={"rectangulo"}/>;
};

const IconoTriangulo = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo41.svg');
  return <Image image={image} x={740} y={700} width={30} height={30} id={"triangulo"}/>;
};

const IconoCirculo = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo41.svg');
  return <Image image={image} x={780} y={700} width={30} height={30} id={"circulo"}/>;
};

const IconoGoma = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo35.svg');
  return <Image image={image} x={820} y={700} width={30} height={30}/>;
};

const IconoPintar = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo36.svg');
  return <Image image={image} x={860} y={700} width={30} height={30}/>;
};

const IconoLetra = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo37.svg');
  return <Image image={image} x={900} y={700} width={30} height={30} id = {"texto"}/>;
};

const IconoVolver = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo38.svg');
  return <Image image={image} x={940} y={700} width={30} height={30}/>;
};

const IconoAvanzar= () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo38.svg');
  return <Image image={image} x={980} y={700} width={30} height={30}/>;
};


class Mundo extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this, 'Parameter');
  }

  handleClick(param, e) {
    console.log('Parameter', param);
    console.log('Event', e.target.value + e.key);
    console.log('Real', e);

    if (e.keyCode === 13 || e.keyCode === 27) {
      this.props.objectText.text(e.target.value);
      document.body.removeChild(e.target);
      this.props.objectText = null;
    }else{
      if (e.keyCode !== 8){
        this.props.objectText.text(e.target.value + e.key);
      }else{
        this.props.objectText.text(e.target.value);
      }
    }
  //  e.target.text (e.target.value + e.key);
  }

holamundo = () => {
   console.log ("hola");
    //this.props.objectText.text("jjijij");
}

handleStageMouseDown = e => {

    // this.props.insertarRectangulo(e);
  // clicked on stage - cler selection
  if (this.props.isMakingLine === false){
  if (e.target === e.target.getStage()) {
      this.props.selectShapeName('');
    return;
  }
  // clicked on transformer - do nothing
  // find clicked rect by its name
  const name = e.target.name();
  console.log (e.target);
  if (e.target.name().trim() !== "") {
        const clickedOnTransformer =
          e.target.getParent().className === "Transformer";
        if  (e.target.attrs.id ==="TextEdit"){
          //Get size of the stage
          var stageBox = e.target.getStage().container().getBoundingClientRect();
          var areaPosition = {
            x : stageBox.left + e.target.attrs.x,
            y:  stageBox.top + e.target.attrs.y
          }

          if (this.props.objectText !== null){
            console.log("existe")
          }else{
            console.log("no existe")
          }
          var textarea = document.createElement('textarea');
          document.body.appendChild(textarea);
          textarea.value = e.target.attrs.text;
          textarea.style.position = 'absolute';
          textarea.style.top = areaPosition.y + 'px';
          textarea.style.left = areaPosition.x + 'px';
          textarea.style.width = e.target.width();
          textarea.focus();
          this.props.objectCreate(e);
          textarea.addEventListener('keydown',this.handleClick);

        }
        //  console.log("este es el target "+e.target.fill("blue"));
        if (this.props.selectedColor !== ""){
          e.target.fill(this.props.selectedColor);
          this.props.resetColor()
        }
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
      }else if(e.target.id().trim() === "texto"){
        this.props.insertarText(e);
      }
      else if (e.target.id().trim() === "flecha"){
        this.props.insertarFlecha(true);
      }
      else if (e.target.id().trim() === "red"){
        this.props.changeColor(e);
      }
      else if (e.target.id().trim() === "blue"){
        this.props.changeColor(e);
      }
      else if (e.target.id().trim() === "black"){
        this.props.changeColor(e);
      }
      else if (e.target.id().trim() === "green"){
        this.props.changeColor(e);
      }
    }
  }else{
    const counter =  this.props.countClick + 1;

    this.props.aumentarClick(counter)
    if (counter === 1){
      this.props.firstPos(e.target.getStage().getPointerPosition().x,e.target.getStage().getPointerPosition().y);
    }else if (counter === 2){
      this.props.secondPos(e.target.getStage().getPointerPosition().x,e.target.getStage().getPointerPosition().y);
      this.props.aumentarClick(0)
      this.props.insertarFlecha(false);
      this.props.insertArrowWithTwoPositions();
    }
    console.log(counter);
  }
};

  render() {
      return (
        <div class="paint">
        <Portal>
        <div class= "scketch">
        <SketchField width='1600px'
                                 height='782px'
                                 tool={Tools.Pencil}
                                 lineColor='black'
                                 lineWidth={3}/>
                                </div>
        </Portal>
        <div class="stage">
        <Stage width={1600} height={782} onMouseDown = {this.handleStageMouseDown} >
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

            {this.props.flechas.map((arr, i) => (
               <Flecha key={i} {...arr} />
            ))}

            {Array.from(this.props.triangulos).map((tri, i) => (
              <Triangulo key={i} {...tri} />
            ))}

            <Circle x={80} y={700} radius={15} fill={"red"} id={"red"}/>
            <Circle x={110} y={700} radius={15} fill={"blue"} id={"blue"}/>
            <Circle x={140} y={700} radius={15} fill={"green"} id={"green"}/>
            <Circle x={170} y={700} radius={15} fill={"black"} id={"black"}/>
            <Circle x={200} y={700} radius={15} fill={"red"} id={"red"}/>
            <Circle x={230} y={700} radius={15} fill={"blue"} id={"blue"}/>
            <Circle x={260} y={700} radius={15} fill={"green"} id={"green"}/>

            <Circle x={80} y={735} radius={15} fill={"red"} id={"red"}/>
            <Circle x={110} y={735} radius={15} fill={"blue"} id={"blue"}/>
            <Circle x={140} y={735} radius={15} fill={"green"} id={"green"}/>
            <Circle x={170} y={735} radius={15} fill={"black"} id={"black"}/>
            <Circle x={200} y={735} radius={15} fill={"red"} id={"red"}/>
            <Circle x={230} y={735} radius={15} fill={"blue"} id={"blue"}/>
            <Circle x={260} y={735} radius={15} fill={"green"} id={"green"}/>


            <IconoFlecha/>
            <IconoLapiz/>
            <IconoLinea/>
            <IconoCuadrado/>
            <IconoTriangulo/>
            <IconoCirculo/>
            <IconoGoma/>
            <IconoPintar/>
            <IconoLetra/>
            <IconoVolver/>
            <TransformerComponent
              selectedShapeName={this.props.selectedShapeName}
            />

          </Layer>
        </Stage>

        </div>

        </div>

      );
    };
}

export default Mundo;
