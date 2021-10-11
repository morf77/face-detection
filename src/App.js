import React , {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Rank from './Components//Rank/Rank.js';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'

// const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '6eea4481623f4032b1b6dcc0ed15db98'
});
const particleOptions ={
  particles:{
      number:{
        value:30,
        density:{
          enable:true,
          value_area:800
        }
      }
  }
}
class App extends Component {
  constructor(){
    super();
    this.state={
      input:``,
      imageUrl:``
    }
  }
  onInputChange=(event)=>{
    console.log(event);
    this.setState({input: event.target.value})
  }
  onButtonSubmit =()=>{
    this.setState({imageUrl: this.state.input})
    console.log("click");
    app.models
    .predict(
      'c0c0ac362b03416da06ab3fa36fb58e3',
      this.state.input)
    .then(response => {
      console.log('hi', response)
      })
  }
  render(){
    return (
      <div className="App">
        <Particles className="particles"
          params={particleOptions} />      
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
  }


export default App;
