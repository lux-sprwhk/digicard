import { useEffect } from 'react';

/**
 * @component AnalyticsProvider
 * @description A component that injects the Metricool analytics script into the application.
 * It is designed to be modular and efficient, loading the script only when needed.
 *
 * @returns {null} This component does not render any visible UI.
 */
const AnalyticsProvider = () => {
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log('Analytics disabled in development mode.');
      return;
    }
    const metricoolHash = import.meta.env.VITE_METRICOOL_TRACKING_HASH;

    if (!metricoolHash) {
      console.warn(
        'Metricool tracking hash not found. Analytics will be disabled.'
      );
      return;
    }

    /**
     * @function initMetricool
     * @description Initializes the Metricool tracking script. It checks for an existing script,
     * creates a new one if necessary, and configures it to load asynchronously.
     */
    const initMetricool = () => {
      // 1. Check if script is already loaded to prevent duplicates
      if (document.querySelector('#metricool-tracker')) {
        return;
      }

      const loadScript = callback => {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'metricool-tracker'; // Add id to check for existence
        script.src = 'https://tracker.metricool.com/resources/be.js';
        script.async = true; // 2. Add async attribute
        script.onload = callback; // onload is sufficient for modern browsers
        head.appendChild(script);
      };

      loadScript(() => {
        if (window.beTracker && typeof window.beTracker.t === 'function') {
          window.beTracker.t({
            hash: metricoolHash,
          });
        }
      });
    };

    // 3. Load only after first user interaction
    const events = ['scroll', 'mousemove', 'touchstart'];
    const handleInteraction = () => {
      initMetricool();
      // Remove listeners after first interaction to be safe
      events.forEach(event =>
        window.removeEventListener(event, handleInteraction)
      );
    };

    events.forEach(event => {
      window.addEventListener(event, handleInteraction, { once: true });
    });

    // Cleanup function to remove listeners if component unmounts before interaction
    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  return null; // This component does not render anything
};

export default AnalyticsProvider;
