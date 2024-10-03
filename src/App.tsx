import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import queryClient from '@/config/queryClient.ts';
import router from '@/Routing.tsx';
import type { Component } from '@/types';
import { isLive } from '@/utils/index.ts';

const App: Component = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    {!isLive && <ReactQueryDevtools />}
    <ToastContainer pauseOnFocusLoss={false} hideProgressBar closeOnClick autoClose={5000} />
  </QueryClientProvider>
);

export default App;
