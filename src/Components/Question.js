import React, { Component } from 'react'
import { nextQuestion, addPlayerScore1, addPlayerScore2, addPlayerScore3, addPlayerScore4, addPlayerScore5 } from '../Actions/Actions.js'
import { connect } from 'react-redux'

class Question extends Component {
    constructor() {
        super();
        this.state = {
            currentPlayer: 'Player 1'
        };
    
    // this.handleAnswer = this.handleAnswer.bind(this);
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.scoreChecker = this.scoreChecker.bind(this);
}
    componentDidMount = () => console.log(this.props)
     
    showNextButton = (p) => {
        document.getElementById('nextq').style = "visibility: visible"
        return p
    }

    scoreChecker = (selectedAnswer, player) => {
        console.log(selectedAnswer)
        console.log(player)
        
            if (player === `Player 1`) {
                if (selectedAnswer === this.props.question.correct_answer) {
                    this.props.addPlayerScore1()
                    console.log(`Player 1's score is ${this.props.players[0].score}`)
                }        
            } else if (player === `Player 2`) {
                if (selectedAnswer === this.props.question.correct_answer) {
                    this.props.addPlayerScore2()
                    console.log(`Player 2's score is ${this.props.players[1].score}`)
                }
            } else if (player === `Player 3`) {
                if (selectedAnswer === this.props.question.correct_answer) {
                    this.props.addPlayerScore3()
                    console.log(`Player 3's score is ${this.props.players[2].score}`)   
                } 
            } else if (player === `Player 4`) {
                if (selectedAnswer === this.props.question.correct_answer) {
                    this.props.addPlayerScore4()
                    console.log(`Player 4's score is ${this.props.players[3].score}`)
                } 
            } else if (player === `Player 5`) {
                if (selectedAnswer === this.props.question.correct_answer) {
                    this.props.addPlayerScore5()
                    console.log(`Player 5's score is ${this.props.players[4].score}`)
                } 
            }
            else {
                console.log('finished')
            }
          
        this.showNextButton()
        
    } 

    handleNextQuestion = (player) => {
        console.log(`hello ${player}`)
        console.log(this.props.length)
        if (player === `Player 1`) {
            this.setState({currentPlayer: `Player 2`})
        } else if (player === "Player 2" && this.props.noOfPlayers >= 3) {
                    this.setState({currentPlayer: `Player 3`})
        } else if (player === "Player 3" && this.props.noOfPlayers >= 4) {
            this.setState({currentPlayer: "Player 4"})
        } else if  (player === "Player 4" && this.props.noOfPlayers >= 5){
            this.setState({currentPlayer: "Player 5"})
        } else {
                this.setState({ currentPlayer: `Player 1` })
                }
        
       this.props.nextQuestion()
       
        document.getElementById('nextq').style.visibility = "hidden"
        // while (this.props.currentQuestionID != this.props.question.length)
    }
      
    render() {
        const shuffledAnswer = [this.props.question.correct_answer, ...this.props.question.incorrect_answers].sort(() => Math.random() - 0.5);
        
        return (
            <div>
                    {/* have currentQuestion / total questions  */}
                    <h1>Q{this.props.currentQuestionID + 1}</h1>
                    <h1>{this.state.currentPlayer} of {this.props.noOfPlayers}</h1>
                    <h1 dangerouslySetInnerHTML={{ __html: this.props.question.question }}></h1>

                <button onClick={() => this.scoreChecker(shuffledAnswer[0], this.state.currentPlayer)} >{shuffledAnswer[0]}</button> 
                <button onClick={() => this.scoreChecker(shuffledAnswer[1],  this.state.currentPlayer)} >{shuffledAnswer[1]}</button> 
                <button onClick={() => this.scoreChecker(shuffledAnswer[2],  this.state.currentPlayer)} >{shuffledAnswer[2]}</button> 
                <button onClick={() => this.scoreChecker(shuffledAnswer[3],  this.state.currentPlayer)} >{shuffledAnswer[3]}</button> 
                <button onClick={() => this.handleNextQuestion(this.state.currentPlayer)} id="nextq" style={{visibility: "hidden"}} >NEXT QUESTION</button>
            </div>
        )
    }
}

const mSTP = state => ({
    players: state.players,
    noOfPlayers: state.noOfPlayers,
    currentQuestionID: state.currentQuestionID,
})

export default connect(mSTP, { nextQuestion, addPlayerScore1, addPlayerScore2, addPlayerScore3, addPlayerScore4, addPlayerScore5 }) (Question);
