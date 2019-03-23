import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Transformer } from 'react-konva';

class TransformerComponent extends Component {
  componentDidMount() {
    this.checkNode();
  }
  componentDidUpdate() {
  //  this.checkNode();
    if (this.props.selectedShapeName.trim() !== "") {
      this.checkNode()
    }else{
      this.transformer.detach();
        this.transformer.getLayer().batchDraw();
    }

   console.log("texto"+ this.props.selectedShapeName);
  }

  checkNode() {
    // here we need to manually attach or detach Transformer node
    const stage = this.transformer.getStage();
    //const { selectedShapeName } = this.props;

    const selectedShape =  this.props.selectedShapeName;
    const selectedNode = stage.findOne("."+selectedShape);
    // do nothing if selected node is already attached
    if (selectedNode === this.transformer.node()) {
      return;
    }

    if (selectedNode) {
      // attach to another node
      this.transformer.attachTo(selectedNode);
    } else {
      // remove transformer
      this.transformer.detach();
    }
    this.transformer.getLayer().batchDraw();
  }

  render() {
    return (
      <Transformer
        ref={node => {
          this.transformer = node;
        }}
      />
    );
  }
}

export default TransformerComponent;
