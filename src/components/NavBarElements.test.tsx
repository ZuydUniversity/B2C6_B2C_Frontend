import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBarElements';

test('renders NavBar with correct links', () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  const homeLink = screen.getByRole('link', { name: /Home/i });
  expect(homeLink).toBeInTheDocument();
  expect(homeLink.getAttribute('href')).toBe('/');

  const patientPageLink = screen.getByRole('link', { name: /Patientpage/i });
  expect(patientPageLink).toBeInTheDocument();
  expect(patientPageLink.getAttribute('href')).toBe('/Patientpage');

  const doctorPageLink = screen.getByRole('link', { name: /Doctorpage/i });
  expect(doctorPageLink).toBeInTheDocument();
  expect(doctorPageLink.getAttribute('href')).toBe('/Docterpage');
});