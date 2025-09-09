import { render, screen } from '@testing-library/react';
import SoundCloudWidget from '../../src/components/SoundCloudWidget';
import * as useContentfulHook from '../../src/hooks/useContentful';

// Mock the useContentful hook
vi.mock('../../src/hooks/useContentful');

describe('SoundCloudWidget', () => {
  const mockTrack = {
    active: true,
    title: 'Test Track',
    description: 'Test description',
    url: 'https://soundcloud.com/test/test-track',
    publishDate: '2025-01-01',
  };

  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
  });

  it('renders SoundCloud widget when data is loaded', () => {
    // Mock the hook to return loaded data
    useContentfulHook.useContentful.mockReturnValue({
      data: mockTrack,
      loading: false,
      error: null,
    });

    render(<SoundCloudWidget />);
    // Use querySelector to find iframe since it's not accessible by role
    expect(document.querySelector('iframe')).toBeInTheDocument();
    expect(screen.getByText('Test Track')).toBeInTheDocument();
  });

  it('renders loading state when data is loading', () => {
    // Mock the hook to return loading state
    useContentfulHook.useContentful.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(<SoundCloudWidget />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
