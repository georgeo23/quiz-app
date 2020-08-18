import React from 'react';
import { connect } from 'react-redux';
import Question from '../Components/Question.js'

class QuestionPage extends React.Component {
    
    render() {
    
        return (
            <div>
                {this.props.data.length > 0 ? <Question question={this.props.data[this.props.currentQuestionID]}/> : <p>Please load questions from play game</p>}
            </div>
        )
    }
}
    
const mSTP = state => ({
    data: state.data,
    players: state.players,
    score: state.score,
    currentQuestionID: state.currentQuestionID

})

export const mDTP = dispatch => ({
    addScore: () => dispatch({type: 'ADD_SCORE', payload: 1}),
    nextQuestion: () => dispatch({type: 'NEXT_QUESTION'})    
})

export default connect(mSTP, mDTP) (QuestionPage);