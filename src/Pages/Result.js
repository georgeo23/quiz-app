import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { players, score,  addScore, resetGame } from '../Actions/Actions.js'
import { connect } from 'react-redux'

class  Result extends Component {
    // componentDidMount = () => this.drawResults()

    // https://blog.cloudboost.io/for-loops-in-react-render-no-you-didnt-6c9f4aa73778
    
     drawResults = () => {
         let numPlayers = parseInt(this.props.noOfPlayers)

         for (let i = 0; i < numPlayers; i++) {
             console.log(i)
             
             return  (
                 <div>
                     <ul>
                         <li>{this.props.players[i].name} scored {this.props.players[i].score}</li>
                         
                    </ul>
                </div>
             )
           
         }
         
    
    }
    // createResults = () => {
    //         let leaderboard = []
    //         let numPlayers = parseInt(this.props.noOfPlayers)
            
    //         let children = []
    //         for (let i = 0; i < numPlayers; i++) {
    //             children.push(<li>{this.props.players[i].name} scored {this.props.players[i].score}</li>)
    //         }
    //         console.log(children)
    //         // leaderboard.push({children})
    //         return leaderboard
            
    // }
    

    // displayResults = () => {
    //     let resultsArr = []
    //     let numPlayers = parseInt(this.props.noOfPlayers)
    //     for(let i = 0; i < numPlayers; i++) {
    //         let children = []
    //     for(let j = 0; j < numPlayers+1; i++) {
    //         children.push(<li>{this.props.players[j+1].name} scored {this.props.players[j+1].score}</li> )
    //     }
    //         resultsArr.push(<ul>{children}</ul>)
    //         // <ul>   
    //         //      <li>{this.props.players[i].name} scored {this.props.players[i].score}</li>        
    //         // </ul>
    //     }
    // }
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

        console.log(this.props.data)

        console.log(playersArray.length) // 5


        // const getResults = () => {for (let i = this.props.noOfPlayers; i < playersArray; i++) {
        //     // console.log('hello')
        //     <li>{playersArray[i]}</li>
        // }
        // }
        

        const listPlayers = () => {if (this.props.players.score > 0) {
                <li>{this.props.player} scored {this.props.players.score}</li>
        } else {
                <li></li>
        }}

            
        //  this.props.players.score > 0 ? this.props.players.map((item, idx) => <li key={idx}>{item.name} scored {item.score}</li>) : ;  
        
        const listAllPlayers = this.props.players.map((item, idx) => <li key={idx}>{item.name} scored {item.score} </li>);
        
        console.log(this.props.players.name) // 0
        console.log(this.props.noOfPlayers) // 5
        console.log(playersArray.length)
        

        return (
            <div>
                <h1>Leaderboard</h1>
                {/* {getResults()} */}
                <ul>
                    {this.drawResults()}
                </ul>
                <Link to='/play' className='welcomebtn' onClick={() => this.props.resetGame()}>New Game</Link>
                <Link to='/' className='welcomebtn' onClick={() => this.props.resetGame()}>Exit</Link>
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


export default connect(mSTP, { players, score, addScore, resetGame }) (Result);

