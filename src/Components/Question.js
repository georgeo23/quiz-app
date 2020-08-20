import React, { Component } from 'react'
import { nextQuestion, addPlayerScore1, addPlayerScore2, addPlayerScore3, addPlayerScore4, addPlayerScore5 } from '../Actions/Actions.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import '../Styles/QuestionPage.css'


class Question extends Component {
    constructor() {
        super();
        this.state = {
            currentPlayer: 'Player 1',
        };

    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.scoreChecker = this.scoreChecker.bind(this);
}
    componentDidMount = () => {
        document.getElementById('nextq').style = "visibility: hidden";
        document.getElementById('correctAnswerh1').style = "visibility: hidden";
    }
     
    showNextButton = () => {
        document.getElementById('nextq').style = "visibility: visible";
        document.getElementById('correctAnswerh1').style = "visibility: visible";
    }

    scoreChecker = (selectedAnswer, player) => {
  
        for (let i = 1; i < 5; i++) {
            document.getElementById(`answerBtn${i}`).style= "visibility: hidden"
           }

            if (player === `Player 1`) {
                if (selectedAnswer === this.props.question.correct_answer) {
                    this.props.addPlayerScore1()
                    }        
            } else if (player === `Player 2`) {
                if (selectedAnswer === this.props.question.correct_answer) {
                    this.props.addPlayerScore2()
                  }
            } else if (player === `Player 3`) {
                if (selectedAnswer === this.props.question.correct_answer) {
                    this.props.addPlayerScore3()
                } 
            } else if (player === `Player 4`) {
                if (selectedAnswer === this.props.question.correct_answer) {
                    this.props.addPlayerScore4()
                    
                } 
            } else if (player === `Player 5`) {
                if (selectedAnswer === this.props.question.correct_answer) {
                    this.props.addPlayerScore5()
                } 
            }
            else {
                console.log('finished')
            }
          
        this.showNextButton()
        
    } 

    handleNextQuestion = (player) => {
        
         if (player === `Player 1`) {
            this.setState({currentPlayer: `Player 2`})
        } else if (player === "Player 2" && this.props.noOfPlayers >= 3) {
                    this.setState({currentPlayer: `Player 3`})
        } else if (player === "Player 3" && this.props.noOfPlayers >= 4) {
            this.setState({currentPlayer: "Player 4"})
        } else if  (player === "Player 4" && this.props.noOfPlayers >= 5){
            this.setState({currentPlayer: "Player 5"})
        } else if (this.props.currentQuestionID + 1 >= this.props.data.length) {
           
            this.props.history.push('/result')
        }
        else {
                this.setState({ currentPlayer: `Player 1` })
                }
        
       this.props.nextQuestion()
       for (let i = 1; i < 5; i++) {
        document.getElementById(`answerBtn${i}`).style= "visibility: visible"
        document.getElementById('nextq').style.visibility = "hidden"
        document.getElementById('correctAnswerh1').style = "visibility: hidden"
    }
}
    render() {
        const shuffledAnswer = [this.props.question.correct_answer, ...this.props.question.incorrect_answers].sort(() => Math.random() - 0.5);
        
        return (
            <div>
                <h1 id="questionCounter">Q{this.props.currentQuestionID+1}/{this.props.data.length}</h1>
                <h1 id="playersCounter">{this.state.currentPlayer} of {this.props.noOfPlayers}</h1>
                <h1 id="questionText" dangerouslySetInnerHTML={{ __html: this.props.question.question }}></h1>
                {/* Answer Buttons */}
                <div id="answerButtons">
                    <button id="answerBtn1" dangerouslySetInnerHTML={{ __html: shuffledAnswer[0] }} onClick={() => this.scoreChecker(shuffledAnswer[0], this.state.currentPlayer)} ></button> 
                    <button id="answerBtn2" dangerouslySetInnerHTML={{ __html: shuffledAnswer[1] }} onClick={() => this.scoreChecker(shuffledAnswer[1],  this.state.currentPlayer)} ></button> 
                    <button id="answerBtn3" dangerouslySetInnerHTML={{ __html: shuffledAnswer[2] }} onClick={() => this.scoreChecker(shuffledAnswer[2],  this.state.currentPlayer)} ></button> 
                    <button id="answerBtn4" dangerouslySetInnerHTML={{ __html: shuffledAnswer[3] }} onClick={() => this.scoreChecker(shuffledAnswer[3],  this.state.currentPlayer)} ></button><br/>
                    <button id="nextq" onClick={() => this.handleNextQuestion(this.state.currentPlayer)}>NEXT QUESTION</button>
                </div>

                <h1 dangerouslySetInnerHTML={{ __html: `The correct answer was "${this.props.question.correct_answer}"` }}id="correctAnswerh1"></h1>
            </div>
 
        )
    }
}

const mSTP = state => ({
    players: state.players,
    noOfPlayers: state.noOfPlayers,
    currentQuestionID: state.currentQuestionID,
})

export default withRouter(connect(mSTP, { nextQuestion, addPlayerScore1, addPlayerScore2, addPlayerScore3, addPlayerScore4, addPlayerScore5 }) (Question));
