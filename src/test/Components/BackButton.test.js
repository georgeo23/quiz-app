import BackButton from '../../Components/BackButton'

describe('BackButton', () => {
    let component;
    let goBackTest = jest.fn()

    beforeEach(() => {
        const historyMock = { goBack: goBackTest}
        component = shallow(<BackButton.WrappedComponent history={historyMock}/>)
    })
    test('it renders a button with an id of "back"',() =>{
        expect(component.find('#back')).toHaveLength(1)
    })
    test('it calls history.goBack when clicked', () => {
        component.find('#back').simulate('click')
        expect(goBackTest.mock.calls.length).toBe(1)
    })
})