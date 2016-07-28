import React, { Component } from 'react';
import Image from './Image';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    debugger
    axios.get('https://atmo-api-yjcmkuvmnt.now.sh/list')
    .then((response) => {
      debugger
      let images = response.data.images;
      this.setState({
        images: images
      })
    })
  }

  render() {
    let cats = this.state.images.map(function(url) {
      return <Image url={url} />
    })

    return (
      <div>

        <h1>{this.props.title}</h1>
        {cats}
      </div>
    );
  }
}

export default App;
