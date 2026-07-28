import { useMemo, useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const monthlyData = [
  { month: "Jan", revenue: 4200, users: 120, orders: 84 },
  { month: "Feb", revenue: 5100, users: 145, orders: 96 },
  { month: "Mar", revenue: 4800, users: 168, orders: 102 },
  { month: "Apr", revenue: 6200, users: 190, orders: 118 },
  { month: "May", revenue: 7100, users: 215, orders: 136 },
  { month: "Jun", revenue: 6800, users: 238, orders: 149 },
  { month: "Jul", revenue: 8200, users: 267, orders: 172 },
];

const weeklyData = [
  { month: "Mon", revenue: 1200, users: 32, orders: 18 },
  { month: "Tue", revenue: 1650, users: 41, orders: 24 },
  { month: "Wed", revenue: 1420, users: 38, orders: 21 },
  { month: "Thu", revenue: 1980, users: 49, orders: 29 },
  { month: "Fri", revenue: 2240, users: 56, orders: 34 },
  { month: "Sat", revenue: 1840, users: 44, orders: 27 },
  { month: "Sun", revenue: 2110, users: 51, orders: 31 },
];

function Analytics() {
  const [range, setRange] = useState("7 months");

  const chartData = useMemo(() => {
    return range === "7 days" ? weeklyData : monthlyData;
  }, [range]);

  const revenue = chartData.reduce(
    (total, item) => total + item.revenue,
    0
  );

  const users = chartData.reduce(
    (total, item) => total + item.users,
    0
  );

  const orders = chartData.reduce(
    (total, item) => total + item.orders,
    0
  );

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-1 text-sm font-medium text-slate-500">
            Performance
          </p>

          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Analytics
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Monitor your business performance and growth.
          </p>
        </div>

        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 outline-none transition focus:border-slate-400 sm:w-auto"
        >
          <option value="7 months">Last 7 Months</option>
          <option value="7 days">Last 7 Days</option>
        </select>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Revenue */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Revenue
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                £{revenue.toLocaleString("en-GB")}
              </h2>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3">
              <DollarSign
                size={20}
                className="text-emerald-600"
              />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-emerald-600">
            <ArrowUpRight size={14} />
            12.8% from previous period
          </div>
        </div>

        {/* Users */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Active Users
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                {users.toLocaleString("en-GB")}
              </h2>
            </div>

            <div className="rounded-xl bg-blue-50 p-3">
              <Users size={20} className="text-blue-600" />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-emerald-600">
            <ArrowUpRight size={14} />
            8.4% from previous period
          </div>
        </div>

        {/* Orders */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Orders
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                {orders.toLocaleString("en-GB")}
              </h2>
            </div>

            <div className="rounded-xl bg-violet-50 p-3">
              <ShoppingCart
                size={20}
                className="text-violet-600"
              />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-emerald-600">
            <ArrowUpRight size={14} />
            15.2% from previous period
          </div>
        </div>

        {/* Conversion */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Conversion Rate
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                4.82%
              </h2>
            </div>

            <div className="rounded-xl bg-amber-50 p-3">
              <TrendingUp
                size={20}
                className="text-amber-600"
              />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-red-500">
            <ArrowDownRight size={14} />
            1.2% from previous period
          </div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-slate-900">
            Revenue Overview
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Revenue performance over the selected period.
          </p>
        </div>

        <div className="h-[300px] w-full sm:h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient
                  id="revenueGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopOpacity={0.2}
                  />

                  <stop
                    offset="95%"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
              />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                width={50}
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="revenue"
                strokeWidth={3}
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Users + Orders */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Users */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-slate-900">
              User Growth
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              New users across the selected period.
            </p>
          </div>

          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip />

                <Bar
                  dataKey="users"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Orders */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-slate-900">
              Orders Performance
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Orders generated across the selected period.
            </p>
          </div>

          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip />

                <Legend />

                <Bar
                  dataKey="orders"
                  name="Orders"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Insight */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <BarChart3 size={20} />

              <span className="text-sm font-semibold">
                Performance Insight
              </span>
            </div>

            <h3 className="text-lg font-bold">
              Your overall performance is trending upward.
            </h3>

            <p className="mt-1 text-sm text-slate-300">
              Revenue, users, and order activity have improved
              during the selected period.
            </p>
          </div>

          <div className="shrink-0 rounded-xl bg-white/10 px-5 py-3 text-center">
            <p className="text-xs text-slate-300">
              Growth
            </p>

            <p className="mt-1 text-xl font-bold">
              +18.6%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;