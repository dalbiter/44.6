import { render, screen } from '@testing-library/react';
import App from './App';
import { it } from 'vitest';

describe('A truthy statement', () => {
    it('should be equal to 2', () => {
        expect(1+1).toEqual(2)
    });
});

it('renders the App component', () => {
    render(<App />)
})