import QuestionPage from "../../Pages/QuestionPage";
import { shallow } from 'enzyme';
describe('QuestionPage', () => {
    let wrapper;
    let AddScore = jest.fn()
    beforeEach(() => {
        const storeMock = { data: [{question: "how are you", correct_answer: "good", incorrect_answers: ["bad", "okay", "alright"] }], noOfPlayers: 0, players: [{name: "Player 1", score: 0}, {name: "Player 2", score: 0}, {name: "Player 3", score: 0}, {name: "Player 4", score: 0}, {name: "Player 5", score: 0}], currentQuestionID: 0};
        wrapper = shallow(<QuestionPage.WrappedComponent data={storeMock}/>);
    })
    test('it renders', () => {
        expect(wrapper.find('div')).toHaveLength(1)
    });
  
});