/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

const DisplayText = ({ text, name, style = {} }) => (
  <span style={style}>
    {text}
    <a>{name}</a>
  </span>
);

DisplayText.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
};

DisplayText.defaultProps = {
  style: {},
};

export default DisplayText;
