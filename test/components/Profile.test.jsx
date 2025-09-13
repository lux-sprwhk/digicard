import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from '../../src/components/Profile';
import * as useContentfulHook from '../../src/hooks/useContentful';

// Mock the useContentful hook
vi.mock('../../src/hooks/useContentful');

// Mock the profile image
vi.mock('../../src/assets/profile.jpg', () => ({
  default: 'profile-image-mock-url',
}));

// Mock the DynamicIcon component
vi.mock('../../src/components/DynamicIcon', () => ({
  default: ({ iconName }) => <span data-testid="dynamic-icon">{iconName}</span>,
}));

// Mock the ProfileBio component
vi.mock('../../src/components/ProfileBio', () => ({
  BasicBio: ({ theme, bio }) => (
    <div data-testid="basic-bio" data-theme={theme}>
      {bio || 'Default bio'}
    </div>
  ),
}));

describe('Profile', () => {
  const mockProfileData = {
    name: 'Test User',
    title: 'Test Title',
    location: 'Test Location',
    profileImage: 'test-image-url',
    bio: 'Test bio content',
  };

  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    useContentfulHook.useContentful.mockReturnValue({
      data: mockProfileData,
      loading: false,
      error: null,
    });

    render(<Profile theme="dark" />);
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });

  it('renders loading state when data is loading', () => {
    useContentfulHook.useContentful.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(<Profile theme="dark" />);
    expect(screen.getByText('Loading profile...')).toBeInTheDocument();
  });

  it('renders fallback data when Contentful returns no data', () => {
    useContentfulHook.useContentful.mockReturnValue({
      data: null,
      loading: false,
      error: null,
    });

    render(<Profile theme="dark" />);
    expect(screen.getByText('Luh Sprwhk')).toBeInTheDocument();
    expect(screen.getByText('Vaporware Dealer')).toBeInTheDocument();
    expect(screen.getByText('Austin, TX')).toBeInTheDocument();
  });

  it('renders Contentful data when available', () => {
    useContentfulHook.useContentful.mockReturnValue({
      data: mockProfileData,
      loading: false,
      error: null,
    });

    render(<Profile theme="dark" />);
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Location')).toBeInTheDocument();
  });

  it('renders location with map icon', () => {
    useContentfulHook.useContentful.mockReturnValue({
      data: mockProfileData,
      loading: false,
      error: null,
    });

    render(<Profile theme="dark" />);
    expect(screen.getByText('Test Location')).toBeInTheDocument();
    expect(screen.getByTestId('dynamic-icon')).toBeInTheDocument();
  });

  it('passes bio data to ProfileBio component', () => {
    useContentfulHook.useContentful.mockReturnValue({
      data: mockProfileData,
      loading: false,
      error: null,
    });

    render(<Profile theme="dark" />);
    expect(screen.getByTestId('basic-bio')).toHaveTextContent(
      'Test bio content'
    );
  });

  it('handles Contentful errors gracefully', () => {
    useContentfulHook.useContentful.mockReturnValue({
      data: null,
      loading: false,
      error: 'Contentful error',
    });

    // Mock console.warn to avoid cluttering test output
    const consoleWarnSpy = vi
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    render(<Profile theme="dark" />);
    expect(screen.getByText('Luh Sprwhk')).toBeInTheDocument();

    // Restore console.warn
    consoleWarnSpy.mockRestore();
  });

  it('does not render profile image for web2 theme', () => {
    useContentfulHook.useContentful.mockReturnValue({
      data: mockProfileData,
      loading: false,
      error: null,
    });

    render(<Profile theme="web2" />);
    expect(screen.queryByText('Test User')).not.toBeInTheDocument();
  });

  it('renders profile image for non-web2 themes', () => {
    useContentfulHook.useContentful.mockReturnValue({
      data: mockProfileData,
      loading: false,
      error: null,
    });

    render(<Profile theme="dark" />);
    const img = screen.getByAltText('Profile');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test-image-url');
  });
});
