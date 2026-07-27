import { useState } from "react";
import {
  Menu,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

function Navbar({ setIsSidebarOpen }) {
  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="flex h-20 items-center justify-between px-6 lg:px-8">

        {/* Left */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => setIsSidebarOpen(true)}
            className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 lg:hidden"
          >
            <Menu size={24} />
          </button>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Dashboard
            </h2>

            <p className="hidden text-sm text-slate-500 sm:block">
              Overview of your account
            </p>
          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <div className="relative hidden md:block">

            <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
              <Search
                size={18}
                className="text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-40 bg-transparent px-2 text-sm text-slate-700 outline-none placeholder:text-slate-400 lg:w-56"
              />
            </div>

            {/* Search Result */}
            {search && (
              <div className="absolute right-0 top-14 z-50 w-64 rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
                <p className="text-xs font-medium text-slate-400">
                  SEARCHING FOR
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  "{search}"
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  Search functionality will be connected to real data later.
                </p>
              </div>
            )}

          </div>

          {/* Notifications */}
          <div className="relative">

            <button
              onClick={() =>
                setShowNotifications(!showNotifications)
              }
              className="relative rounded-xl p-2.5 text-slate-600 transition hover:bg-slate-100"
            >
              <Bell size={21} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 top-14 z-50 w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">

                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">
                    Notifications
                  </h3>

                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                    3 New
                  </span>
                </div>

                <div className="mt-4 space-y-3">

                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-sm font-semibold text-slate-800">
                      New user registered
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      5 minutes ago
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-sm font-semibold text-slate-800">
                      Order #ORD-1024 completed
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      20 minutes ago
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-sm font-semibold text-slate-800">
                      New project created
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      1 hour ago
                    </p>
                  </div>

                </div>

                <button className="mt-4 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
                  View All Notifications
                </button>

              </div>
            )}

          </div>

          {/* Divider */}
          <div className="hidden h-8 w-px bg-slate-200 sm:block" />

          {/* Profile */}
          <button className="flex items-center gap-3 rounded-xl p-1.5 transition hover:bg-slate-100">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
              SA
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-slate-900">
                Shahvez Ansari
              </p>

              <p className="text-xs text-slate-500">
                Administrator
              </p>
            </div>

            <ChevronDown
              size={17}
              className="hidden text-slate-400 sm:block"
            />

          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;