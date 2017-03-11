import React, { Component } from 'react';
import Dropzone from 'react-dropzone';


export default class ImageDropZone extends Component {

  onImageDrop(file){
    const images = this.props.images
    const newImagePath = file[0].preview
    this.props.this.setState({
      images: [newImagePath, ...images],
      errors: []
    });
  }

  render() {

    return (
          <div style={{flex: 3}}>
            <div id='imageWrapper'>
              <img
                src={ this.props.images[0] }
                alt={'woops'}
                style={{
                  height: this.props.transform.scale,
                  width: this.props.transform.scale,
                  transform: this.props.transform.rotate,
                  opacity: this.props.transform.opacity,
                  marginRight: this.props.transform.translate
                }}/>
                <Dropzone
                  multiple={false}
                  accept='image/*'
                  onDrop={this.onImageDrop.bind(this)}
                  id='dropZone'
                  style={{height: 400, width: 400}}>
                </Dropzone>
            </div>
            <h4>In the area above, drop an image or click to select a file to upload.</h4>
          </div>
    );
  }
}
