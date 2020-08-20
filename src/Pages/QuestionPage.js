import React from 'react';
import { connect } from 'react-redux';
import Question from '../Components/Question.js'

class QuestionPage extends React.Component {
    // why is this a class component?
    render() {

        return (
            <div>
                {this.props.data.length > 0 ? <Question question={this.props.data[this.props.currentQuestionID]} data={this.props.data}/> : <p>Load results</p>}
                {this.props.data.length > 0 && this.props.currentQuestionID === this.props.data.length ? <p>finished quiz</p> : <p>QUIZ</p>}
            </div>
        )
    }
}
    
const mSTP = state => ({
    data: state.data,
    currentQuestionID: state.currentQuestionID
})

// why does this need to be exported?
export const mDTP = dispatch => ({
    addScore: () => dispatch({type: 'ADD_SCORE', payload: 1}),
    nextQuestion: () => dispatch({type: 'NEXT_QUESTION'})    
})

export default connect(mSTP, mDTP) (QuestionPage);