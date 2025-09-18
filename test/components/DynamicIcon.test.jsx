import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DynamicIcon from '../../src/components/DynamicIcon';
import * as iconMapper from '../../src/utils/iconMapper';

// Mock the react-icons to avoid importing actual icon libraries in tests
vi.mock('react-icons/fa', () => ({
  FaGithub: ({ className, size, ...props }) => (
    <svg
      data-testid="FaGithub"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <title>GitHub Icon</title>
    </svg>
  ),
  FaLinkedin: ({ className, size, ...props }) => (
    <svg
      data-testid="FaLinkedin"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <title>LinkedIn Icon</title>
    </svg>
  ),
  FaTwitter: ({ className, size, ...props }) => (
    <svg
      data-testid="FaTwitter"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <title>Twitter Icon</title>
    </svg>
  ),
  FaYoutube: ({ className, size, ...props }) => (
    <svg
      data-testid="FaYoutube"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <title>YouTube Icon</title>
    </svg>
  ),
  FaMapMarkerAlt: ({ className, size, ...props }) => (
    <svg
      data-testid="FaMapMarkerAlt"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <title>Map Marker Icon</title>
    </svg>
  ),
  FaArrowRight: ({ className, size, ...props }) => (
    <svg
      data-testid="FaArrowRight"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <title>Arrow Right Icon</title>
    </svg>
  ),
  FaExternalLinkAlt: ({ className, size, ...props }) => (
    <svg
      data-testid="FaExternalLinkAlt"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <title>External Link Icon</title>
    </svg>
  ),
  FaDownload: ({ className, size, ...props }) => (
    <svg
      data-testid="FaDownload"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <title>Download Icon</title>
    </svg>
  ),
  FaPlay: ({ className, size, ...props }) => (
    <svg
      data-testid="FaPlay"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <title>Play Icon</title>
    </svg>
  ),
  FaTerminal: ({ className, size, ...props }) => (
    <svg
      data-testid="FaTerminal"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <title>Terminal Icon</title>
    </svg>
  ),
  FaRssSquare: ({ className, size, ...props }) => (
    <svg
      data-testid="FaRssSquare"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <title>RSS Icon</title>
    </svg>
  ),
}));

vi.mock('react-icons/fa6', () => ({
  FaThreads: ({ className, size, ...props }) => (
    <svg
      data-testid="FaThreads"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <title>Threads Icon</title>
    </svg>
  ),
}));

