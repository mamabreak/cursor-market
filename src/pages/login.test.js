import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './login'; // Adjust the import path as necessary

beforeEach(() => {
    console.log = jest.fn(); // Mock console.log
});

describe('Login Component', () => {
    const setup = () => {
        const utils = render(<Login />);
        return {
            ...utils,
            switchToSignUp: () => fireEvent.click(utils.getByText('Sign up')),
            fillInput: (placeholder, value) => {
                fireEvent.change(utils.getByPlaceholderText(placeholder), { target: { value } });
            },
            clickButton: (name) => fireEvent.click(utils.getByRole('button', { name: new RegExp(name, 'i') })),
            toggleDarkMode: () => fireEvent.click(utils.getByAltText('Dark mode switcher')), // Use the alt text of the image
        };
    };

    test('should register a new user', () => {
        const { switchToSignUp, fillInput, clickButton } = setup();

        switchToSignUp();
        fillInput('Real Name', 'Test User');
        fillInput('Email', 'test@example.com');
        fillInput('Password', 'password');
        
        clickButton('Sign up');
        
        expect(console.log).toHaveBeenCalledWith(
          expect.stringContaining('We have a new user now:'),
          expect.any(Object) // Accept any additional data
        );
    });

    test('should log in an existing user', () => {
        const { getByText, fillInput, clickButton } = setup();

        // Switch to registration form
        fireEvent.click(getByText('Sign up'));
        fillInput('Real Name', 'Test User');
        fillInput('Email', 'test@example.com');
        fillInput('Password', 'password');
        clickButton('Sign up');

        // Switch back to login form
        fireEvent.click(getByText('Log in'));
        fillInput('Email', 'test@example.com');
        fillInput('Password', 'password');
        clickButton('Log in');

        // Add your assertions here (e.g., checking if logged in successfully)
        // Example assertion could be checking for a success message or user being redirected
    });

    test('should notify if user already exists', () => {
        const { switchToSignUp, fillInput, clickButton } = setup();

        switchToSignUp();
        fillInput('Real Name', 'Test User');
        fillInput('Email', 'test@example.com');
        fillInput('Password', 'password');
        clickButton('Sign up');

        // Attempt to register the same user again
        fillInput('Real Name', 'Test User');
        fillInput('Email', 'test@example.com');
        fillInput('Password', 'password');
        clickButton('Sign up');

        expect(console.log).toHaveBeenCalledWith("User already exists");
    });

    test('should change theme to dark and back', () => {
        const { toggleDarkMode } = setup();

        // Initial state check (assuming there's a way to check the current theme)
        expect(document.body.className).toBe('light-mode');

        // Change to dark mode
        toggleDarkMode();
        expect(document.body.className).toBe('dark-mode'); // Adjust according to your implementation

        // Change back to light mode
        toggleDarkMode();
        expect(document.body.className).toBe('light-mode'); // Adjust according to your implementation
    });
});
