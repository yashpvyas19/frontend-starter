import type { Layout } from '@/types';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'danger';
}

const baseStyle = 'w-full p-3 text-white font-normal';
const variantStyle: Record<string, string> = {
  primary: '!bg-primary !text-white !rounded-full',
  danger: '!bg-transparent !text-red-500 !rounded-full !border !border-red-500',
};

const Button: Layout<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  isLoading = false,
  ...props
}) => (
  <button type="button" {...props} className={`${baseStyle} ${variantStyle[variant]} ${className}`}>
    {isLoading ? (
      <svg
        className="animate-spin h-8 w-8 text-white mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
    ) : (
      children
    )}
  </button>
);

export default Button;
