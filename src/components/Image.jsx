import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
    <img className="cat" src={this.props.url} />
    );
  }
}

export default Image;
