import { Fragment } from 'react/jsx-runtime';

import type { Component } from '@/types';
import type { InputHTMLAttributes } from 'react';
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  register: UseFormRegisterReturn; // Assuming we're using react-hook-form
  name: string;
  error?: FieldError | undefined;
  variant?: 'default' | 'outlined' | 'filled';
}

const baseStyle = 'w-full p-4 pl-4 pr-10 border rounded-lg';
const variantStyle: Record<string, string> = {
  default: 'bg-input border border-inputBorder placeholder-custom-gray',
  outlined: 'border border-gray-300 placeholder-custom-gray',
  filled: 'bg-gray-100 placeholder-custom-gray',
};

const InputField: Component<InputFieldProps> = ({
  type,
  icon,
  register,
  error,
  variant = 'default',
  ...props
}) => (
  <Fragment>
    <div className="relative my-3 w-full">
      <div className="flex items-center">
        <input
          type={type}
          {...register}
          className={`flex-1 ${baseStyle} ${variantStyle[variant]} ${type === 'tel' && '!pl-12'}`}
          {...props}
        />
        {type === 'tel' && (
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black-500">
            +1
          </span>
        )}

        {icon && (
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <img src={icon} alt="Input field Icon" className="w-6 h-6" />
          </span>
        )}
      </div>
    </div>
    {error && <p className="text-red-500 text-left text-sm my-2">{error.message}</p>}
  </Fragment>
);

export default InputField;
