import { ReactTyped } from 'react-typed';
import { useState, useEffect } from 'react';

const normalBio =
  'Web dev since the Flash days, now building digital experiences and making AI-powered art';
const matrixBio = 'Welcome to the Matrix, hacker. Reality is what you make it.';

const BasicBio = ({ theme, bio }) => {
  // Use provided bio or fall back to default
  const displayBio = bio || (theme === 'matrix' ? matrixBio : normalBio);

  return (
    <p
      className="text-lg font-mono min-h-[2em] 
        web2:text-4xl 
        web2:text-web2-secondary matrix:text-matrix-glow w-full
        web2:font-web2Heading"
    >
      {displayBio}
    </p>
  );
};

const TypewriterBio = ({ theme, bio }) => {
  const [hideCursor, setHideCursor] = useState(false);

  // Use provided bio or fall back to default
  const displayBio = bio || (theme === 'matrix' ? matrixBio : normalBio);

  useEffect(() => {
    setHideCursor(false);
  }, []);

  return (
    <span className={hideCursor ? 'typed-cursor-hidden' : ''}>
      <ReactTyped
        strings={[displayBio]}
        typeSpeed={45}
        showCursor={true}
        className="text-lg font-mono min-h-[2em] matrix:text-matrix-glow w-full"
        onComplete={() => setHideCursor(true)}
      />
    </span>
  );
};

export { BasicBio, TypewriterBio };
