import clsx from 'clsx';

const Loading = ({ size = 'md', className }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const wrapperSizeClasses = {
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
  };

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center',
        wrapperSizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <div
        className={clsx(
          'border-4 border-solid border-gray-300 border-t-transparent rounded-full',
          'animate-spin',
          sizeClasses[size],
          'dark:border-dracula-comment dark:border-t-transparent',
          'matrix:border-matrix-green matrix:border-t-transparent',
          'web2:border-web2-border web2:border-t-transparent'
        )}
      />
      <span
        className={clsx(
          'mt-2 text-sm font-medium',
          'text-github-text dark:text-dracula-purple',
          'matrix:text-matrix-green',
          'web2:text-web2-text',
          size === 'sm' && 'text-xs',
          size === 'lg' && 'text-base'
        )}
      >
        Loading...
      </span>
    </div>
  );
};

export default Loading;
