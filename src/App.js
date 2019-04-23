import React from 'react';
import logo from './logo.svg';
import './App.css';

import ImgBtnWrapper from "./components/ImgBtnWrapper/ImgBtnWrapper"


class App extends React.Component {
  handleClick = () => {
    console.log("I was clicked")
  }
  render () {
    return (
        <ImgBtnWrapper clickHandler={this.handleClick}/>
    )    
  }
}

export default App;
