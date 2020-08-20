import Result from "../../Pages/Result.js";
import { shallow } from 'enzyme';

describe('Result', () => {
    let component;
    let mockHistory;

    beforeEach(() => {
        mockHistory = { push: jest.fn() }
        component =  shallow(<Result.WrappedComponent history={mockHistory} />)
    })

    test('it renders title Leaderboard', () => {
        expect(component.find('h1').text()).toContain("Leaderboard");
    });

    test('it renders unordered list', () => {
        expect(component.find('ul')).toHaveLength(1);
    });

    test('it renders to links to Play and Welcome Page', () => {
        expect(component.find(Link)).toHaveLength(2);
        expect(component.find(Link).props().to).toBe('/play');
        expect(component.find(Link).props().to).toBe('/');
    })   

    test('it renders two buttons', () => {
       expect(component.find('button')).toHaveLength(2);
    })

} )
