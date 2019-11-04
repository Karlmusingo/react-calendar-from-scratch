import React from 'react';
import PropTypes from 'prop-types';

const DisplayText = ({ text, style={} }) => (
  <span style={style}>{text}</span>
);

DisplayText.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object
}

DisplayText.defaultProps = {
  style: {}
}

export default DisplayText;