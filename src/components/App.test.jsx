import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
// import userEvent from '@testing-library/user-event';

describe('App component', () => {
  it('renders correctly', () => {
    const result = render(<App />);
    const div = result.container.querySelector('#App');
    expect(div).toBeInTheDocument();
  });
});
