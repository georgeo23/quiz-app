const initialState = { data: [], noOfPlayers: 0, players: [{name: "Player 1", score: 0}, {name: "Player 2", score: 0}, {name: "Player 3", score: 0}, {name: "Player 4", score: 0}, {name: "Player 5", score: 0}], currentQuestionID: 0};

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_PLAYER':
            return { ...state, noOfPlayers: action.payload }
        case 'LOAD_QUIZ':
            return { ...state, data: action.payload }
        case 'ADD_PSCORE1':
            return { ...state, players: [{name: state.players[0].name, score: state.players[0].score+= 1}, state.players[1], state.players[2], state.players[3], state.players[4]]  }
        case 'ADD_PSCORE2':
            return { ...state, players: [state.players[0], {name: state.players[1].name, score: state.players[1].score+= 1}, state.players[2], state.players[3], state.players[4]]}
        case 'ADD_PSCORE3':
            return { ...state, players: [state.players[0], state.players[1], {name: state.players[2].name, score: state.players[2].score+= 1}, state.players[3], state.players[4]]}
        case 'ADD_PSCORE4':
            return { ...state, players: [state.players[0], state.players[1], state.players[2], {name: state.players[3].name, score: state.players[3].score+= 1}, state.players[4]]}
        case 'ADD_PSCORE5':
            return { ...state, players: [state.players[0], state.players[1], state.players[2], state.players[3], {name: state.players[4].name, score: state.players[4].score+= 1}]}
        case 'NEXT_QUESTION':
            return { ...state, currentQuestionID: state.currentQuestionID+= 1 }
        case 'RESET_GAME':
            return { ...state }
        default:
            return state;
    }
}

export default Reducer;