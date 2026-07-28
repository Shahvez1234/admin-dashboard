import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Area */}
      <div className="min-h-screen lg:ml-72">
        {/* Navbar */}
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />

        {/* Current Page */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;