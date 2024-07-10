import { render, screen } from '@testing-library/react';
import SimpleCounter from './SimpleCounter';
import { it } from 'vitest';


//smoke test
it('renders SimpleCounter component', () => {
    render(<SimpleCounter />)
});

//snapshot test
it('should match snapshot', () => {
    const { asFragment } = render(<SimpleCounter />)
    expect(asFragment()).toMatchSnapshot()
});