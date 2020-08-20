import Reducer from '../../Reducer/Reducer'

describe('Reducer', () => {
    let returnState;

    test('initialises with a default state', () => {
        returnState = Reducer(undefined, {})
        expect(returnState).toEqual({data: [], noOfPlayers: 0, players: [{name: "Player 1", score: 0}, {name: "Player 2", score: 0}, {name: "Player 3", score: 0}, {name: "Player 4", score: 0}, {name: "Player 5", score: 0}], currentQuestionID: 0})
    })

   test('it can load players', () => {
       returnState = Reducer(undefined, {type: 'LOAD_PLAYER', payload: 2})
       expect(returnState.noOfPlayers).toBe(2)
   })

    test('it can load quiz', () => {
        returnState = Reducer(undefined, {type: 'LOAD_QUIZ', payload: 'correct_answers'})
        expect(returnState.data).toContain('correct_answers')
    })  

    test('it can load players', () => {
        returnState = Reducer(undefined, {type: 'LOAD_PLAYER', payload: 2})
        expect(returnState.noOfPlayers).toBe(2)
    })

    test('it can reset the game', () => {
        returnState = Reducer(undefined, {type: 'RESET_GAME'})
        expect(returnState).toEqual({data: [], noOfPlayers: 0, players: [{name: "Player 1", score: 0}, {name: "Player 2", score: 0}, {name: "Player 3", score: 0}, {name: "Player 4", score: 0}, {name: "Player 5", score: 0}], currentQuestionID: 0})
    })

    test('it can add score to player 1', () => {
        returnState = Reducer(undefined, {type: 'ADD_PSCORE1'})
        expect(returnState.players[0].score).toBe(1)
    })

    test('it can add score to player 1', () => {
        returnState = Reducer(undefined, {type: 'ADD_PSCORE2'})
        expect(returnState.players[1].score).toBe(1)
    })

    test('it can add score to player 1', () => {
        returnState = Reducer(undefined, {type: 'ADD_PSCORE3'})
        expect(returnState.players[2].score).toBe(1)
    })

    test('it can add score to player 1', () => {
        returnState = Reducer(undefined, {type: 'ADD_PSCORE4'})
        expect(returnState.players[3].score).toBe(1)
    })

    test('it can add score to player 1', () => {
        returnState = Reducer(undefined, {type: 'ADD_PSCORE5'})
        expect(returnState.players[4].score).toBe(1)
    })

    test('it increments the current question ID by 1', () => {
        returnState = Reducer(undefined, {type: 'NEXT_QUESTION'})
        expect(returnState.currentQuestionID).toBe(1)
    })

})