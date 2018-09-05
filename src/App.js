import React, { Component } from 'react';
import './App.css';
import './styles/styles.scss'
import Slider from './components/Slider';
import firebase from './base';

class App extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    const imagesRef = firebase.database().ref('images');
    imagesRef.on('value', (snapshot) => {
      let images = snapshot.val();
      let newState = [];
      for (let image in images) {
        newState.push({
          id: image,
          title: images[image].title,
          image: images[image].image,
          description: images[image].description
        })
      }
      this.setState({
        images: newState
      })
    })
  }

  render() {
    return (
        <div className="sliderWrapper">
          {this.state.images && (<Slider images={this.state.images}/>
          )}
        </div>
    );
  }
}

export default App;
