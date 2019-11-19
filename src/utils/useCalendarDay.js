import React, { useState, useEffect } from 'react';

const useCalendarDay = (defaultDay = new Date()) => {
  return useState(defaultDay);
}

export default useCalendarDay;
