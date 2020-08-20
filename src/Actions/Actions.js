export const loading = (p) => ({type: "LOAD_PLAYER", payload: p})

export const loadQuiz = (data) => ({
    type: 'LOAD_QUIZ',
    payload: [...data]
})

export const getQuizData = (origData) => {
    
    return async dispatch => {
        dispatch(loading(origData.players))
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

// could these be refactored to one ADD_PSCORE which can handle any player by receiving a player id?
export const addPlayerScore1 = () => ({type: "ADD_PSCORE1" })
export const addPlayerScore2 = () => ({type: "ADD_PSCORE2" })
export const addPlayerScore3 = () => ({type: "ADD_PSCORE3" })
export const addPlayerScore4 = () => ({type: "ADD_PSCORE4" })
export const addPlayerScore5 = () => ({type: "ADD_PSCORE5" })

export const nextQuestion = () => ({type: "NEXT_QUESTION"})
export const resetGame = () => ({type: "RESET_GAME"})