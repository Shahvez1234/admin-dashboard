import StatCard from "../components/StatCard";
import AnalyticsChart from "../components/AnalyticsChart";
import RecentOrders from "../components/RecentOrders";
import ProfileCard from "../components/ProfileCard";
import Notifications from "../components/Notifications";

import { stats } from "../data/dashboardData";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Dashboard Content */}
      <div className="p-4 sm:p-6 lg:p-8">

        {/* Page Heading */}
        <div className="animate-fade-up">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <StatCard
                title={stat.title}
                value={stat.value}
                change={stat.change}
                icon={stat.icon}
                positive={stat.positive}
              />
            </div>
          ))}

        </div>

        {/* Revenue Analytics */}
        <section
          className="mt-6 animate-fade-up sm:mt-8"
          style={{
            animationDelay: "400ms",
          }}
        >
          <AnalyticsChart />
        </section>

        {/* Recent Orders */}
        <section
          className="mt-6 animate-fade-up sm:mt-8"
          style={{
            animationDelay: "500ms",
          }}
        >
          <RecentOrders />
        </section>

        {/* Profile + Notifications */}
        <section
          className="mt-6 grid grid-cols-1 gap-5 animate-fade-up sm:mt-8 sm:gap-6 xl:grid-cols-2"
          style={{
            animationDelay: "600ms",
          }}
        >
          <ProfileCard />

          <Notifications />
        </section>

      </div>

    </div>
  );
}

export default Dashboard;