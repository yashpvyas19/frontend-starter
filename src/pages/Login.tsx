import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

import { ROUTES } from '@/constants/index.ts';
import Button from '@/shared/Button.tsx';
import InputField from '@/shared/InputField.tsx';
import type { Component } from '@/types';

const schema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().default(false),
});

type LoginFormInputs = z.infer<typeof schema>;

const Login: Component = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    console.log(data);
  };
  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md absolute top-36 z-10">
        <h2 className="text-3xl font-tebal font-normal mb-2 text-center">Welcome!</h2>
        <p className="text-center text-gray-500 mb-4">Login into your account</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            placeholder="Email Address"
            type="email"
            register={register('email')}
            name="email"
            error={errors.email}
          />
          <InputField
            placeholder="Password"
            type="password"
            register={register('password')}
            name="password"
            error={errors.password}
          />

          <Button type="submit">Login</Button>
          <div className="flex items-center justify-center mt-4">
            <span className="border-t w-1/4" />
            <span className="px-2 font-normal">OR</span>
            <span className="border-t w-1/4" />
          </div>

          <p className="text-center font-normal mt-4">
            Don’t have an account?{' '}
            <Link to={`/${ROUTES.REGISTER}`} className="text-register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
