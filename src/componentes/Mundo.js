import React, { Component } from 'react';
import { render } from 'react-dom';
import Rectangulo from './Rectangulo';
import Circulo from './Circulo';
import Texto from './Texto';
import Flecha from './Flecha';
import Triangulo from './Triangulo';
import FlechaSinPiquito from './FlechaSinPiquito';
import { Stage, Layer, Rect, Circle,Text,Image,Line } from 'react-konva';
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
  return <Image image={image} x={620} y={700} width={30} height={30} id={"lapiz"}/>;
};

const IconoLinea = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo39.svg');
  return <Image image={image} x={660} y={700} width={30} height={30} id={"linea"}/>;
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
  return <Image image={image} x={820} y={700} width={30} height={30} id={"goma"}/>;
};

const IconoPintar = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo36.svg');
  return <Image image={image} x={860} y={700} width={30} height={30} id={"pintura"}/>;
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
    const textarea = null;
    this.handleClick = this.handleClick.bind(this, 'Parameter');
    this.doubleClick = this.doubleClick.bind(this, 'Parameter');
  }


  handleClick(param, e) {

    if (e.keyCode === 13 || e.keyCode === 27) {
      this.props.objectText.text(e.target.value);
      document.body.removeChild(e.target);
      //this.props.objectText = null;
    }else{
      if (e.keyCode !== 8){
        this.props.objectText.text(e.target.value + e.key);
      }else{
        this.props.objectText.text(e.target.value);
      }
    }
  //  e.target.text (e.target.value + e.key);
  }

doubleClick (param,e ){

}

handleMouseMove = e => {
  if (this.props.isDrawLine !== false){
    console.log("moviendo mouse");
    if (!this.props.isDrawing) {
      return;
    }
    const pointer = e.target.getStage().getPointerPosition();
    const newLines = this.props.lines.slice();
    const lastLine = {
      ...newLines[newLines.length - 1]
    };
    lastLine.points = lastLine.points.concat([pointer.x, pointer.y]);
    newLines[newLines.length - 1] = lastLine;
    this.props.setLines(newLines);
  }
}

handleMouseUp = e =>{
  if (this.props.isDrawLine !== false){
    this.props.toggleDrawing(false);
  }
}

