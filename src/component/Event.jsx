import React from 'react';
import PropTypes from 'prop-types';
import DisplayText from './DisplayText';

const Event = ({ title, style={} }) => (
  <div className="event" style={style}>
    <DisplayText text={title} />
  </div>
);

Event.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
}

export default Event;