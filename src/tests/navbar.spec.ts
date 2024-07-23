import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header/index';

describe('navbar', () => {
  it('should render properly', () => {
    render(<Header />);

    // Replace the empty string with the actual text you expect to be in the Header
    expect(screen.getByText("Expected Text")).toBeInTheDocument();
  });
});
