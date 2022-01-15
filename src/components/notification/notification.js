import PropTypes from "prop-types";
import { Notify } from "./Notification.styled";

const Notification = ({ message }) => <Notify>{message}</Notify>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;