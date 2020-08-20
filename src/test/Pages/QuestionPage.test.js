import QuestionPage from "../../Pages/QuestionPage";
import { shallow } from 'enzyme';

describe('QuestionPage', () => {
    let wrapper;


    beforeEach(() => {
        wrapper = shallow(<QuestionPage.WrappedComponent />);
    })

    test('it renders', () => {
        expect(wrapper.find('div')).toHaveLength(1)
    });



});