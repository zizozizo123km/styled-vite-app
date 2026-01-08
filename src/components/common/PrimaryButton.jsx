import React from 'react';
import PropTypes from 'prop-types';

/**
 * A primary action button component styled with Tailwind CSS.
 * It features a vibrant indigo color, smooth transitions, and accessibility focus rings.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The content inside the button.
 * @param {function} [props.onClick] - Handler for the click event.
 * @param {'button' | 'submit' | 'reset'} [props.type] - The button type attribute. Defaults to 'button'.
 * @param {string} [props.className] - Additional Tailwind classes to merge.
 * @param {boolean} [props.disabled] - Whether the button is disabled.
 * @param {object} [props] - Additional standard button attributes.
 */
const PrimaryButton = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center 
    rounded-lg 
    border border-transparent 
    bg-indigo-600 
    px-6 py-3 
    text-base font-semibold text-white 
    shadow-lg 
    transition duration-300 ease-in-out 
    hover:bg-indigo-700 
    focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default PrimaryButton;