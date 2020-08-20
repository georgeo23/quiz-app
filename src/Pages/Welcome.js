import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

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
                <Link to='/play' className='welcomebtn'><button>Play</button></Link>
                <Link to='/howto' className="welcomebtn"><button>How To Play</button></Link>
            </div>
        )
    }
}

export default Welcome;