import React, { Component } from 'react';
import './App.css';
import QuizBank from './QuizBankServer/quizBank';
import QuestionAnswer from './resource/Question&Answer';
import Replay from './resource/Replay';

class App extends Component{
  state = {
    quizBank: [],
    score: 0,
    packOfQuiz: 0
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
 
//choosing correct answer function
trueAnswer = (response, correct)=>{
  if(response === correct){
    this.setState({
      score: this.state.score + 1
    })
  }
  this.setState({
    packOfQuiz: this.state.packOfQuiz < 10 ? this.state.packOfQuiz + 1 : 10 
  })
} 

 

  render(){
  return (
    <div className="App">
      <h1>QuizBank with React</h1>
      {this.state.quizBank.length > 0 && this.state.packOfQuiz < 10 && this.state.quizBank.map((
        {question, answers, correct, questionId})=>(<QuestionAnswer question={question}
                                                                allOptions={answers}
                                                                correctAnswer={response => this.trueAnswer(response, correct)}
                                                                key={questionId}
          />)  
      )}
      {/* add result on each click of answer, callback of trueAnswer function*/}
       {this.state.packOfQuiz === 10 ? < Replay score={this.state.score}/> : null}{/*<h2>{this.state.score}</h2> instead put <Replay /> */}
    </div>
  );
}
}

export default App;
