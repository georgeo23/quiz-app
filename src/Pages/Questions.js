import React from 'react';
import { connect } from 'react-redux';
// import { getQuizData } from '../Actions/Actions'
import Questions from '../Components/Questions.js'

class QuestionPage extends React.Component {

    renderResults = results => {

     
        console.log(results[0])
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

        let resultData = newResult.map((item, index, resp) => (
            <div key={index}>
                <span>{item.question}</span>
                <h2 style={{ visibility: 'hidden'}}>{resp = [item.correct_answer, item.incorrect_answers[0], item.incorrect_answers[1], item.incorrect_answers[2]]}</h2>
                <h2>{resp[Math.floor(Math.random() * 4)]}</h2>
                <button onClick={ this.nextQuestion }>Next Question</button>
{/*              
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
     

        return (
            <div></div>
        )
    }

        
    render() {
        return (
            <div>
                <Questions 
                on_submit={this.nextQuestion}
                question_number={this.props.currentQuestion + 1}
                player={this.props.player}
                />
                <button onClick={this.props.nextQuestion}>Next</button>
                
                {this.props.data ? this.renderResults(this.props.data) : <p>load questions</p>}
            </div>
        )
    }
}
    
