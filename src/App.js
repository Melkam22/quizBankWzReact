import React, { Component } from 'react';
import './App.css';
import QuizBank from './QuizBankServer/quizBank';

class App extends Component{
  state = {
    quizBank: []
  }
quizFunction = ()=>{
  QuizBank().then(question=>{
    this.setState({
      quizBank: question
    })
  })
}
componentDidMount(){
  this.quizFunction()
}

  render(){
  return (
    <div className="App">
      <h1>QuizBank with React</h1>
      {this.state.quizBank.length > 0 && this.state.quizBank.map((
        {question, answers, correct, questionId})=> <p2>{question}</p2>
      )}
    </div>
  );
}
}

export default App;
