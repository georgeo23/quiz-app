import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { players, score,  addScore, resetGame } from '../Actions/Actions.js'
import { connect } from 'react-redux'
import '../App.css';
import '../Styles/Results.css'

class  Result extends Component {
       
     drawResults = () => {

        let noOfPlayers = this.props.noOfPlayers
        if (noOfPlayers == 2) {
        return (
            <ul>
                <li>{this.props.players[0].name} scored {this.props.players[0].score}</li>
                <li>{this.props.players[1].name} scored {this.props.players[1].score}</li>
            </ul>
        )
        } else if (noOfPlayers == 3) {
            return (
                <ul>
                    <li>{this.props.players[0].name} scored {this.props.players[0].score}</li>
                    <li>{this.props.players[1].name} scored {this.props.players[1].score}</li>
                    <li>{this.props.players[2].name} scored {this.props.players[2].score}</li>
                </ul>
            )
        } else if (noOfPlayers == 4) {
            return (
                <ul>
                    <li>{this.props.players[0].name} scored {this.props.players[0].score}</li>
                    <li>{this.props.players[1].name} scored {this.props.players[1].score}</li>
                    <li>{this.props.players[2].name} scored {this.props.players[2].score}</li>
                    <li>{this.props.players[3].name} scored {this.props.players[3].score}</li>
                </ul>
            )
    } else if (noOfPlayers == 5) {
        return (
            <ul>
                <li>{this.props.players[0].name} scored {this.props.players[0].score}</li>
                <li>{this.props.players[1].name} scored {this.props.players[1].score}</li>
                <li>{this.props.players[2].name} scored {this.props.players[2].score}</li>
                <li>{this.props.players[3].name} scored {this.props.players[3].score}</li>
                <li>{this.props.players[4].name} scored {this.props.players[4].score}</li>
            </ul>
        )
    } else {
        return (
            <h1>No Quiz Results, please select a game from the Play menu</h1>
        )

    }
}

    
    // getResults = () => {
    //     let numPlayers = parseInt(this.props.noOfPlayers)
    //     let arr = []
    //     console.log(numPlayers)
    //     for ( let i = 0; i < numPlayers; i++ ) {
    //         let slice = this.props.players.slice(0, i+1)
    //         console.log(slice)
    //         // return slice
    //         // slice.push(arr)
    //         return slice.map((players, id) => {
    //             <li key={id}>{console.log(players.name)} Score: {console.log(players.score)}</li>
    //         })
    //     }
    // }



    render(){
       
       return (
           <main>
                <div>
                    <h1 id="leaderboardTitle">Leaderboard</h1>
                    {this.drawResults()}

                    {/* {this.getResults()} */}
                    <Link to='/play' onClick={() => this.props.resetGame()}><button id="welcomeBtn">New game</button></Link>
                    <Link to='/' onClick={() => this.props.resetGame()}><button className="welcomeBtn">Exit</button></Link>
                </div>
            </main>

        )
    }

}

const mSTP = state => ({
    players: state.players,
    noOfPlayers: state.noOfPlayers
})

export default connect(mSTP, { players, score, addScore, resetGame }) (Result);
