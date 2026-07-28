import { useMemo, useState } from "react";
import {
  Search,
  Package,
  CheckCircle2,
  Clock3,
  XCircle,
  MoreVertical,
  X,
  Eye,
} from "lucide-react";

const initialOrders = [
  {
    id: "#ORD-1001",
    customer: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    product: "Premium Plan",
    amount: 249,
    status: "Completed",
    date: "28 Jul 2026",
  },
  {
    id: "#ORD-1002",
    customer: "John Carter",
    email: "john.carter@example.com",
    product: "Business Plan",
    amount: 499,
    status: "Processing",
    date: "27 Jul 2026",
  },
  {
    id: "#ORD-1003",
    customer: "Emma Davis",
    email: "emma.davis@example.com",
    product: "Starter Plan",
    amount: 99,
    status: "Pending",
    date: "27 Jul 2026",
  },
  {
    id: "#ORD-1004",
    customer: "Daniel Smith",
    email: "daniel.smith@example.com",
    product: "Premium Plan",
    amount: 249,
    status: "Completed",
    date: "26 Jul 2026",
  },
  {
    id: "#ORD-1005",
    customer: "Olivia Brown",
    email: "olivia.brown@example.com",
    product: "Business Plan",
    amount: 499,
    status: "Cancelled",
    date: "25 Jul 2026",
  },
  {
    id: "#ORD-1006",
    customer: "Michael Johnson",
    email: "michael.johnson@example.com",
    product: "Premium Plan",
    amount: 249,
    status: "Processing",
    date: "24 Jul 2026",
  },
  {
    id: "#ORD-1007",
    customer: "Sophia Miller",
    email: "sophia.miller@example.com",
    product: "Starter Plan",
    amount: 99,
    status: "Completed",
    date: "23 Jul 2026",
  },
];

function Orders() {
  const [orders] = useState(initialOrders);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch =
        order.id.toLowerCase().includes(search.toLowerCase()) ||
        order.customer.toLowerCase().includes(search.toLowerCase()) ||
        order.product.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [orders, search, statusFilter]);

  const statusStyles = {
    Completed: "bg-emerald-50 text-emerald-600",
    Processing: "bg-blue-50 text-blue-600",
    Pending: "bg-amber-50 text-amber-600",
    Cancelled: "bg-red-50 text-red-600",
  };

  const totalRevenue = orders
    .filter((order) => order.status !== "Cancelled")
    .reduce((total, order) => total + order.amount, 0);

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <p className="mb-1 text-sm font-medium text-slate-500">
          Management
        </p>

        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Orders
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Track and manage customer orders.
        </p>
      </div>

      {/* Statistics */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Total */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Total Orders
            </p>

            <div className="rounded-lg bg-slate-100 p-2">
              <Package size={18} className="text-slate-700" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            {orders.length}
          </h2>
        </div>

        {/* Completed */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Completed
            </p>

            <div className="rounded-lg bg-emerald-50 p-2">
              <CheckCircle2 size={18} className="text-emerald-600" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            {orders.filter((order) => order.status === "Completed").length}
          </h2>
        </div>

        {/* Pending */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Pending
            </p>

            <div className="rounded-lg bg-amber-50 p-2">
              <Clock3 size={18} className="text-amber-600" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            {orders.filter((order) => order.status === "Pending").length}
          </h2>
        </div>

        {/* Revenue */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Revenue
            </p>

            <div className="rounded-lg bg-blue-50 p-2">
              <Package size={18} className="text-blue-600" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            ₹{totalRevenue.toLocaleString("en-IN")}
          </h2>
        </div>
      </div>

      {/* Orders Card */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Filters */}
        <div className="flex flex-col gap-3 border-b border-slate-200 p-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search orders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none"
          >
            <option value="All">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Processing">Processing</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-6 py-4 font-semibold">Order</th>
                <th className="px-6 py-4 font-semibold">Customer</th>
                <th className="px-6 py-4 font-semibold">Product</th>
                <th className="px-6 py-4 font-semibold">Amount</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 text-right font-semibold">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="transition hover:bg-slate-50"
                >
                  <td className="px-6 py-4">
                    <span className="font-semibold text-slate-800">
                      {order.id}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                        {order.customer.charAt(0)}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {order.customer}
                        </p>

                        <p className="text-xs text-slate-400">
                          {order.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {order.product}
                  </td>

                  <td className="px-6 py-4 text-sm font-semibold text-slate-800">
                    ₹{order.amount.toLocaleString("en-IN")}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyles[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-500">
                    {order.date}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                      title="View order"
                    >
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="divide-y divide-slate-100 md:hidden">
          {filteredOrders.map((order) => (
            <div key={order.id} className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-slate-800">
                    {order.id}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {order.customer}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedOrder(order)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
                >
                  <MoreVertical size={18} />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs text-slate-400">Product</p>
                  <p className="mt-1 font-medium text-slate-700">
                    {order.product}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Amount</p>
                  <p className="mt-1 font-semibold text-slate-800">
                    ₹{order.amount.toLocaleString("en-IN")}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Date</p>
                  <p className="mt-1 text-slate-600">
                    {order.date}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Status</p>

                  <span
                    className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty */}
        {filteredOrders.length === 0 && (
          <div className="p-12 text-center">
            <XCircle
              className="mx-auto mb-3 text-slate-300"
              size={40}
            />

            <h3 className="font-semibold text-slate-700">
              No orders found
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Try changing your search or filter.
            </p>
          </div>
        )}
      </div>

      {/* View Order Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  Order Details
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  {selectedOrder.id}
                </h2>
              </div>

              <button
                onClick={() => setSelectedOrder(null)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white font-semibold text-slate-700 shadow-sm">
                  {selectedOrder.customer.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    {selectedOrder.customer}
                  </p>

                  <p className="text-sm text-slate-500">
                    {selectedOrder.email}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-400">Product</p>
                  <p className="mt-1 font-medium text-slate-700">
                    {selectedOrder.product}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Amount</p>
                  <p className="mt-1 font-semibold text-slate-800">
                    ₹{selectedOrder.amount.toLocaleString("en-IN")}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Date</p>
                  <p className="mt-1 text-slate-600">
                    {selectedOrder.date}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Status</p>

                  <span
                    className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[selectedOrder.status]}`}
                  >
                    {selectedOrder.status}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedOrder(null)}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <Eye size={17} />
              Close Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;