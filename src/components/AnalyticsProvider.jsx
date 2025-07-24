import { useEffect } from 'react';

const AnalyticsProvider = () => {
  useEffect(() => {
    const metricoolHash = import.meta.env.VITE_METRICOOL_TRACKING_HASH;

    if (!metricoolHash) {
      console.warn(
        'Metricool tracking hash not found. Analytics will be disabled.'
      );
      return;
    }

    function loadScript(a) {
      var b = document.getElementsByTagName('head')[0],
        c = document.createElement('script');
      c.type = 'text/javascript';
      c.src = 'https://tracker.metricool.com/resources/be.js';
      c.onreadystatechange = a;
      c.onload = a;
      b.appendChild(c);
    }

    loadScript(function () {
      window.beTracker.t({
        hash: metricoolHash,
      });
    });
  }, []);

  return null; // This component does not render anything
};

export default AnalyticsProvider;
