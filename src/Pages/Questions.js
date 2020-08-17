import React from 'react';
import { connect } from 'react-redux';
// import { getQuizData } from '../Actions/Actions'

class Questions extends React.Component {

    renderResults = results => {
        // const entities = {
        //     '&#039;': "'",
        //     '&quot;': '"',
        //     // add more if needed
        //   };


        let result = JSON.stringify(results)
        let convert = result.replace(/&#039/g, "").replace(/&quot/g, "").replace(/;/g, '').replace(/Ex;/g, '').replace(/&rsquos/g, '').replace(/&ldquo/g, '').replace(/&shy;/g, '')
        // let convert = result.replace(/[#&;\\039\\ldquo]/g, '')
        let convert2 = result.replace(/&\\quot/g, "")

        // "Where is the train station &quot;Llanfair&shy;pwllgwyngyll&shy;gogery&shy;chwyrn&shy;drobwll&shy;llan&shy;tysilio&shy;gogo&shy;goch&quot;?"

        let newResult = JSON.parse(convert);
        

        // newRes = () => (
        //     <h1>{this.newResult}</h1>
        // )
        // return <h1>{this.newResult}</h1>
        return newResult.map((item, index, resp) => (
            <div key={index}>
               
                <span>{item.question}</span>
                <h2 >{resp = [item.correct_answer, item.incorrect_answers[0], item.incorrect_answers[1], item.incorrect_answers[2]]}</h2>
{/*                 style={{ visibility: 'hidden'}}
                <h2>{resp[Math.floor(Math.random() * 4)]}</h2>
                <h2>{resp[Math.floor(Math.random() * 4)]}</h2>
                <h2>{resp[Math.floor(Math.random() * 4)]}</h2>
                <h2>{resp[Math.floor(Math.random() * 4)]}</h2> */}
                {/* <h2>{resp[0], resp[1]}</h2> */}
                {/* <h1>{item.question}</h1>
                <span>{console.log(typeof item.question)}</span>
                <h2>{item.correct_answer}</h2>
                <h2>{item.incorrect_answers[0]}</h2>
                <h2>{item.incorrect_answers[1]}</h2>
                <h2>{item.incorrect_answers[2]}</h2> */}
                
            </div>
        ))
    }

        
    render() {
        return (
            <div>
                <h1>Players: {this.props.players}</h1>
                {/* <h1>Question: {this.props.data}</h1> */}
                {/* {console.log(this.props.data.question)} */}
                <h1>Question: {this.props.currentQuestion+1}</h1>
                <button onClick={this.props.nextQuestion}>Next</button>
                {/* <span onClick={this.props.addScore}></span> */}
                {/* <p>Score: {this.props.score}</p> */}
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

export default connect(mSTP, mDTP) (Questions);


