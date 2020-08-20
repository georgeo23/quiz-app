import HowToPlay from "../../Pages/HowToPlay.js";
import { shallow } from 'enzyme';

describe('HowToPlay', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HowToPlay.WrappedComponent />);
    })

    test('it renders the title', () => {
        expect(wrapper.find('h2').text()).toContain('How to play:');
    });

    test('it renders three paragraphs', () => {
        // expect(wrapper.find('p')).toHaveLength(3);
        const pTag = wrapper.find('p');
        expect(pTag).toHaveLength(3)
        
    });
})