import { useMemo, useState } from "react";
import {
  Search,
  Plus,
  FolderKanban,
  CheckCircle2,
  Clock3,
  AlertCircle,
  CalendarDays,
  MoreVertical,
  X,
} from "lucide-react";

const initialProjects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Redesign the company website with a modern interface.",
    status: "In Progress",
    progress: 72,
    dueDate: "05 Aug 2026",
    team: ["S", "J", "E"],
  },
  {
    id: 2,
    name: "Mobile Application",
    description: "Develop the next generation mobile application.",
    status: "In Progress",
    progress: 48,
    dueDate: "18 Aug 2026",
    team: ["D", "O", "M"],
  },
  {
    id: 3,
    name: "Marketing Campaign",
    description: "Launch the upcoming digital marketing campaign.",
    status: "Completed",
    progress: 100,
    dueDate: "22 Jul 2026",
    team: ["S", "E"],
  },
  {
    id: 4,
    name: "Analytics Platform",
    description: "Build an internal analytics and reporting platform.",
    status: "Planning",
    progress: 20,
    dueDate: "30 Aug 2026",
    team: ["J", "M", "D"],
  },
  {
    id: 5,
    name: "Customer Portal",
    description: "Create a self-service portal for customers.",
    status: "At Risk",
    progress: 35,
    dueDate: "12 Aug 2026",
    team: ["O", "S"],
  },
  {
    id: 6,
    name: "Admin Dashboard",
    description: "Develop a scalable administration dashboard.",
    status: "Completed",
    progress: 100,
    dueDate: "20 Jul 2026",
    team: ["D", "J", "E"],
  },
];

function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || project.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [projects, search, statusFilter]);

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  const inProgressProjects = projects.filter(
    (project) => project.status === "In Progress"
  ).length;

  const atRiskProjects = projects.filter(
    (project) => project.status === "At Risk"
  ).length;

  const handleDelete = (id) => {
    setProjects((currentProjects) =>
      currentProjects.filter((project) => project.id !== id)
    );

    setSelectedProject(null);
  };

  const statusStyles = {
    "In Progress": "bg-blue-50 text-blue-600",
    Completed: "bg-emerald-50 text-emerald-600",
    Planning: "bg-slate-100 text-slate-600",
    "At Risk": "bg-red-50 text-red-600",
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-medium text-slate-500">
            Workspace
          </p>

          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Projects
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Track project progress, deadlines, and team activity.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          <Plus size={18} />
          Add Project
        </button>
      </div>

      {/* Summary */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Total Projects
            </p>

            <div className="rounded-lg bg-slate-100 p-2">
              <FolderKanban size={18} className="text-slate-700" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            {projects.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              In Progress
            </p>

            <div className="rounded-lg bg-blue-50 p-2">
              <Clock3 size={18} className="text-blue-600" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            {inProgressProjects}
          </h2>
        </div>

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
            {completedProjects}
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              At Risk
            </p>

            <div className="rounded-lg bg-red-50 p-2">
              <AlertCircle size={18} className="text-red-600" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            {atRiskProjects}
          </h2>
        </div>
      </div>

      {/* Project Area */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        {/* Search + Filter */}
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search projects..."
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
            <option value="Planning">Planning</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="At Risk">At Risk</option>
          </select>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200 p-5 transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                    <FolderKanban
                      size={20}
                      className="text-slate-700"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {project.name}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {project.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  <MoreVertical size={18} />
                </button>
              </div>

              {/* Status */}
              <div className="mt-5 flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyles[project.status]}`}
                >
                  {project.status}
                </span>

                <span className="text-sm font-semibold text-slate-700">
                  {project.progress}%
                </span>
              </div>

              {/* Progress */}
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-slate-900 transition-all duration-500"
                  style={{ width: `${project.progress}%` }}
                />
              </div>

              {/* Bottom */}
              <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <CalendarDays size={15} className="text-slate-400" />

                  <span className="text-xs text-slate-500">
                    Due {project.dueDate}
                  </span>
                </div>

                <div className="flex -space-x-2">
                  {project.team.map((member, index) => (
                    <div
                      key={`${member}-${index}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-semibold text-slate-700"
                    >
                      {member}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center">
            <FolderKanban
              className="mx-auto mb-3 text-slate-300"
              size={40}
            />

            <h3 className="font-semibold text-slate-700">
              No projects found
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Try changing your search or filter.
            </p>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  Project Details
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  {selectedProject.name}
                </h2>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={20} />
              </button>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              {selectedProject.description}
            </p>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-600">
                  Progress
                </span>

                <span className="font-semibold text-slate-800">
                  {selectedProject.progress}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-slate-900"
                  style={{
                    width: `${selectedProject.progress}%`,
                  }}
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-400">Status</p>

                <span
                  className={`mt-2 inline-block rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyles[selectedProject.status]}`}
                >
                  {selectedProject.status}
                </span>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-400">Due Date</p>

                <p className="mt-2 text-sm font-semibold text-slate-700">
                  {selectedProject.dueDate}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleDelete(selectedProject.id)}
              className="mt-6 w-full rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
            >
              Remove Project
            </button>
          </div>
        </div>
      )}

      {/* Add Project Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Add Project
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Create a new project for your workspace.
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Project name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
              />

              <textarea
                placeholder="Project description"
                rows="4"
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
              />

              <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 outline-none focus:border-slate-400">
                <option>Planning</option>
                <option>In Progress</option>
                <option>At Risk</option>
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
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;