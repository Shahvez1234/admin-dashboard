import { useState } from "react";
import {
  User,
  Bell,
  Palette,
  ShieldCheck,
  Save,
  RotateCcw,
  Mail,
  Smartphone,
  Lock,
  CheckCircle2,
} from "lucide-react";

function Settings() {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@adminpro.com");
  const [phone, setPhone] = useState("+91 98765 43210");

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);

  const [appearance, setAppearance] = useState("Light");

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const handleReset = () => {
    setName("Admin User");
    setEmail("admin@adminpro.com");
    setPhone("+91 98765 43210");

    setEmailNotifications(true);
    setPushNotifications(true);
    setWeeklyReports(false);

    setAppearance("Light");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <p className="mb-1 text-sm font-medium text-slate-500">
          Configuration
        </p>

        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Settings
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage your account, notifications, and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[240px_1fr]">
        {/* Settings Navigation */}
        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="space-y-1">
            <a
              href="#profile"
              className="flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
            >
              <User size={18} />
              Profile
            </a>

            <a
              href="#notifications"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              <Bell size={18} />
              Notifications
            </a>

            <a
              href="#appearance"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              <Palette size={18} />
              Appearance
            </a>

            <a
              href="#security"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              <ShieldCheck size={18} />
              Security
            </a>
          </div>
        </div>

        {/* Main Settings */}
        <div className="space-y-6">
          {/* Profile */}
          <section
            id="profile"
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-slate-100 p-3">
                  <User size={20} className="text-slate-700" />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    Profile Information
                  </h2>

                  <p className="text-sm text-slate-500">
                    Update your personal account information.
                  </p>
                </div>
              </div>
            </div>

            {/* Avatar */}
            <div className="mb-6 flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-xl font-bold text-white">
                A
              </div>

              <div>
                <p className="font-semibold text-slate-800">
                  Admin User
                </p>

                <p className="text-sm text-slate-500">
                  Administrator
                </p>
              </div>

              <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 sm:ml-auto">
                Change Avatar
              </button>
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone Number
                </label>

                <div className="relative">
                  <Smartphone
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Role
                </label>

                <input
                  value="Administrator"
                  disabled
                  className="w-full cursor-not-allowed rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-500"
                />
              </div>
            </div>
          </section>

          {/* Notifications */}
          <section
            id="notifications"
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-3">
                <Bell size={20} className="text-blue-600" />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Notifications
                </h2>

                <p className="text-sm text-slate-500">
                  Choose how you want to receive updates.
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              <ToggleRow
                title="Email Notifications"
                description="Receive important updates through email."
                enabled={emailNotifications}
                setEnabled={setEmailNotifications}
              />

              <ToggleRow
                title="Push Notifications"
                description="Receive real-time browser notifications."
                enabled={pushNotifications}
                setEnabled={setPushNotifications}
              />

              <ToggleRow
                title="Weekly Reports"
                description="Receive a weekly summary of dashboard activity."
                enabled={weeklyReports}
                setEnabled={setWeeklyReports}
              />
            </div>
          </section>

          {/* Appearance */}
          <section
            id="appearance"
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-violet-50 p-3">
                <Palette size={20} className="text-violet-600" />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Appearance
                </h2>

                <p className="text-sm text-slate-500">
                  Customize the appearance of your dashboard.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-slate-700">
                Theme
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {["Light", "Dark", "System"].map((theme) => (
                  <button
                    key={theme}
                    onClick={() => setAppearance(theme)}
                    className={`rounded-xl border p-4 text-left transition ${
                      appearance === theme
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <p className="text-sm font-semibold">
                      {theme}
                    </p>

                    <p
                      className={`mt-1 text-xs ${
                        appearance === theme
                          ? "text-slate-300"
                          : "text-slate-400"
                      }`}
                    >
                      {theme === "Light"
                        ? "Bright interface"
                        : theme === "Dark"
                        ? "Dark interface"
                        : "Follow device"}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Security */}
          <section
            id="security"
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-emerald-50 p-3">
                <ShieldCheck
                  size={20}
                  className="text-emerald-600"
                />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Security
                </h2>

                <p className="text-sm text-slate-500">
                  Manage your account security settings.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-xl bg-slate-50 p-4 sm:flex-row sm:items-center">
              <div className="rounded-xl bg-white p-3 shadow-sm">
                <Lock size={20} className="text-slate-700" />
              </div>

              <div className="flex-1">
                <p className="font-semibold text-slate-800">
                  Password
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Last changed more than 30 days ago.
                </p>
              </div>

              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100">
                Change Password
              </button>
            </div>
          </section>

          {/* Save Bar */}
          <div className="sticky bottom-4 z-20 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              {saved ? (
                <>
                  <CheckCircle2
                    size={18}
                    className="text-emerald-600"
                  />

                  <span className="font-medium text-emerald-600">
                    Changes saved successfully
                  </span>
                </>
              ) : (
                <span>Your changes are not saved yet.</span>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 sm:flex-none"
              >
                <RotateCcw size={17} />
                Reset
              </button>

              <button
                onClick={handleSave}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:flex-none"
              >
                <Save size={17} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleRow({
  title,
  description,
  enabled,
  setEnabled,
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-5">
      <div>
        <p className="text-sm font-semibold text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setEnabled(!enabled)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled ? "bg-slate-900" : "bg-slate-200"
        }`}
        aria-label={`Toggle ${title}`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

export default Settings;