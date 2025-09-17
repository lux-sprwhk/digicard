import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from '../../src/components/Profile';

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
  it('renders profile with static data for non-web2 themes', () => {
    render(<Profile theme="dark" />);

    // Check for static data
    expect(screen.getByText('Luh Sprwhk')).toBeInTheDocument();
    expect(
      screen.getByText('Creative Dev && Vaporware Dealer')
    ).toBeInTheDocument();
    expect(screen.getByText('Austin, TX')).toBeInTheDocument();

    // Check for profile image
    const img = screen.getByAltText('Profile');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'profile-image-mock-url');

    // Check for location icon
    expect(screen.getByTestId('dynamic-icon')).toBeInTheDocument();

    // Check that bio is passed correctly
    expect(screen.getByTestId('basic-bio')).toHaveTextContent(
      'Web dev since the Flash days, now building digital experiences and making AI-powered art'
    );
  });

  it('does not render profile details for web2 theme', () => {
    render(<Profile theme="web2" />);

    // Profile details should not be visible for web2 theme
    expect(screen.queryByText('Luh Sprwhk')).not.toBeInTheDocument();
    expect(
      screen.queryByText('Creative Dev && Vaporware Dealer')
    ).not.toBeInTheDocument();
    expect(screen.queryByText('Austin, TX')).not.toBeInTheDocument();
    expect(screen.queryByAltText('Profile')).not.toBeInTheDocument();
  });

  it('renders the BasicBio component for all themes', () => {
    // Test with a non-web2 theme
    const { rerender } = render(<Profile theme="dark" />);
    expect(screen.getByTestId('basic-bio')).toBeInTheDocument();
    expect(screen.getByTestId('basic-bio')).toHaveAttribute(
      'data-theme',
      'dark'
    );

    // Test with web2 theme
    rerender(<Profile theme="web2" />);
    expect(screen.getByTestId('basic-bio')).toBeInTheDocument();
    expect(screen.getByTestId('basic-bio')).toHaveAttribute(
      'data-theme',
      'web2'
    );
  });
});
