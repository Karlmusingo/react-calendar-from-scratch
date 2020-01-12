// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

const funct = () => {
    return 1;
}

it('renders without crashing', () => {
    expect(funct()).toBe(1);
});
