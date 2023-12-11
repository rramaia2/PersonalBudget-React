import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';
import { calculatePercentage } from "../src/utils";



test('calculates the percentage correctly', () => {
 // Arrange 
 const allocated = 500;
 const totalBudget = 1000;

 // Act
  const result = calculatePercentage(allocated, totalBudget);

 // Assert
 expect(result).toBe('50.00');
});

test('renders HomePage component', () => {
    const { getByText } = render(<HomePage />);
    const linkElement = getByText(/Budget Allocation/i);
    expect(linkElement).toBeInTheDocument();
  });