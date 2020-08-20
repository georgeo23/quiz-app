import React from 'react';
import BackButton from '../components/BackButton.js';
import { connect } from 'react-redux';
import { getQuizData } from '../Actions/Actions.js'
import { withRouter} from 'react-router-dom';

class Play extends React.Component {
    constructor() {
        super();
        this.state={
            players: "2",
            questions: "1",
            category: "9",
            difficulty: "easy",
            userInput: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.onResetClick = this.onResetClick.bind(this);
        this.retrieveQuiz = this.retrieveQuiz.bind(this);
    }
 
    async retrieveQuiz(e){ // why is this function async? Are you awaiting anything?
         e.preventDefault()
         // PLEASE DO NOT UPDATE STATE DIRECTLY. USE SETSTATE!!
        this.state.questions = this.state.questions * this.state.players
       this.props.getQuizData(this.state);
        this.props.history.push('/questions');  
    }
    
     onResetClick(e) {
        e.preventDefault();
        e.target.reset();

        // DO NOT DIRECTLY ACCESS THIS.STATE WITHIN A SETSTATE!!! 
        // What are you acheiving with this setState? If you mean to reset it to how it was on inital mount,
        // you need to explicitly set that data again.
        // const initState = { players: "2", questions: "1", etc.. }
        // this.setState(initState)
        // 
        this.setState({state: this.state}) 
        // ^ this is making a new key in state, alse called state.
        // The value is a pot luck object which could have been altered between this line being executed
        // and the values actually being updated.

        // NO! DO NOT DIRECTLY UPDATE STATE! USE SETSTATE!
        this.state.userInput = ""

        // What is the need for this? If you are successfully resetting your state and you have controlled components,
        // the form will effectively be reset.
        document.getElementById('quizform').reset();  
    }

     handleInput(e) {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }  
    
    render() {
        
        return (
            <div>
                
                <BackButton />
                <form id="quizform" onSubmit={this.retrieveQuiz}>
                    <label htmlFor="players">No. of Players</label>
                    
                    <select name="players" value={this.state.players} onChange={this.handleInput}>
                        <option value="2">2 Players</option>
                        <option value="3">3 Players</option>
                        <option value="4">4 Players</option>
                        <option value="5">5 Players</option>
                    </select>
                <label htmlFor="questions">No. of Questions</label>
                <select name="questions" value={this.state.questions} onChange={this.handleInput}>
                    {/* Could this be tidied with a loop? */}
                        <option value="1">1 Question</option>
                        <option value="2">2 Questions</option>
                        <option value="3">3 Questions</option>
                        <option value="4">4 Questions</option>
                        <option value="5">5 Questions</option>
                        <option value="6">6 Questions</option>
                        <option value="7">7 Questions</option>
                        <option value="8">8 Questions</option>
                        <option value="9">9 Questions</option>
                        <option value="10">10 Questions</option>
                </select>
                    <label htmlFor="category">Category</label>
                    <select name="category" value={this.state.category} onChange={this.handleInput}>
                        {/* Could this be tidied by iterating over a collection? */}
                        {/* const opts = [{name: "books", id: 10}, {name: "politics, id: 24"}, etc.] */}
                        {/* opts.map(o => <option value={o.id}>{o.name}</option>) */}
                        <option value="9">General Knowledge</option>
                        <option value="10">Books</option>
                        <option value="11">Film</option>
                        <option value="12">Music</option>
                        <option value="13">Musicals & Theatre</option>
                        <option value="14">Television</option>
                        <option value="15">Video Games</option>
                        <option value="16">Board Games</option>
                        <option value="17">Science & Nature</option>
                        <option value="18">Computers</option>
                        <option value="19">Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Comics</option>
                        <option value="31">Japanese Anime</option>
                        <option value="32">Cartoons</option>
                    </select>
                    <label htmlFor="difficulty">Difficulty</label>
                    <select name="difficulty" value={this.state.difficulty} onChange={this.handleInput}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    
                    <input type="submit" value="Load Quiz"></input>
                </form>
             
            </div>
        )
    }
}

// Great! I think Redux was a good move in this project
const mSTP = state => ({
    data: state.data,
    players: state.players,
    score: state.score,
    currentQuestion: state.currentQuestion
})
export default withRouter (connect(mSTP, { getQuizData })(Play));
