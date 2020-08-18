import React from 'react';
import { connect } from 'react-redux';
// import { getQuizData } from '../Actions/Actions'
import Questions from '../Components/Questions.js'

class QuestionPage extends React.Component {

    renderResults = results => {

     
        console.log(results)
        // let keys = Object.keys(resultData)
        // console.log(keys)
        
        let result = JSON.stringify(results)
        let convert = result.replace(/&#039/g, "").replace(/&quot/g, "").replace(/&/g, "").replace(/;/g, '').replace(/Ex;/g, '').replace(/&rsquos/g, '').replace(/&ldquo/g, '').replace(/&shy;/g, '')

        let newResult = JSON.parse(convert);
        console.log(newResult.length)
        // for (let i = 0; i < newResult.length; i++) {
        //     // newResult[i]
        //     console.log(newResult[0].question)
        //     // return ( <div></div> )
        // }
        // let question = newResult.filter((k => k.startsWith('question')))
        // console.log(question)

        // let resultData = newResult.map((item, index, resp) => (
        //     <div key={index}>
        //         <span>{item.question}</span>
        //         <h2 style={{ visibility: 'hidden'}}>{resp = [item.correct_answer, item.incorrect_answers[0], item.incorrect_answers[1], item.incorrect_answers[2]]}</h2>
        //         <h2>{resp[Math.floor(Math.random() * 4)]}</h2>
        //         <button onClick={ this.nextQuestion }>Next Question</button> 
        //     </div>
        // ))
     
        let questions = newResult.map((item, idx) => <div key={idx}><p>{item.question}</p></div>)
        let answers = newResult.map((item,idx) => <div key={idx}><p>{item.correct_answer}</p></div>)
        // let incorrectAnswers = item.incorrect_answers;

        // let incorrectAnswers = () => {for (let i=0; i < item.incorrect_answers.length; i++ ) {
        //     newResult.map((item,idx) => <div key={idx}><p>{item.incorrect_answers[i]}</p></div>)
        // }}

        let incorrectAnswers = newResult.map((item,idx) => {for (let i=0; i < item.incorrect_answers.length; i++) {return item.incorrect_answers[i]}})

        // console.log(typeof incorrectAnswers[0])
        let keys = Object.values(incorrectAnswers)
        console.log(typeof keys)
        // console.log()

        return (
            <div>
                <h1>{questions[0]}</h1>
                <ul>
                <li>{answers[0]}</li>
                <li>{keys[0]}</li>
                <li>{keys[1]}</li>
                <li>{keys[2]}</li>
                </ul>


            </div>
            
        )
    }

        
    render() {
        return (
            <div>
                <Questions player={this.props.players} currentQuestion={this.props.currentQuestion}
                question={this.props.data.question}
                correctAnswer={this.props.data.correct_answer}/>
                <button onClick={this.props.nextQuestion}>Next</button>
                
                {this.props.data ? this.renderResults(this.props.data) : <p>load questions</p>}
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

const mDTP = dispatch => ({
    // selectAnswer: answer => dispatch({type: '', payload: answer}),
    addScore: () => dispatch({type: 'ADD_SCORE', payload: 1}),
    nextQuestion: () => dispatch({type: 'NEXT_QUESTION'})    
})

export default connect(mSTP, mDTP) (QuestionPage);
