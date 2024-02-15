// Import necessary dependencies for testing
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookingPage from '../../BookingPage';
import '@testing-library/jest-dom';


// Describe the test suite for the BookingPage component
describe('BookingPage', () => {
  // Test case for rendering the BookingPage component
  it('should render BookingPage component', () => {
    // Render the BookingPage component
    const { getByText, getByPlaceholderText } = render(<BookingPage />);
    
    // Assert that the page heading is rendered
    expect(getByText('Book Your Dinner')).toBeInTheDocument();

    // Assert that input fields are rendered
    expect(getByPlaceholderText('Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Email')).toBeInTheDocument();

    // Assert that the submit button is rendered
    expect(getByText('Submit')).toBeInTheDocument();
  });

  // Test case for submitting the form
  it('should submit the form when all fields are filled', () => {
    // Render the BookingPage component
    const { getByText, getByPlaceholderText } = render(<BookingPage />);
    
    // Simulate user input by typing into the input fields
    fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
    
    // Click the submit button
    fireEvent.click(getByText('Submit'));
    
    // Assert that the form is submitted (you may need to adjust this assertion based on your implementation)
    // For example, you might want to check if a success message is displayed after form submission
    // expect(getByText('Form submitted successfully')).toBeInTheDocument();
  });
});
