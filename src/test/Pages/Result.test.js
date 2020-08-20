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
        
        expect(component.find('h1').first().text()).toEqual("Leaderboard");
    });
   
    test('it renders to links to Play and Welcome Page', () => {
        const home = shallow(<Result.WrappedComponent />)
        expect(home.find('Link')).toHaveLength(2);
        // expect(component.find('Link').props(1).toBe('/play');
        // expect(component.find('Link').props(2).to).toBe('/');
    })   
    test('it renders two buttons', () => {
       expect(component.find('button')).toHaveLength(2);
    })
   
} )
