import React, { useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark relative">
      {/* ===== Page Wrapper Start ===== */}
      <div className="flex flex-col h-screen">
        {/* ===== Header Start ===== */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* ===== Header End ===== */}

        {/* ===== Main Content Wrapper Start ===== */}
        <div className="flex flex-1 overflow-hidden">
          {/* ===== Sidebar Start ===== */}
          <div className=" h-full">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </div>
          {/* ===== Sidebar End ===== */}

          {/* ===== Content Area Start ===== */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden px-5 py-5 lg:px-8">
            <main>
              <div className="mx-auto max-w-screen-2xl">{children}</div>
            </main>
          </div>
          {/* ===== Content Area End ===== */}
        </div>
        {/* ===== Main Content Wrapper End ===== */}
      </div>
      {/* ===== Page Wrapper End ===== */}
    </div>
  );
};

export default DefaultLayout;
