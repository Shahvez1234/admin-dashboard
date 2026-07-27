import {
  Mail,
  MapPin,
  Briefcase,
  Edit3,
} from "lucide-react";

function ProfileCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            My Profile
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your account information
          </p>
        </div>

        <button className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900">
          <Edit3 size={18} />
        </button>
      </div>

      {/* User */}
      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white">
          SA
        </div>

        <div>
          <h3 className="font-bold text-slate-900">
            Shahvez Ansari
          </h3>

          <p className="text-sm text-slate-500">
            Administrator
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-4">

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-slate-100 p-2 text-slate-600">
            <Mail size={17} />
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Email
            </p>

            <p className="text-sm font-medium text-slate-700">
              shahvez@example.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-slate-100 p-2 text-slate-600">
            <MapPin size={17} />
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Location
            </p>

            <p className="text-sm font-medium text-slate-700">
              India
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-slate-100 p-2 text-slate-600">
            <Briefcase size={17} />
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Role
            </p>

            <p className="text-sm font-medium text-slate-700">
              Administrator
            </p>
          </div>
        </div>

      </div>

      {/* Button */}
      <button className="mt-6 flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
        View Profile
      </button>

    </div>
  );
}

export default ProfileCard;