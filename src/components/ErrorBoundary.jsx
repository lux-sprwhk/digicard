import { Component } from 'react';
import clsx from 'clsx';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const { fallback: Fallback, theme } = this.props;

      if (Fallback) {
        return <Fallback error={this.state.error} theme={theme} />;
      }

      return (
        <div
          className={clsx(
            'p-4 border rounded-lg',
            'bg-red-50 border-red-200 text-red-800',
            'dark:bg-red-900/20 dark:border-red-800 dark:text-red-200',
            'matrix:bg-matrix-terminal matrix:border-red-500 matrix:text-red-400',
            'web2:bg-red-100 web2:border-red-300 web2:text-red-700'
          )}
        >
          <h3 className="font-semibold mb-2">Something went wrong</h3>
          <p className="text-sm">
            Unable to load this content. Please try refreshing the page.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
