/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const useCalendarDay = (defaultDay = new Date()) => useState(defaultDay);
export default useCalendarDay;
