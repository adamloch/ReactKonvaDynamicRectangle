import React, {Component} from 'react';
import {Layer, Stage, Image} from 'react-konva';
import img from '../../assets/1.png';


  class CanvasElements extends Component {
    state = {
        image: null
      };
      componentDidMount() {
        const image = new window.Image();
        image.src = img;
        image.onload = () => {
          // setState will redraw layer
          // because "image" property is changed
          this.setState({
            image: image,
            width: image.width,
            height: image.height
          });
        };
      }
    render() {
        return (
            <Stage width={700} height={700}>
                <Layer>
                 <Image image={this.state.image} width={700} height={700} />
                </Layer>
                <Layer>
                    {
                        this.props.children
                    }
                </Layer>
            </Stage>
        );
    }
}


export default CanvasElements;
