import React, { Component } from 'react';
import './FeedbackOptions.css';

class FeedbackOptions extends Component {
    render() {
        return (
            <div>
                {this.props.options.map(option => (
                    <button
                        className="Button"
                        onClick={this.props.onLeaveFeedback}
                        key={option}
                    >
                        {option}
                    </button>
                ))}
            </div>
        )
    }
}

export default FeedbackOptions;