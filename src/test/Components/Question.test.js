import Question from '../../Components/Question.js'
import { shallow } from 'enzyme';

describe('Question', () => {
    let component, getAnswerMock
    beforeEach(() => {
        getAnswerMock = { data: [{question: "how are you", correct_answer: "good", incorrect_answers: ["bad", "alright", "not great"]}], noOfPlayers: 3, players: [{name: "Player 1", score: 0}, {name: "Player 2", score: 0}, {name: "Player 3", score: 0}, {name: "Player 4", score: 0}, {name: "Player 5", score: 0}], currentQuestionID: 0};

        component = shallow(<Question.WrappedComponent data={["how are you"]} question={{question: "how are you", correct_answer: "good", incorrect_answers: ["bad", "alright", "okay"] }} getAnswerMock={getAnswerMock} />)
         
    })

    test('it renders answer buttons', () => {
        
        expect(component.find('#answerBtn1')).toHaveLength(1);
    })
    test('it loads with a state of Player 1', () => {
        // div = component.find('div')
        const initState = component.state('currentPlayer')
        initState.setState({currentPlayer: 'Player 2'})
        expect(component.state('currentPlayer')).toBe("Player 2")
    } )

    test('it should have 5 buttons', () => {
        const button5 = component.find('button');
        expect(button5).toHaveLength(5)
    })

    test('it renders', () => {
        expect(component.find('div')).toHaveLength(1)
    })


    test('when a correct answer is clicked the score increases by 1', () => {
        const button = component.find('button')
        button.simulate('click', { preventDefault: jest.fn() })
        expect(getAnswerMock.player[0].score).toBe(1)
    })

    test('it updates the state', () => {
        button = component.find('nextq')
        button.simulate('click')

    })

    
})