handleStageMouseDown = e => {
//Dibuja linea y borrador

  // this.props.insertarRectangulo(e);
// clicked on stage - cler selection
if (this.props.isMakingLineSinPiquito === true){
  console.log("listo making line sin piquito ");
  const counter =  this.props.countClick + 1;
  this.props.aumentarClick(counter)
  if (counter === 1){
    this.props.firstPos(e.target.getStage().getPointerPosition().x,e.target.getStage().getPointerPosition().y);
  }else if (counter === 2){
    this.props.secondPos(e.target.getStage().getPointerPosition().x,e.target.getStage().getPointerPosition().y);
    this.props.aumentarClick(0)
    this.props.setInsertarFlechaSinPiquito(false);
    this.props.insertarFlechaSinPiquito();
  }
  console.log(counter);
}
if (this.props.isDrawLine !== false){
  this.props.toggleDrawing(true);
  const pointer = e.target.getStage().getPointerPosition();
  const newLines = this.props.lines.concat({
    id: Date.now(),
    tool: this.props.tool,
    points: [pointer.x, pointer.y]
  });
  this.props.setLines(newLines);
}
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
            if (this.textarea !== null){
              this.textarea = document.createElement('textarea');
              document.body.appendChild(this.textarea);
            }
            this.textarea.value = e.target.attrs.text;
            this.textarea.style.position = 'absolute';
            this.textarea.style.top = areaPosition.y + 'px';
            this.textarea.style.left = areaPosition.x + 'px';
            this.textarea.style.width = e.target.width();
            this.textarea.focus();
            this.props.objectCreate(e);
            this.textarea.addEventListener('keydown',this.handleClick);

            if (this.props.objectText !== null){
              console.log("existe")
            }else{
              console.log("no existe")
            }
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
    }
    else{

      if (e.target.id().trim() === "rectangulo"){
        this.props.setTextObject("Cuadrado,puedes seleccionarlo para manipularlo");
         this.props.insertarRectangulo(e);
         this.props.getIsDrawingLine(false);
      }else if (e.target.id().trim()==="lapiz"){
         this.props.setTextObject("Lápiz,dibuja sobre el papel");
         this.props.getIsDrawingLine(true);
         this.props.setTool("pen");
      }else if (e.target.id().trim() === "linea"){
        this.props.setTextObject("Linea, selecciona dos puntos dentro del papel");
        this.props.setInsertarFlechaSinPiquito(true)
        this.props.getIsDrawingLine(false);
      }
      else if (e.target.id().trim() === "triangulo"){
         this.props.setTextObject("Triangulo, puedes seleccionarlo para manipularlo");
         this.props.insertarTriangulo(e);
         this.props.getIsDrawingLine(false);
      }else if (e.target.id().trim() === "circulo"){
        this.props.setTextObject("Circulo, puedes seleccionarlo para manipularlo");
        this.props.insertarCirculo(e);
        this.props.getIsDrawingLine(false);
      }else if(e.target.id().trim() === "texto"){
        this.props.setTextObject("Texto, puedes modificar el texto , para salir presiona Enter o Esc");
        this.props.insertarText(e);
      }
      else if(e.target.id().trim() === "goma"){
        this.props.setTextObject("Goma, borra cualquier cosa");
          this.props.getIsDrawingLine(true);
          this.props.setTool("eraser");
      }
      else if (e.target.id().trim() === "flecha"){
        this.props.setTextObject("Linea, selecciona dos puntos dentro del papel");
        this.props.insertarFlecha(true);
        this.props.getIsDrawingLine(false);
      }
      else if (e.target.id().trim() === "810A16"){
        this.props.setTextObject("Selecciona la figura que quieras cambiar el color.");
        if(this.props.isColorBackground === true){
            this.props.changeColor("#810A16");
            this.props.setColorBackground(false);
        }
      }
      else if (e.target.id().trim() === "#9C505B"){
        this.props.setTextObject("Selecciona la figura que quieras cambiar el color.");
        if(this.props.isColorBackground === true){
            this.props.changeColor("#9C505B");
            this.props.setColorBackground(false);
        }
      }
      else if (e.target.id().trim() === "#18593C"){
        this.props.setTextObject("Selecciona la figura que quieras cambiar el color.");
        if(this.props.isColorBackground === true){
            this.props.changeColor("#18593C");
            this.props.setColorBackground(false);
        }
      }
      else if (e.target.id().trim() === "#1B793B"){
        this.props.setTextObject("Selecciona la figura que quieras cambiar el color.");
        if(this.props.isColorBackground === true){
            this.props.changeColor("#1B793B");
            this.props.setColorBackground(false);
        }
      }
      //#495934
      else if (e.target.id().trim() === "#495934"){
        this.props.setTextObject("Selecciona la figura que quieras cambiar el color.");
        if(this.props.isColorBackground === true){
            this.props.changeColor("#495934");
            this.props.setColorBackground(false);
        }
      }
      else if (e.target.id().trim() === "#406276"){
        this.props.setTextObject("Selecciona la figura que quieras cambiar el color.");
        if(this.props.isColorBackground === true){
            this.props.changeColor("#406276");
            this.props.setColorBackground(false);
        }
      }
      //#08305D
      else if (e.target.id().trim() === "#08305D"){
        this.props.setTextObject("Selecciona la figura que quieras cambiar el color.");
        if(this.props.isColorBackground === true){
            this.props.changeColor("#08305D");
            this.props.setColorBackground(false);
        }
      }
      else if (e.target.id().trim() === "#5C0A3D"){
        this.props.setTextObject("Selecciona la figura que quieras cambiar el color.");
        if(this.props.isColorBackground === true){
            this.props.changeColor("#5C0A3D");
            this.props.setColorBackground(false);
        }
      }
      //#93003B
      else if (e.target.id().trim() === "#93003B"){
        this.props.setTextObject("Selecciona la figura que quieras cambiar el color.");
        if(this.props.isColorBackground === true){
            this.props.changeColor("#93003B");
            this.props.setColorBackground(false);
        }
      }
      else if (e.target.id().trim() === "#813508"){
        this.props.setTextObject("Selecciona la figura que quieras cambiar el color.");
        if(this.props.isColorBackground === true){
            this.props.changeColor("#813508");
            this.props.setColorBackground(false);
        }
      }
      //#BD781E
      else if (e.target.id().trim() === "#BD781E"){
        this.props.setTextObject("Selecciona la figura que quieras cambiar el color.");
        if(this.props.isColorBackground === true){
            this.props.changeColor("#BD781E");
            this.props.setColorBackground(false);
        }
      }
      else if (e.target.id().trim() === "#A98C5A"){
        this.props.setTextObject("Selecciona la figura que quieras cambiar el color.");
        if(this.props.isColorBackground === true){
            this.props.changeColor("#A98C5A");
            this.props.setColorBackground(false);
        }
      }
      //#000000
      else if (e.target.id().trim() === "#000000"){
        this.props.setTextObject("Selecciona la figura que quieras cambiar el color.");
        if(this.props.isColorBackground === true){
            this.props.changeColor("#000000");
            this.props.setColorBackground(false);
        }
      }
      else if (e.target.id().trim() === "#FFFFFF"){
        this.props.setTextObject("Selecciona la figura que quieras cambiar el color.");
        if(this.props.isColorBackground === true){
            this.props.changeColor("#FFFFFF");
            this.props.setColorBackground(false);
        }
      }
      else if (e.target.id().trim() === "pintura"){
        this.props.setTextObject("Selecciona un color.");
        this.props.setColorBackground(true);
      }
    }
  }
  else{
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
        <div class="stage">
        <Stage width={1600} height={782} onMouseDown = {this.handleStageMouseDown}
        onMouseMove = {this.handleMouseMove} onMouseUp={this.handleMouseUp}>
          <Layer>

           <Text text= {this.props.textoDialogo} fontSize={20} fontFamily = {'Calibri'}  x = {20} y = {20} />
          {Array.from(this.props.rects).map((rect, i) => (
            <Rectangulo key={i} {...rect} />
          ))}

            {Array.from(this.props.circulos).map((cir, i) => (
              <Circulo key={i} {...cir} />
            ))}

            {Array.from(this.props.flechasSinPiquito).map((fle, i) => (
              <FlechaSinPiquito key={i} {...fle} />
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
            {this.props.lines.map(line => (
            <Line
              key={line.id}
              strokeWidth={4}
              stroke="black"
              points={line.points}
              globalCompositeOperation={
                line.tool === "eraser" ? "destination-out" : "source-over"
              }
            />
          ))}
            <Circle x={80} y={700} radius={15} fill={"#810A16"} id={"810A16"}/>
            <Circle x={110} y={700} radius={15} fill={"#9C505B"} id={"#9C505B"}/>
            <Circle x={140} y={700} radius={15} fill={"#18593C"} id={"#18593C"}/>
            <Circle x={170} y={700} radius={15} fill={"#1B793B"} id={"#1B793B"}/>
            <Circle x={200} y={700} radius={15} fill={"#495934"} id={"#495934"}/>
            <Circle x={230} y={700} radius={15} fill={"#406276"} id={"#406276"}/>
            <Circle x={260} y={700} radius={15} fill={"#08305D"} id={"#08305D"}/>

            <Circle x={80} y={735} radius={15} fill={"#5C0A3D"} id={"#5C0A3D"}/>
            <Circle x={110} y={735} radius={15} fill={"#93003B"} id={"#93003B"}/>
            <Circle x={140} y={735} radius={15} fill={"#813508"} id={"#813508"}/>
            <Circle x={170} y={735} radius={15} fill={"#BD781E"} id={"#BD781E"}/>
            <Circle x={200} y={735} radius={15} fill={"#A98C5A"} id={"#A98C5A"}/>
            <Circle x={230} y={735} radius={15} fill={"#FFFFFF"} id={"#FFFFFF"}/>
            <Circle x={260} y={735} radius={15} fill={"#000000"} id={"#000000"}/>
            <IconoFlecha/>
            <IconoLapiz/>
            <IconoLinea/>
            <IconoCuadrado/>
            <IconoTriangulo/>
            <IconoCirculo/>
            <IconoGoma/>
            <IconoPintar/>
            <IconoLetra/>
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
