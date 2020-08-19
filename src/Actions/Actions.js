export const loading = (p) => ({type: "LOAD_PLAYER", payload: p})
//    return async dispatch => {
        
//    }



// export const loadPlayerScore = (p) => {
//     // console.log(p)
//     for (let i = 1; i <= p; i++)  ({
//         type: 'ADD_PLAYERS_SCORES',
//         payload: `player${i}_score`
    
        
//     })


export const loadQuiz = (data) => ({
    type: 'LOAD_QUIZ',
    payload: [...data]
})

export const getQuizData = (origData) => {
    
    return async dispatch => {
        dispatch(loading(origData.players))
        // dispatch(loadPlayerScore(origData.players))
    try {
        const quiz = await fetch(`https://opentdb.com/api.php?amount=${origData.questions}&category=${origData.category}&difficulty=${origData.difficulty}&type=multiple`)
        
        const data = await quiz.json()
        console.log(data.results)
        dispatch(loadQuiz(data.results))
        
    } catch (err) {
        console.warn(err.message)
    }    
}
}
export const addPlayerScore1 = () => ({type: "ADD_PSCORE1" })
export const addPlayerScore2 = () => ({type: "ADD_PSCORE2" })
export const addPlayerScore3 = () => ({type: "ADD_PSCORE3" })
export const addPlayerScore4 = () => ({type: "ADD_PSCORE4" })
export const addPlayerScore5 = () => ({type: "ADD_PSCORE5" })
export const nextQuestion = () => ({type: "NEXT_QUESTION"})
// export const updateScore = () => ({type: 'UPDATE_PLAYERS_SCORE'})