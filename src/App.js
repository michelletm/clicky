import React from 'react';
import logo from './logo.svg';
import './App.css';

import ImgBtnWrapper from "./components/ImgBtnWrapper/ImgBtnWrapper"


class App extends React.Component {

  state = {
    score: 0,
    highscore: 0,
    ids: []
  }


  handleClick = (id) => {
    console.log("I was clicked");
    console.log(id)

    if(!this.state.ids.includes(id)) {
      this.setState((prevState, props) => {
        return {
          score: prevState.score+1,
          ids: [...prevState.ids, id],
          highscore: (prevState.highscore < prevState.score+1) ? 
            prevState.score+1:
            prevState.highscore  
        }
      })
    } else {
      this.setState({
        ...this.state,
          score: 0,
          ids: []
        }
      )
    }  
  }
  
  
  render () {
    console.log(this.state)
    return (
        <ImgBtnWrapper onClick={this.handleClick}/>
    )    
  }
}

export default App;
