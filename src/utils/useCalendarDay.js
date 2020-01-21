/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const useCalendarDay = (defaultDay = new Date()) => useState(defaultDay);

export default useCalendarDay;