describe('DynamicIcon', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset console.warn mock
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    console.warn.mockRestore();
  });

  describe('basic rendering', () => {
    it('renders an icon when given a valid iconName', () => {
      const { container } = render(<DynamicIcon iconName="FaGithub" />);

      const icon = container.querySelector('[data-testid="FaGithub"]');
      expect(icon).toBeInTheDocument();
      expect(icon.tagName).toBe('svg');
    });

    it('returns null when iconName is not provided', () => {
      const { container } = render(<DynamicIcon />);
      expect(container.firstChild).toBeNull();
    });

    it('returns null when iconName is null', () => {
      const { container } = render(<DynamicIcon iconName={null} />);
      expect(container.firstChild).toBeNull();
    });

    it('returns null when iconName is empty string', () => {
      const { container } = render(<DynamicIcon iconName="" />);
      expect(container.firstChild).toBeNull();
    });

    it('returns null when iconName is undefined', () => {
      const { container } = render(<DynamicIcon iconName={undefined} />);
      expect(container.firstChild).toBeNull();
    });
  });

  describe('icon rendering with different icons', () => {
    const validIcons = [
      'FaGithub',
      'FaLinkedin',
      'FaTwitter',
      'FaYoutube',
      'FaTerminal',
      'FaMapMarkerAlt',
      'FaArrowRight',
      'FaExternalLinkAlt',
      'FaDownload',
      'FaPlay',
      'FaRssSquare',
      'FaThreads',
    ];

    validIcons.forEach(iconName => {
      it(`renders ${iconName} correctly`, () => {
        const { container } = render(<DynamicIcon iconName={iconName} />);

        const icon = container.querySelector(`[data-testid="${iconName}"]`);
        expect(icon).toBeInTheDocument();
        expect(icon.tagName).toBe('svg');
      });
    });
  });

  describe('props handling', () => {
    it('applies className prop correctly', () => {
      const className = 'custom-icon-class';
      const { container } = render(
        <DynamicIcon iconName="FaGithub" className={className} />
      );

      const icon = container.querySelector('[data-testid="FaGithub"]');
      expect(icon).toHaveClass(className);
    });

    it('applies size prop correctly', () => {
      const size = 32;
      const { container } = render(
        <DynamicIcon iconName="FaGithub" size={size} />
      );

      const icon = container.querySelector('[data-testid="FaGithub"]');
      expect(icon).toHaveAttribute('width', size.toString());
      expect(icon).toHaveAttribute('height', size.toString());
    });

    it('uses default size of 16 when size not provided', () => {
      const { container } = render(<DynamicIcon iconName="FaGithub" />);

      const icon = container.querySelector('[data-testid="FaGithub"]');
      expect(icon).toHaveAttribute('width', '16');
      expect(icon).toHaveAttribute('height', '16');
    });

    it('passes through DOM props to the icon', () => {
      const { container } = render(
        <DynamicIcon
          iconName="FaGithub"
          data-custom="test-value"
          aria-label="GitHub Icon"
          title="GitHub"
        />
      );

      const icon = container.querySelector('[data-testid="FaGithub"]');
      expect(icon).toHaveAttribute('data-custom', 'test-value');
      expect(icon).toHaveAttribute('aria-label', 'GitHub Icon');
      expect(icon).toHaveAttribute('title', 'GitHub');
    });

    it('filters out non-DOM props like icon', () => {
      const { container } = render(
        <DynamicIcon iconName="FaGithub" icon="should-be-filtered" />
      );

      const icon = container.querySelector('[data-testid="FaGithub"]');
      expect(icon).not.toHaveAttribute('icon');
    });

    it('applies multiple props together correctly', () => {
      const className = 'test-class';
      const size = 24;
      const { container } = render(
        <DynamicIcon
          iconName="FaLinkedin"
          className={className}
          size={size}
          data-test="multiple-props"
        />
      );

      const icon = container.querySelector('[data-testid="FaLinkedin"]');
      expect(icon).toHaveClass(className);
      expect(icon).toHaveAttribute('width', size.toString());
      expect(icon).toHaveAttribute('height', size.toString());
      expect(icon).toHaveAttribute('data-test', 'multiple-props');
    });
  });

  describe('error handling and edge cases', () => {
    it('handles invalid iconName gracefully', () => {
      const { container } = render(<DynamicIcon iconName="InvalidIcon" />);

      expect(container.firstChild).toBeNull();
      expect(console.warn).toHaveBeenCalledWith(
        'Icon "InvalidIcon" not found in icon map'
      );
    });

    it('handles non-string iconName', () => {
      const { container } = render(<DynamicIcon iconName={123} />);

      expect(container.firstChild).toBeNull();
      expect(console.warn).toHaveBeenCalledWith(
        'Icon "123" not found in icon map'
      );
    });

    it('handles object as iconName', () => {
      const { container } = render(<DynamicIcon iconName={{}} />);

      expect(container.firstChild).toBeNull();
      expect(console.warn).toHaveBeenCalledWith(
        'Icon "[object Object]" not found in icon map'
      );
    });

    it('handles zero as size', () => {
      const { container } = render(
        <DynamicIcon iconName="FaGithub" size={0} />
      );

      const icon = container.querySelector('[data-testid="FaGithub"]');
      expect(icon).toHaveAttribute('width', '0');
      expect(icon).toHaveAttribute('height', '0');
    });

    it('handles string size', () => {
      const { container } = render(
        <DynamicIcon iconName="FaGithub" size="32" />
      );

      const icon = container.querySelector('[data-testid="FaGithub"]');
      expect(icon).toHaveAttribute('width', '32');
      expect(icon).toHaveAttribute('height', '32');
    });
  });

  describe('integration with iconMapper utility', () => {
    it('calls renderIcon from iconMapper with correct arguments', () => {
      const renderIconSpy = vi.spyOn(iconMapper, 'renderIcon');
      const props = {
        className: 'test-class',
        size: 20,
        'data-test': 'value',
      };

      render(<DynamicIcon iconName="FaGithub" {...props} />);

      expect(renderIconSpy).toHaveBeenCalledWith('FaGithub', props);
    });

    it('passes filtered props to renderIcon', () => {
      const renderIconSpy = vi.spyOn(iconMapper, 'renderIcon');

      render(
        <DynamicIcon
          iconName="FaTwitter"
          className="test"
          size={18}
          icon="should-be-filtered"
          data-valid="keep-this"
        />
      );

      expect(renderIconSpy).toHaveBeenCalledWith('FaTwitter', {
        className: 'test',
        size: 18,
        'data-valid': 'keep-this',
        // Note: 'icon' prop should be filtered out
      });

      const callArgs = renderIconSpy.mock.calls[0][1];
      expect(callArgs).not.toHaveProperty('icon');
    });
  });

  describe('accessibility', () => {
    it('allows aria-* attributes to be passed through', () => {
      const { container } = render(
        <DynamicIcon
          iconName="FaGithub"
          aria-label="GitHub profile link"
          aria-hidden="false"
        />
      );

      const icon = container.querySelector('[data-testid="FaGithub"]');
      expect(icon).toHaveAttribute('aria-label', 'GitHub profile link');
      expect(icon).toHaveAttribute('aria-hidden', 'false');
    });

    it('allows role attribute to be passed through', () => {
      const { container } = render(
        <DynamicIcon iconName="FaGithub" role="img" />
      );

      const icon = container.querySelector('[data-testid="FaGithub"]');
      expect(icon).toHaveAttribute('role', 'img');
    });

    it('allows title attribute for tooltip', () => {
      const { container } = render(
        <DynamicIcon iconName="FaGithub" title="GitHub Repository" />
      );

      const icon = container.querySelector('[data-testid="FaGithub"]');
      expect(icon).toHaveAttribute('title', 'GitHub Repository');
    });
  });

  describe('performance considerations', () => {
    it('does not re-render unnecessarily with same props', () => {
      const renderIconSpy = vi.spyOn(iconMapper, 'renderIcon');

      const { rerender } = render(
        <DynamicIcon iconName="FaGithub" size={16} />
      );
      expect(renderIconSpy).toHaveBeenCalledTimes(1);

      // Re-render with same props
      rerender(<DynamicIcon iconName="FaGithub" size={16} />);
      expect(renderIconSpy).toHaveBeenCalledTimes(2); // Component doesn't memoize, so it renders again
    });

    it('handles rapid prop changes', () => {
      const { rerender } = render(<DynamicIcon iconName="FaGithub" />);

      // Rapidly change props
      rerender(<DynamicIcon iconName="FaLinkedin" />);
      rerender(<DynamicIcon iconName="FaTwitter" />);
      rerender(<DynamicIcon iconName="FaGithub" />);

      // Should not crash and final render should show correct icon
      expect(
        document.querySelector('[data-testid="FaGithub"]')
      ).toBeInTheDocument();
    });
  });

  describe('console warnings', () => {
    it('warns exactly once for unknown icon', () => {
      render(<DynamicIcon iconName="UnknownIcon" />);

      expect(console.warn).toHaveBeenCalledTimes(1);
      expect(console.warn).toHaveBeenCalledWith(
        'Icon "UnknownIcon" not found in icon map'
      );
    });

    it('does not warn for valid icons', () => {
      render(<DynamicIcon iconName="FaGithub" />);

      expect(console.warn).not.toHaveBeenCalled();
    });
  });
});
