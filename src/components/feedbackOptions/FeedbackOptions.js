import PropTypes from "prop-types";
import { Button, ButtonsWrap } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonsWrap>
    {options.map((option) => (
      <Button
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    ))}
  </ButtonsWrap>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;