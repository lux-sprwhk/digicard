import { renderIcon } from '../utils/iconMapper';

const DynamicIcon = ({ iconName, className, size = 16, ...props }) => {
  if (!iconName) return null;

  // Filter out non-DOM props that shouldn't be passed to SVG elements
  const { icon: _icon, ...domProps } = props;

  return renderIcon(iconName, {
    className,
    size,
    ...domProps,
  });
};

export default DynamicIcon;
