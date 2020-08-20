import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../Styles/Welcome.css';


class Welcome extends Component {
 
    render() {
        return (
            <div>

                <h1>Welcome to Quiz App!</h1>
                <Link to='/play' className='welcomebtn'>Play</Link>
                <br/>
                <Link to='/howto' className="welcomebtn">How To Play</Link>

            </div>
        )
    }
}

export default Welcome;