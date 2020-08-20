import Question from '../../Components/Question.js'
// import { mount, configure } from 'enzyme'
// // import { MemoryRouter } from 'react-router-dom';
// import { Provider } from 'react-redux'

describe('Question', () => {
    let component;
    // let question = 'question'
    // const store = configureStore()
    const storeMock = { data: [{question: "how are you", correct_answer: "good", incorrect_answers: ["bad", "okay", "alright"] }], noOfPlayers: 0, players: [{name: "Player 1", score: 0}, {name: "Player 2", score: 0}, {name: "Player 3", score: 0}, {name: "Player 4", score: 0}, {name: "Player 5", score: 0}], currentQuestionID: 0}



    beforeEach(() => {
        // component = mount(<Provider store={store}><Question question={question}/></Provider>)
        component = shallow(<Question.WrappedComponent data={storeMock}/>)
      
    })

    test('it renders', () => {
        const home = shallow(<Question data={storeMock}/>)
        expect(home.find('div')).toHaveLength(1)
    })
})


// describe('Question', () => {
//     let component, getAnswerMock
//     beforeEach(() => {
//         getAnswerMock = { data: [{question: "how are you", correct_answer: "good", incorrect_answers: ["bad", "alright", "not great"]}], noOfPlayers: 3, players: [{name: "Player 1", score: 0}, {name: "Player 2", score: 0}, {name: "Player 3", score: 0}, {name: "Player 4", score: 0}, {name: "Player 5", score: 0}], currentQuestionID: 0};

//         component = shallow(<Question.WrappedComponent data={["how are you"]} question={{question: "how are you", correct_answer: "good", incorrect_answers: ["bad", "alright", "okay"] }} getAnswerMock={getAnswerMock} />)
         
//     })

//     test('it renders answer buttons', () => {
        
//         expect(component.find('#answerBtn1')).toHaveLength(1);
//     })
//     test('it loads with a state of Player 1', () => {
//         // div = component.find('div')
//         const initState = component.state('currentPlayer')
//         initState.setState({currentPlayer: 'Player 2'})
//         expect(component.state('currentPlayer')).toBe("Player 2")
//     } )

//     test('it should have 5 buttons', () => {
//         const button5 = component.find('button');
//         expect(button5).toHaveLength(5)
//     })


//     test('when a correct answer is clicked the score increases by 1', () => {
//         const button = component.find('button')
//         button.simulate('click', { preventDefault: jest.fn() })
//         expect(getAnswerMock.player[0].score).toBe(1)
//     })

//     test('it updates the state', () => {
//         button = component.find('nextq')
//         button.simulate('click')

//     })
    
// })