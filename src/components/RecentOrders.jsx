import {
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

const orders = [
  {
    id: "#ORD-1024",
    customer: "Aarav Sharma",
    product: "Website Design",
    date: "27 Jul 2026",
    amount: "£420",
    status: "Completed",
  },
  {
    id: "#ORD-1023",
    customer: "Sarah Khan",
    product: "Admin Dashboard",
    date: "27 Jul 2026",
    amount: "£650",
    status: "Pending",
  },
  {
    id: "#ORD-1022",
    customer: "Daniel Smith",
    product: "Mobile App UI",
    date: "26 Jul 2026",
    amount: "£850",
    status: "Completed",
  },
  {
    id: "#ORD-1021",
    customer: "Emma Wilson",
    product: "Landing Page",
    date: "26 Jul 2026",
    amount: "£280",
    status: "Cancelled",
  },
  {
    id: "#ORD-1020",
    customer: "Omar Ali",
    product: "E-commerce UI",
    date: "25 Jul 2026",
    amount: "£540",
    status: "Completed",
  },
];

function StatusBadge({ status }) {
  const styles = {
    Completed:
      "bg-emerald-50 text-emerald-700",
    Pending:
      "bg-amber-50 text-amber-700",
    Cancelled:
      "bg-red-50 text-red-700",
  };

  const icons = {
    Completed: CheckCircle2,
    Pending: Clock3,
    Cancelled: XCircle,
  };

  const Icon = icons[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      <Icon size={14} />
      {status}
    </span>
  );
}

function RecentOrders() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Recent Orders
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest orders from your customers
          </p>
        </div>

        <button className="w-fit rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">

          <thead className="bg-slate-50">
            <tr className="text-xs uppercase tracking-wide text-slate-400">
              <th className="px-5 py-4 font-semibold">
                Order
              </th>

              <th className="px-5 py-4 font-semibold">
                Customer
              </th>

              <th className="px-5 py-4 font-semibold">
                Product
              </th>

              <th className="px-5 py-4 font-semibold">
                Date
              </th>

              <th className="px-5 py-4 font-semibold">
                Amount
              </th>

              <th className="px-5 py-4 font-semibold">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="transition hover:bg-slate-50"
              >
                <td className="px-5 py-4 text-sm font-semibold text-slate-900">
                  {order.id}
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                      {order.customer
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>

                    <span className="text-sm font-medium text-slate-700">
                      {order.customer}
                    </span>

                  </div>
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  {order.product}
                </td>

                <td className="px-5 py-4 text-sm text-slate-500">
                  {order.date}
                </td>

                <td className="px-5 py-4 text-sm font-semibold text-slate-900">
                  {order.amount}
                </td>

                <td className="px-5 py-4">
                  <StatusBadge status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default RecentOrders;