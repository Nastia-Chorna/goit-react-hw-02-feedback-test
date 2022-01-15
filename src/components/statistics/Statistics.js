import PropTypes from "prop-types";
import { StatWrap, StatItem } from "./Statistics.styled";

const StatisticsList = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatWrap>
      <StatItem>Good: {good}</StatItem>
      <StatItem>Neutral: {neutral}</StatItem>
      <StatItem>Bad: {bad}</StatItem>
      <StatItem>Total: {total}</StatItem>
      <StatItem>Positive feedback: {positivePercentage}%</StatItem>
    </StatWrap>
  );
};

StatisticsList.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default StatisticsList;