import Welcome from "../../Pages/Welcome.js";
import { shallow } from 'enzyme';

describe('Welcome', () => {
    let wrapper;
    let mockHistory;

    beforeEach(() => {
        wrapper = shallow(<Welcome />);
        // mockHistory = { push: jest.fn() }
    })

    test('it renders the title', () => {
        expect(wrapper.find('h1').text()).toContain('Welcome to Quiz App!');
    });

    test('it renders 2 buttons', () => {
        const button = wrapper.find('button');
        // expect(button).toHaveLength(2);
    });

    //testing the Link for the history .push [incomplete]
    test('has 2 links', () => {
        const link = wrapper.find('Link');
        // expect(link).toHaveLength(2);
     
    })


});