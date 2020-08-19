import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { players, score,  addScore, resetGame } from '../Actions/Actions.js'
import { connect } from 'react-redux'

class  Result extends Component {
    // componentDidMount = () => this.drawResults()

     drawResults = () => <li>{this.props.players[0].name} scored {this.props.players[0].score}</li>
    //   {for (let i = 0; i < this.props.noOfPlayers; i++) <li>{this.props.players[i].name} scored {this.props.players[i].score}</li>}
         
        
        //    return (this.props.players.map((item, idx) => {
               
        //        <li key={idx}>{item.name} score of {item.score}</li>
        //    }))
 
       
//    }
   consoleLog = () => console.log("LEADERBOARD")
    
    render(){
       
        const playerOne = (this.props.players[0].name, this.props.players[0].score)
        // console.log(player1)

        const playersArray = [this.props.players[0].name, this.props.players[1].name, this.props.players[2].name, this.props.players[3].name, this.props.players[4].name ]

        // const scoresArray = [(this.props.players[0].name, this.props.players[0].score), (this.props.players[1].name, this.props.players[1].score), (this.props.players[2].name, this.props.players[2].score), (this.props.players[3].name, this.props.players[3].score), (this.props.players[4].name, this.props.players[4].score)].sort(function(a,b) { return })
        // console.log(scoresArray)

        // function sortScores() {
        //     scoresArray.sort((a, b) => a - b);
        // }

        const scoresArray = [this.props.players[0].score, this.props.players[1].score, this.props.players[2].score, this.props.players[3].score, this.props.players[4].score ]
        // console.log(scoresArray)


        // ***** SORT PLAYERS BY THEIR SCORES *****
        let sortPlayers = [this.props.players]
        console.log(sortPlayers)
        console.log(this.props.players[0].name)

        sortPlayers.sort(
            function (a, b) {
                if (a.name === b.name) {
                    return b.score - a.score;
                }
                return a.score > b.score ? 1: -1;

        });
        console.log(sortPlayers)

        // const totalQuestions = this.props.data.length / this.props.noOfPlayers; //need to bring in noOfPlayers
        console.log(this.props.data)

        console.log(playersArray.length) // 5

        // if (this.props.noOfPlayers < playersArray.length) {
        //     return <ul>
        //         <li>{this.props.players}</li>
        //     </ul>
        // }

        // const getResults = () => {for (let i = this.props.noOfPlayers; i < playersArray; i++) {
        //     // console.log('hello')
        //     <li>{playersArray[i]}</li>
        // }
        // }

        
        // this.props.score.map(p => <li>Player{p}</li> 
        
        // const listPlayers = this.props.players.length === this.props.noOfPlayers ? 
        
        
        return (
            <div>
                <h1>Leaderboard</h1>
                {/* {getResults()} */}
               
                <ul>
                    {/* {this.drawResults()} */}

                    {console.log(this.props.players)}
            
                    {
                        this.props.players.map((item, idx) => <li key={idx}>{item.name} scored {item.score}</li>)   
                    }

                </ul>

                <Link to='/play' className='welcomebtn' onClick={() => this.props.resetGame()}>New Game</Link>
                <Link to='/' className='welcomebtn'>Exit</Link>
            </div>
        )
    }

}

const mSTP = state => ({
    data: state.data,
    players: state.players,
    score: state.score,
    noOfPlayers: state.noOfPlayers
    // currentQuestionID: state.currentQuestionID

})

// export const mDTP = dispatch => ({
//     addScore: () => dispatch({type: 'ADD_SCORE', payload: 1}),
//     nextQuestion: () => dispatch({type: 'NEXT_QUESTION'})    
// })


export default connect(mSTP, { players, score, addScore, resetGame }) (Result);

