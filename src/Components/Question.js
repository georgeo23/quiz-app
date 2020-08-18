import React, { Component } from 'react'
import { nextQuestion } from '../Pages/QuestionPage.js'

// const Button = ({ answer }) => {
//     return (
//    <button >{answer}</button>
//     )}

class Question extends Component {
    constructor() {
        super();
        this.state = ({
            score: 0
    });
    
    // this.valueChange = this.valueChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.doSomething = this.doSomething.bind(this)
}
    componentDidMount = () => console.log(this.props)
     

// Score
// go to next question


    handleAnswer = (selectedAnswer) => {
            console.log(selectedAnswer)
           if (selectedAnswer === this.props.correctAnswer)  {
            //    return <p>CORRECT</p>
            console.log('correct')
                this.setState({score: ++this.state.score})
            //    this.setState(prevState => ({score: ++prevState.score}))
               console.log(this.state.score)
           } else {
            //    return  <p>INCORRECT</p>
            console.log('incorrect')
           }

    };
    
    doSomething = () => {
        console.log("hello")
    }
   
    render() {
        const shuffledAnswer = [this.props.correctAnswer, ...this.props.incorrectAnswers].sort(() => Math.random() - 0.5);



        
        return (
            <div>
       
                    <h1>Q{this.props.currentQuestion + 1}</h1>
                    <h1>Players: {this.props.players}</h1>
                    <h1 dangerouslySetInnerHTML={{ __html: this.props.question }}></h1>

                <button onClick={() => this.handleAnswer(shuffledAnswer[0])} >{shuffledAnswer[0]}</button> 
                <button onClick={() => this.handleAnswer(shuffledAnswer[1])} >{shuffledAnswer[1]}</button> 
                <button onClick={() => this.handleAnswer(shuffledAnswer[2])} >{shuffledAnswer[2]}</button> 
                <button onClick={() => this.handleAnswer(shuffledAnswer[3])} >{shuffledAnswer[3]}</button> 
            </div>
 
        )
    }
}


export default Question;