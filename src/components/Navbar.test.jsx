import React from 'react';
import {render, screen} from '@testing-library/react';
import Navbar from './Navbar';
// import userEvent from '@testing-library/user-event';

describe('Navbar component', () => {
  it('renders correctly heading', () => {
    render(<Navbar />);
    const header = screen.getByRole('heading', {name: 'Online test shop'});
    expect(header).toBeInTheDocument();
  });

  it('render correctly links', () => {
    render(<Navbar />);
    const ul = screen.getByRole('list');
    expect(ul).toBeInTheDocument();
  });
});
