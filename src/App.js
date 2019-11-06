import React from 'react';
import './App.css';
import SOUNDKIT from './Sound';

class Key extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.sound.play();
    this.sound.volume = 0.25;
    this.sound.currentTime = 0;
  }

  render () {
    return (
      <div className = {this.props.sound.id} onClick = {this.handleClick}>
        <h1>{this.props.sound.kname}</h1>
        <audio id = {this.props.sound.id} src = {this.props.sound.src} ref = {ref => this.sound = ref}></audio>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className = "App">
        {SOUNDKIT.map(sound => {
          return (<Key sound = {sound} />)
        })}        
      </div>
    );
  }
}

export default App;
