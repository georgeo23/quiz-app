import React from 'react';
import { connect } from 'react-redux';
import Question from '../Components/Question.js'

class QuestionPage extends React.Component {
    
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

export default connect(mSTP) (QuestionPage);