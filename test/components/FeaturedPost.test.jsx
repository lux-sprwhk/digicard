import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturedPost from '../../src/components/FeaturedPost';
import * as useBeeHiivHook from '../../src/hooks/useBeeHiiv';
import * as useContentfulHook from '../../src/hooks/useContentful';

vi.mock('../../src/hooks/useBeeHiiv');
vi.mock('../../src/hooks/useContentful');

describe('FeaturedPost', () => {
  const mockSettings = { blogArchiveUrl: 'https://example.com/blog' };

  beforeEach(() => {
    // Mock useContentful for settings
    useContentfulHook.useContentful.mockReturnValue({
      data: mockSettings,
      loading: false,
      error: null,
    });
  });

  it('renders without crashing', () => {
    useBeeHiivHook.useBeeHiiv.mockReturnValue({
      post: null,
      loading: false,
      fallbackPost: null,
    });
    render(<FeaturedPost theme="web2" />);
  });

  it('renders loading state when data is loading', () => {
    // Override the beforeEach mock to simulate settings loading
    useContentfulHook.useContentful.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    useBeeHiivHook.useBeeHiiv.mockReturnValue({
      post: null,
      loading: true,
      fallbackPost: null,
    });
    render(<FeaturedPost theme="dark" />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders fallback post when data is not loaded', () => {
    useBeeHiivHook.useBeeHiiv.mockReturnValue({
      post: null,
      loading: false,
      fallbackPost: null,
    });
    render(<FeaturedPost theme="light" />);
    expect(screen.getByText('Latest Post')).toBeInTheDocument();
  });

  it('renders bee post when data is loaded', () => {
    useBeeHiivHook.useBeeHiiv.mockReturnValue({
      post: {
        title: 'Test Title',
        description: 'Test description',
        url: 'https://example.com',
      },
      loading: false,
      fallbackPost: null,
    });
    render(<FeaturedPost theme="dark" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});
