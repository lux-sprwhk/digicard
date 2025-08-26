import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaArrowRight,
  FaExternalLinkAlt,
  FaDownload,
  FaPlay,
  FaTerminal,
  FaRssSquare,
} from 'react-icons/fa';

import { FaThreads } from 'react-icons/fa6';

// No SimpleIcons currently used

// Icon mapping object
const iconMap = {
  // FontAwesome icons
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaArrowRight,
  FaExternalLinkAlt,
  FaDownload,
  FaPlay,
  FaTerminal,
  FaRssSquare,

  // FontAwesome 6
  FaThreads,
};

export const getIcon = iconName => {
  return iconMap[iconName] || null;
};

export const renderIcon = (iconName, props = {}) => {
  const IconComponent = getIcon(iconName);
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in icon map`);
    return null;
  }
  return <IconComponent {...props} />;
};

export const getAvailableIcons = () => {
  return Object.keys(iconMap);
};
