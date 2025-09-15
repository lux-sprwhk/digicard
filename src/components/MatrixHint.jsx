function MatrixHint({ children }) {
  return (
    <span className="inline-block animate-pulse hover:animate-bounce transition-all duration-300 cursor-pointer">
      {children}
    </span>
  );
}

export default MatrixHint;
