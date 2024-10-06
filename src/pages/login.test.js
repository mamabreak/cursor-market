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
        };
    };

    it('should register a new user', () => {
        const { switchToSignUp, fillInput, clickButton } = setup();

        switchToSignUp();
        fillInput('Real Name', 'Test User');
        fillInput('Email', 'test@example.com');
        fillInput('Password', 'password');
        
        clickButton('register');
        
        expect(console.log).toHaveBeenCalledWith(
          expect.stringContaining('We have a new user now:'),
          expect.any(Object) // Accept any additional data
        );
    });

    it('should log in an existing user', () => {
        const { getByText, fillInput, clickButton } = setup();

        // Switch to registration form
        fireEvent.click(getByText('Sign up'));
        fillInput('Real Name', 'Test User');
        fillInput('Email', 'test@example.com');
        fillInput('Password', 'password');
        clickButton('register');

        // Switch back to login form
        fireEvent.click(getByText('Login'));
        fillInput('Email', 'test@example.com');
        fillInput('Password', 'password');
        clickButton('login');

        // Add your assertions here (e.g., checking if logged in successfully)
    });

    it('should notify if user already exists', () => {
        const { switchToSignUp, fillInput, clickButton } = setup();

        switchToSignUp();
        fillInput('Real Name', 'Test User');
        fillInput('Email', 'test@example.com');
        fillInput('Password', 'password');
        clickButton('register');

        // Attempt to register the same user again
        fillInput('Real Name', 'Test User');
        fillInput('Email', 'test@example.com');
        fillInput('Password', 'password');
        clickButton('register');

        expect(console.log).toHaveBeenCalledWith("User already exists");
    });
});
