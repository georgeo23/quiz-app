import React, { Component } from 'react'

class Questions extends Component {
    componentDidMount = () => console.log(this.props)
    render() {
        return (
            <div>
                <form>
                    <h2>Player: {this.props.player}</h2>
                    <h3>Question {this.props.currentQuestion + 1}</h3>
                    <h1>{this.props.question}</h1>
                    <h1>{this.props.data}</h1>
                </form>
            </div>
        )
    }
}

export default Questions;