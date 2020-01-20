import React from 'react';
import PropTypes from 'prop-types';

const DisplayText = ({ text, name, style = {} }) => (
  <span style={style}>{text}<a>{name}</a></span>
);

DisplayText.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
};

DisplayText.defaultProps = {
  style: {},
};

export default DisplayText;
