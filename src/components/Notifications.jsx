import {
  UserPlus,
  ShoppingBag,
  FolderPlus,
  CheckCircle2,
  Bell,
} from "lucide-react";

const notifications = [
  {
    icon: UserPlus,
    title: "New user registered",
    description: "A new user joined your platform.",
    time: "5 minutes ago",
  },
  {
    icon: ShoppingBag,
    title: "Order #ORD-1024 completed",
    description: "The order has been successfully completed.",
    time: "20 minutes ago",
  },
  {
    icon: FolderPlus,
    title: "New project created",
    description: "A new project was added to your workspace.",
    time: "1 hour ago",
  },
  {
    icon: CheckCircle2,
    title: "System update completed",
    description: "Your dashboard has been updated successfully.",
    time: "2 hours ago",
  },
];

function Notifications() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Notifications
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Recent updates and activities
          </p>
        </div>

        <div className="relative rounded-xl bg-slate-100 p-2.5 text-slate-700">
          <Bell size={19} />

          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </div>
      </div>

      {/* Notifications */}
      <div className="mt-6 space-y-1">
        {notifications.map((notification) => {
          const Icon = notification.icon;

          return (
            <div
              key={notification.title}
              className="group flex gap-3 rounded-xl p-3 transition hover:bg-slate-50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition group-hover:bg-slate-900 group-hover:text-white">
                <Icon size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-800">
                  {notification.title}
                </p>

                <p className="mt-0.5 text-xs leading-5 text-slate-500">
                  {notification.description}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {notification.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <button className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
        View All Notifications
      </button>

    </div>
  );
}

export default Notifications;