import clsx from 'clsx';

export default function SectionHeading({ children, className }) {
  return (
    <h2 className={clsx('section-heading', 'mb-4', className)}>{children}</h2>
  );
}
