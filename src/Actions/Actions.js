export const loading = (p) => ({type: "LOAD_PLAYER", payload: p})

export const loadQuiz = (data) => ({
    type: 'LOAD_QUIZ',
    payload: data
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

export const nextQuestion = () => ({type: "NEXT_QUESTION"})