import { render, screen } from '@testing-library/react';
import Loading from '../../src/components/Loading';

describe('Loading', () => {
  it('renders loading state', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
