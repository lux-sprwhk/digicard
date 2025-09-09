import { render, screen } from '@testing-library/react';
import SectionHeading from '../../components/SectionHeading';

describe('SectionHeading', () => {
  it('renders children text', () => {
    render(<SectionHeading>Test Heading</SectionHeading>);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('renders as h2 element', () => {
    render(<SectionHeading>Test Heading</SectionHeading>);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<SectionHeading>Test Heading</SectionHeading>);
    const heading = screen.getByText('Test Heading');
    expect(heading).toHaveClass('section-heading', 'mb-4');
  });

  it('applies additional className when provided', () => {
    render(
      <SectionHeading className="custom-class">Test Heading</SectionHeading>
    );
    const heading = screen.getByText('Test Heading');
    expect(heading).toHaveClass('section-heading', 'mb-4', 'custom-class');
  });

  it('works without additional className', () => {
    render(<SectionHeading>Test Heading</SectionHeading>);
    const heading = screen.getByText('Test Heading');
    expect(heading).toHaveClass('section-heading', 'mb-4');
  });
});
