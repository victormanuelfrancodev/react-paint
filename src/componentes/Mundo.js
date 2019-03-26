import React, { Component } from 'react';
import { render } from 'react-dom';
import Rectangulo from './Rectangulo';
import Circulo from './Circulo';
import Texto from './Texto';
import Flecha from './Flecha';
import Triangulo from './Triangulo';
import { Stage, Layer, Rect, Circle,Text,Image } from 'react-konva';
import TransformerComponent from './TransformerComponent';
import useImage from 'use-image';
import './css/style.css'

const LionImage = () => {
  const [image] = useImage('https://konvajs.org/assets/lion.png');
  return <Image image={image} x={1150}/>;
};


const IconoFlecha = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo40.svg');
  return <Image image={image} x={380}/>;
};

const IconoLapiz = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo33.svg');
  return <Image image={image} x={410}/>;
};

const IconoLinea = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo39.svg');
  return <Image image={image} x={460}/>;
};

const IconoCuadrado = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo41.svg');
  return <Image image={image} x={490}/>;
};

const IconoTriangulo = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo41.svg');
  return <Image image={image} x={530}/>;
};

const IconoCirculo = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo41.svg');
  return <Image image={image} x={560}/>;
};

const IconoGoma = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo35.svg');
  return <Image image={image} x={590}/>;
};

const IconoPintar = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo36.svg');
  return <Image image={image} x={630}/>;
};

const IconoLetra = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo37.svg');
  return <Image image={image} x={660}/>;
};

const IconoVolver = () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo38.svg');
  return <Image image={image} x={690}/>;
};

const IconoAvanzar= () => {
  const [image] = useImage('http://www.rojojaguar.com/Mesadetrabajo38.svg');
  return <Image image={image} x={720}/>;
};


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
      }else if (e.target.id().trim() === "red"){
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
};

  render() {
      return (
        <div class="paint">
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

            {Array.from(this.props.flechas).map((arr, i) => (
               <Flecha key={i} {...arr} />
            ))}

            {Array.from(this.props.triangulos).map((tri, i) => (
              <Triangulo key={i} {...tri} />
            ))}
            <Circle x={80} y={700} radius={10} fill={"black"} id={"rectangulo"}/>
            <Circle x={600} y={600} radius={30} fill={"black"} id={"circulo"}/>
            <Circle x={700} y={600} radius={30} fill={"black"} id={"triangulo"}/>


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
