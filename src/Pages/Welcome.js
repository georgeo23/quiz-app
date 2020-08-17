import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
    
    // handleClick = e => {
    //     e.preventDefault();
    //     // this.props.history.
    // }

    // handleClick2 = (e) => {
    //     e.preventDefault();
    //     <Link to='/howto' />        
    // }


    render() {
        return (
            <div>
                <h1>Welcome to Quiz App!</h1>
                <Link to='/play' className='welcomebtn'>Play</Link>
                <Link to='/howto' className="welcomebtn">How To Play</Link>
            </div>
        )
    }
}

export default Welcome;