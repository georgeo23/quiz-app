const initialState = { data: [], players: 0, score: 0, currentQuestion: 0 };

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_PLAYER':
            return { ...state, players: action.payload }
        case 'LOAD_QUIZ':
            return { ...state, data: action.payload }
        case 'ADD_SCORE':
            return { ...state, score: action.payload + state.score}
        case 'NEXT_QUESTION':
            return { ...state, currentQuestion: state.currentQuestion+= 1 }
        case 'RESET_GAME':
            return { ...state }
        default:
            return state;
    }
}

export default Reducer;