import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ImgBtnWrapper from "./components/ImgBtnWrapper/ImgBtnWrapper"
import Score from "./components/Score/Score"
//import { styles } from 'ansi-colors';
import styles from "./App.css";


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
      <div>
        <NavBar score={this.state.score} highscore={this.state.highscore}/>
        {
          (this.state.score>3) ?
            <div
              className={styles.popUp}
            >
              <h1>You Win!</h1>
            </div>
          :
          null
        }
        <ImgBtnWrapper onClick={this.handleClick}
                      />
        
      </div>
    )    
  }
}

export default App;
