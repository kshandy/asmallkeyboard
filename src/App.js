import React from 'react';
import './App.css';
import key1 from './sounds/key1.wav';
import key2 from './sounds/key2.wav';
import key3 from './sounds/key3.wav';
import key4 from './sounds/key4.wav';
import key5 from './sounds/key5.wav';
import key6 from './sounds/key6.wav';

const SOUNDKIT = [
  {id: 'key', name: 'Amen Break', src: key1},
  {id: 'key', name: 'Funky Break', src: key2},
  {id: 'key', name: 'Leevee Break', src: key3},
  {id: 'key', name: 'President Break', src: key4},
  {id: 'key', name: 'Synthetic Break', src: key5},
  {id: 'key', name: 'Skull Break', src: key6},
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
      <div className = {this.props.sound.id} onClick = {this.handleClick}>
        <h1>{this.props.kname}</h1>
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
