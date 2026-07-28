import { useMemo, useState } from "react";
import {
  Search,
  Plus,
  MoreVertical,
  Mail,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";

const initialUsers = [
  {
    id: 1,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "John Carter",
    email: "john.carter@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Emma Davis",
    email: "emma.davis@example.com",
    role: "Manager",
    status: "Away",
  },
  {
    id: 4,
    name: "Daniel Smith",
    email: "daniel.smith@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 5,
    name: "Olivia Brown",
    email: "olivia.brown@example.com",
    role: "Manager",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    role: "User",
    status: "Active",
  },
];

function Users() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchesRole =
        roleFilter === "All" || user.role === roleFilter;

      return matchesSearch && matchesRole;
    });
  }, [users, search, roleFilter]);

  const handleDelete = (id) => {
    setUsers((currentUsers) =>
      currentUsers.filter((user) => user.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-medium text-slate-500">
            Management
          </p>

          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Users
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage and monitor your platform users.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          <Plus size={18} />
          Add User
        </button>
      </div>

      {/* Summary Cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Total Users
            </p>

            <div className="rounded-lg bg-slate-100 p-2">
              <UserRound size={18} className="text-slate-700" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            {users.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Active Users
            </p>

            <div className="rounded-lg bg-emerald-50 p-2">
              <ShieldCheck size={18} className="text-emerald-600" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            {users.filter((user) => user.status === "Active").length}
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Managers
            </p>

            <div className="rounded-lg bg-blue-50 p-2">
              <ShieldCheck size={18} className="text-blue-600" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            {users.filter((user) => user.role === "Manager").length}
          </h2>
        </div>
      </div>

      {/* Main Card */}
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
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
            />
          </div>

          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none"
          >
            <option value="All">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="User">User</option>
          </select>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-6 py-4 font-semibold">User</th>
                <th className="px-6 py-4 font-semibold">Email</th>
                <th className="px-6 py-4 font-semibold">Role</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 text-right font-semibold">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="transition hover:bg-slate-50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 font-semibold text-slate-700">
                        {user.name.charAt(0)}
                      </div>

                      <span className="font-semibold text-slate-800">
                        {user.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-500">
                    {user.email}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                      {user.role}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        user.status === "Active"
                          ? "bg-emerald-50 text-emerald-600"
                          : user.status === "Away"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                      title="Delete user"
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
          {filteredUsers.map((user) => (
            <div key={user.id} className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 font-semibold text-slate-700">
                    {user.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {user.name}
                    </h3>

                    <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                      <Mail size={13} />
                      {user.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(user.id)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-500"
                >
                  <MoreVertical size={18} />
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  {user.role}
                </span>

                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                    user.status === "Active"
                      ? "bg-emerald-50 text-emerald-600"
                      : user.status === "Away"
                      ? "bg-amber-50 text-amber-600"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {user.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredUsers.length === 0 && (
          <div className="p-12 text-center">
            <UserRound className="mx-auto mb-3 text-slate-300" size={40} />

            <h3 className="font-semibold text-slate-700">
              No users found
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Try changing your search or filter.
            </p>
          </div>
        )}
      </div>

      {/* Add User Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Add User
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  User creation form can be connected to an API later.
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
              />

              <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 outline-none focus:border-slate-400">
                <option>Choose role</option>
                <option>Admin</option>
                <option>Manager</option>
                <option>User</option>
              </select>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="flex-1 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Create User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;