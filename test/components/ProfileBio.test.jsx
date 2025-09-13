import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicBio, TypewriterBio } from '../../src/components/ProfileBio';

// Mock react-typed to avoid issues with the typing animation in tests
vi.mock('react-typed', () => ({
  ReactTyped: ({ strings, showCursor, className }) => (
    <div data-testid="react-typed-mock" className={className}>
      {strings[0]}
      {showCursor && <span className="typed-cursor">|</span>}
    </div>
  ),
}));

describe('ProfileBio', () => {
  const normalBio =
    'Web dev since the Flash days, now building digital experiences and making AI-powered art';
  const matrixBio =
    'Welcome to the Matrix, hacker. Reality is what you make it.';
  const customBio = 'This is a custom bio for testing';

  describe('BasicBio', () => {
    it('renders without crashing', () => {
      render(<BasicBio theme="dark" />);
      expect(screen.getByText(normalBio)).toBeInTheDocument();
    });

    it('displays normal bio for dark theme', () => {
      render(<BasicBio theme="dark" />);
      expect(screen.getByText(normalBio)).toBeInTheDocument();
    });

    it('displays matrix bio for matrix theme', () => {
      render(<BasicBio theme="matrix" />);
      expect(screen.getByText(matrixBio)).toBeInTheDocument();
    });

    it('displays custom bio when provided', () => {
      render(<BasicBio theme="dark" bio={customBio} />);
      expect(screen.getByText(customBio)).toBeInTheDocument();
      expect(screen.queryByText(normalBio)).not.toBeInTheDocument();
    });

    it('displays custom bio even for matrix theme', () => {
      render(<BasicBio theme="matrix" bio={customBio} />);
      expect(screen.getByText(customBio)).toBeInTheDocument();
      expect(screen.queryByText(matrixBio)).not.toBeInTheDocument();
    });

    it('applies correct CSS classes', () => {
      render(<BasicBio theme="dark" />);
      const bioElement = screen.getByText(normalBio);
      expect(bioElement).toHaveClass('text-lg', 'font-mono', 'min-h-[2em]');
    });

    it('applies web2 specific classes for web2 theme', () => {
      render(<BasicBio theme="web2" />);
      const bioElement = screen.getByText(normalBio);
      expect(bioElement).toHaveClass(
        'web2:text-4xl',
        'web2:text-web2-secondary',
        'web2:font-web2Heading'
      );
    });

    it('applies matrix specific classes for matrix theme', () => {
      render(<BasicBio theme="matrix" />);
      const bioElement = screen.getByText(matrixBio);
      expect(bioElement).toHaveClass('matrix:text-matrix-glow');
    });
  });

  describe('TypewriterBio', () => {
    it('renders without crashing', () => {
      render(<TypewriterBio theme="dark" />);
      expect(screen.getByText(normalBio)).toBeInTheDocument();
    });

    it('displays normal bio for dark theme', () => {
      render(<TypewriterBio theme="dark" />);
      expect(screen.getByText(normalBio)).toBeInTheDocument();
    });

    it('displays matrix bio for matrix theme', () => {
      render(<TypewriterBio theme="matrix" />);
      expect(screen.getByText(matrixBio)).toBeInTheDocument();
    });

    it('displays custom bio when provided', () => {
      render(<TypewriterBio theme="dark" bio={customBio} />);
      expect(screen.getByText(customBio)).toBeInTheDocument();
      expect(screen.queryByText(normalBio)).not.toBeInTheDocument();
    });

    it('displays custom bio even for matrix theme', () => {
      render(<TypewriterBio theme="matrix" bio={customBio} />);
      expect(screen.getByText(customBio)).toBeInTheDocument();
      expect(screen.queryByText(matrixBio)).not.toBeInTheDocument();
    });

    it('applies correct CSS classes', () => {
      render(<TypewriterBio theme="dark" />);
      const bioElement = screen.getByText(normalBio);
      expect(bioElement).toHaveClass('text-lg', 'font-mono', 'min-h-[2em]');
    });

    it('applies matrix specific classes for matrix theme', () => {
      render(<TypewriterBio theme="matrix" />);
      const bioElement = screen.getByText(matrixBio);
      expect(bioElement).toHaveClass('matrix:text-matrix-glow');
    });

    it('shows cursor by default', () => {
      render(<TypewriterBio theme="dark" />);
      expect(screen.getByText('|')).toBeInTheDocument();
    });
  });
});
