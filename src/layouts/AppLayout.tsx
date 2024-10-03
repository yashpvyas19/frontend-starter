import { Outlet } from 'react-router-dom';

import type { Component } from '@/types';

const AppLayout: Component = () => (
  <div className="flex flex-col min-h-screen">
    <div className="flex flex-1 bg-appBackground">
      <main>
        <Outlet />
      </main>
    </div>
  </div>
);

export default AppLayout;
