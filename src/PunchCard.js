import React, { Component, Fragment } from 'react';
import firebase from './firebase.js';
import './App.css';

class PunchCard extends Component {
    constructor(){
        super()
        this.state = {
            punches: 0,
            punch1: false,
            punch2:false,
            punch3:false,
            punch4:false,
            punch5:false,
            punch6:false,
            punch7:false,
            punch8:false,
        }
    }

    handleClick = (event) => {
        console.log(this)
        event.preventDefault();
        let punchName = event.target.id
        console.log(punchName)
        const currentPunches = this.props.habit.card.punches;
        const dbRef = firebase.database().ref(this.props.habit.key).update({ punches: currentPunches + 1 });

        let currentPunchState = this.state[punchName]

        this.setState({
            [punchName]: {
                bgColor: '#2b555a'
            }
        })
    }  

    removeCard = (cardID) => {
        const dbRef = firebase.database().ref(cardID);
        dbRef.remove();
    }

    render() {
        const currentPunches = this.props.habit.card.punches;

        return (
            <Fragment>
                <div className="card-with-details">
                    {currentPunches < 8 ? 
                    <div>
                        <p>Habit: {this.props.habit.card.currentHabit}</p>
                        <p>Reward: {this.props.habit.card.reward}</p>
                        
                        <div className="card">
                            <div 
                                className="punch" 
                                id="punch1"
                                onClick={this.handleClick}
                                style={{ backgroundColor: this.state.punch1.bgColor  }}>
                            </div>
                            <div
                                className="punch"
                                id="punch2"
                                onClick={this.handleClick}
                                style={{ backgroundColor: this.state.punch2.bgColor }}>
                            </div>
                            <div
                                className="punch"
                                id="punch3"
                                onClick={this.handleClick}
                                style={{ backgroundColor: this.state.punch3.bgColor }}>
                            </div>
                            <div
                                className="punch"
                                id="punch4"
                                onClick={this.handleClick}
                                style={{ backgroundColor: this.state.punch4.bgColor }}>
                            </div>
                            <div
                                className="punch"
                                id="punch5"
                                onClick={this.handleClick}
                                style={{ backgroundColor: this.state.punch5.bgColor }}>
                            </div>
                            <div
                                className="punch"
                                id="punch6"
                                onClick={this.handleClick}
                                style={{ backgroundColor: this.state.punch6.bgColor }}>
                            </div>
                            <div
                                className="punch"
                                id="punch7"
                                onClick={this.handleClick}
                                style={{ backgroundColor: this.state.punch7.bgColor }}>
                            </div>
                            <div
                                className="punch"
                                id="punch8"
                                onClick={this.handleClick}
                                style={{ backgroundColor: this.state.punch8.bgColor }}>
                            </div>

                        </div>
                    </div>
                    : 
                    <div className="reward-msg">
                            <p>You're doing amazing! Go treat yourself: <span className="reward-input">{this.props.habit.card.reward}!</span></p>
                    </div>} 
                    <button 
                        onClick={() => { this.removeCard(this.props.habit.key) }}
                        className="remove-button">
                            Remove
                    </button>
                </div>    
            </Fragment>
        )
    }
}

export default PunchCard;