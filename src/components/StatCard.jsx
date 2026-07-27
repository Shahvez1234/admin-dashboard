import { ArrowUpRight, ArrowDownRight } from "lucide-react";

function StatCard({
  title,
  value,
  change,
  icon: Icon,
  positive = true,
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Top */}
      <div className="flex items-start justify-between">
        
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {value}
          </h3>
        </div>

        {/* Icon */}
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white">
          <Icon size={21} />
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-5 flex items-center gap-2">
        
        <span
          className={`flex items-center gap-1 text-sm font-semibold ${
            positive ? "text-emerald-600" : "text-red-600"
          }`}
        >
          {positive ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}

          {change}
        </span>

        <span className="text-sm text-slate-400">
          vs last month
        </span>

      </div>
    </div>
  );
}

export default StatCard;