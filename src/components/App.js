import { Component } from "react";

import FeedbackOptions from "./feedbackOptions";
import Statistics from "./statistics/Statistics";

import Notification from "./notification/notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = (option) => {
    this.setState((prevstate) => ({ [option]: prevstate[option] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };

  render() {
    return (
      <div className="Feedback">
        <div title={"Please leave feedback"}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </div>

        <div title={"Statistics"}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </div>
      </div>
    );
  }
}

export default App;