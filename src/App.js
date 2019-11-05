import React from 'react';
import './App.css';
import key1 from './sounds/key1.wav';

const SOUNDKIT = [
  {id: 'key1', name: 'Amen Break', src: key1},
];

class Key extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.sound.play();
    this.sound.currentTime = 0;
  }

  render () {
    return (
      <div className = {this.props.id} onClick = {this.handleClick}>
        <h1>Amen Break</h1>
        <audio id = {this.props.id} src = {this.props.soundsrc} ref = {ref => this.sound = ref}></audio>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className = "App">
        {SOUNDKIT.map(sound => {
          return (<Key kid = {sound.id} kname = {sound.name} soundsrc = {sound.src} />)
        })}        
      </div>
    );
  }
}

export default App;
