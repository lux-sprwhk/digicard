import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
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

  it('shows tooltip on hover', () => {
    render(<MatrixHint>Hint</MatrixHint>);
    const hintElement = screen.getByText('Hint');

    // Initially, tooltip should not be visible
    expect(
      screen.queryByText("Seek the console's hidden path...")
    ).not.toBeInTheDocument();

    // Simulate mouse enter
    fireEvent.mouseEnter(hintElement);

    // Tooltip should now be visible
    expect(
      screen.getByText("Seek the console's hidden path...")
    ).toBeInTheDocument();

    // Simulate mouse leave
    fireEvent.mouseLeave(hintElement);

    // Tooltip should no longer be visible
    expect(
      screen.queryByText("Seek the console's hidden path...")
    ).not.toBeInTheDocument();
  });

  it('has correct tooltip text', () => {
    render(<MatrixHint>Hint</MatrixHint>);
    const hintElement = screen.getByText('Hint');

    fireEvent.mouseEnter(hintElement);

    const tooltip = screen.getByText("Seek the console's hidden path...");
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveClass('absolute');
    expect(tooltip).toHaveClass('bg-black');
    expect(tooltip).toHaveClass('text-white');
    expect(tooltip).toHaveClass('text-xs');
    expect(tooltip).toHaveClass('rounded');
  });
});
