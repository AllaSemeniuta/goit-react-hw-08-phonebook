import PropTypes from 'prop-types';

import { SmallButton } from './Button.styled';

export const Button = ({ text }) => {
  return <SmallButton type="submit">{text}</SmallButton>;
};
Button.propTypes = {
  text: PropTypes.string,
};
