import React from 'react';
import { connect } from 'react-redux';
import Question from '../Components/Question.js'

class QuestionPage extends React.Component {

    state = this.props.state;

    renderResults = () => {

        // console.log(this.props.data[i])
        if(this.props.data.length){
            for (let i= 0; i < this.props.data.length; i++) {
            console.log(this.props.data[i])
            return <Question question={this.props.data[i].question} correctAnswer={this.props.data[i].correct_answer} incorrectAnswers={this.props.data[i].incorrect_answers} currentQuestion={this.props.currentQuestion} players={this.props.players} score={this.props.score} totalScore={this.props.addScore}/>
            }
        }
   
    }

        
    render() {
        const renderQs = this.props.data.map((q, idx) => <Question key={idx} question={q} correctAnswer={q} incorrectAnswers={q} player={q}/>)

       
        return (
            <div>
                <div> {this.renderQs}</div>
                {this.props.data.length > 0 ? this.renderResults() : <p>Please load questions from play game</p>}
                
                
            </div>
        )
    }
}
    
const mSTP = state => ({
    data: state.data,
    players: state.players,
    score: state.score,
    currentQuestion: state.currentQuestion

})

export const mDTP = dispatch => ({
    addScore: () => dispatch({type: 'ADD_SCORE', payload: 1}),
    nextQuestion: () => dispatch({type: 'NEXT_QUESTION'})    
})

export default connect(mSTP, mDTP) (QuestionPage);