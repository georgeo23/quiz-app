import React, { Component } from 'react'
import { nextQuestion } from '../Actions/Actions.js'
import { connect } from 'react-redux'



class Question extends Component {
    constructor() {
        super();
        this.state = ({
            score: 0
    });
    
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleNextQuestion = this.handleNextQuestion.bind(this);

}
    componentDidMount = () => console.log(this.props)
     



    showNextButton = () => {
        document.getElementById('nextq').style = "visibility: visible"
    }

    handleAnswer = (selectedAnswer) => {
            console.log(selectedAnswer)
           if (selectedAnswer === this.props.question.correct_answer)  {
            console.log('correct')
                this.setState({score: ++this.state.score})
                //REDUX STORE WITH SCORE
               console.log(this.state.score)
               this.showNextButton()
           } else {
            console.log('incorrect')
            this.showNextButton()
           }

    };
    

    handleNextQuestion = () => {
              
       this.props.nextQuestion()
        //set state of visibility for nextq button
        document.getElementById('nextq').style.visibility = "hidden"
    }
      
    render() {
        const shuffledAnswer = [this.props.question.correct_answer, ...this.props.question.incorrect_answers].sort(() => Math.random() - 0.5);
        
        return (
            <div>
       
                    <h1>Q{this.props.currentQuestionID + 1}</h1>
                    <h1>Players: {this.props.players}</h1>
                    <h1 dangerouslySetInnerHTML={{ __html: this.props.question.question }}></h1>

                <button onClick={() => this.handleAnswer(shuffledAnswer[0])} >{shuffledAnswer[0]}</button> 
                <button onClick={() => this.handleAnswer(shuffledAnswer[1])} >{shuffledAnswer[1]}</button> 
                <button onClick={() => this.handleAnswer(shuffledAnswer[2])} >{shuffledAnswer[2]}</button> 
                <button onClick={() => this.handleAnswer(shuffledAnswer[3])} >{shuffledAnswer[3]}</button> 
                <button onClick={this.handleNextQuestion} id="nextq" style={{visibility: "hidden"}} >NEXT QUESTION</button>
                
              
            </div>
 
        )
    }
}
const mSTP = state => ({
    players: state.players,
    currentQuestionID: state.currentQuestionID,
    score: state.score
})

export default connect(mSTP, { nextQuestion }) (Question);