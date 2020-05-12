import React, { Component } from 'react';
import './App.css';
import QuizBank from './QuizBankServer/quizBank';
import QuestionAnswer from './resource/Question&Answer';

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
        {question, answers, correct, questionId})=>(<QuestionAnswer question={question}
                                                                allOptions={answers}
                                                                correctAnswer={response => this.correctAnswer(response, correct)} 
                                                                key={questionId}
          />)
      )}
    </div>
  );
}
}

export default App;
