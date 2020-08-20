import React from 'react';
import { withRouter } from 'react-router-dom';
import BackButton from '../components/BackButton.js'
const HowToPlay = ({ history }) => {
    return (
        <div>
            <BackButton />
                <h2>How to play:</h2>
                    <p>Select up to 5 players to quiz with as well as how many questions you want to answer each.</p>
                    <p>Choose your favourite topic for the quiz, or go rogue and choose one you are less familiar with!</p>
                    <p>Finally - choose your difficulty! Whether you're new to quizzes or you all fancy a challenge on your favourite topics you can choose how easy or hard you want it!</p>
        </div>
    )
}

// You don't need withRouter/history in this component as BackButton has them itself
export default withRouter(HowToPlay);