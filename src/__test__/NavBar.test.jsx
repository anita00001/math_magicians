import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';

describe('NavBar component', () => {
  test('renders correctly', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    const tree = renderer.create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    renderer.create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    ).toJSON();
    const navbars = screen.getAllByRole('link');
    expect(navbars).toHaveLength(4);
  });
});
