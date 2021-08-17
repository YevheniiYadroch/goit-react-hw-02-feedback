import React, { Component } from 'react';
import './Section.css';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

class Section extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    TotalCounrer = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    PositivePercentage = () => {
        const value = this.TotalCounrer / this.state.good;
        if (value == NaN) {
            return
        }
        return value;
    }

    render() {
        return (
            <section>
                <h2>{this.props.title}</h2>
                <FeedbackOptions />
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.TotalCounrer()} positivePercentage={this.PositivePercentage()} />
            </section>
        )
    }
}

export default Section;