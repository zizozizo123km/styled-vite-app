import React from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable component to display an icon within a styled badge container.
 *
 * @param {object} props
 * @param {React.ElementType} props.Icon - The icon component (e.g., from Lucide or Heroicons).
 * @param {string} [props.color='bg-indigo-500'] - Tailwind background color class for the badge.
 * @param {string} [props.iconColor='text-white'] - Tailwind text color class for the icon.
 * @param {string} [props.size='md'] - Size variant ('sm', 'md', 'lg').
 * @param {string} [props.className=''] - Additional Tailwind classes for the container.
 */
const IconBadge = ({ Icon, color = 'bg-indigo-500', iconColor = 'text-white', size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'p-1.5 w-8 h-8',
    md: 'p-2 w-10 h-10',
    lg: 'p-3 w-12 h-12',
  };

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const combinedClasses = `
    ${sizeClasses[size]}
    ${color}
    rounded-full
    flex
    items-center
    justify-center
    shadow-lg
    flex-shrink-0
    ${className}
  `;

  return (
    <div className={combinedClasses}>
      {Icon && (
        <Icon
          className={`${iconColor} transition duration-150 ease-in-out`}
          size={iconSize[size]}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

IconBadge.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  color: PropTypes.string,
  iconColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default IconBadge;