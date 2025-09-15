import React from 'react';
import { render, screen } from '@testing-library/react';
import MatrixHint from '../../src/components/MatrixHint';

describe('MatrixHint', () => {
  it('renders without crashing', () => {
    render(<MatrixHint>Test Content</MatrixHint>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders children content correctly', () => {
    render(<MatrixHint>Matrix Hint Text</MatrixHint>);
    expect(screen.getByText('Matrix Hint Text')).toBeInTheDocument();
  });

  it('applies the correct CSS classes', () => {
    render(<MatrixHint>Hint</MatrixHint>);
    const hintElement = screen.getByText('Hint');
    expect(hintElement).toHaveClass('inline-block');
    expect(hintElement).toHaveClass('animate-pulse');
    expect(hintElement).toHaveClass('hover:animate-bounce');
    expect(hintElement).toHaveClass('transition-all');
    expect(hintElement).toHaveClass('duration-300');
    expect(hintElement).toHaveClass('cursor-pointer');
  });

  it('renders as a span element', () => {
    render(<MatrixHint>Hint</MatrixHint>);
    const hintElement = screen.getByText('Hint');
    expect(hintElement.tagName).toBe('SPAN');
  });
});
