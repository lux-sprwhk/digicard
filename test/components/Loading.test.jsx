import { render, screen } from '@testing-library/react';
import Loading from '../../src/components/Loading';

describe('Loading', () => {
  it('renders loading state with default size', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    // Check that the spinner element exists
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
  });

  it('renders loading state with small size', () => {
    render(<Loading size="sm" />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders loading state with large size', () => {
    render(<Loading size="lg" />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Loading className="custom-class" />);
    const loadingContainer = screen.getByRole('status');
    expect(loadingContainer).toHaveClass('custom-class');
  });
});
