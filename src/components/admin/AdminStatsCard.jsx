import { FiUsers, FiDollarSign, FiActivity, FiTrendingUp } from 'react-icons/fi';

const icons = {
  users: FiUsers,
  revenue: FiDollarSign,
  active: FiActivity,
  conversion: FiTrendingUp
};

export default function AdminStatsCard({ title, value, change, type }) {
  const Icon = icons[type];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {Icon && <Icon className="h-6 w-6 text-primary-500" />}
          <h3 className="ml-3 text-lg font-medium text-gray-900">{title}</h3>
        </div>
        <span className={`text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </span>
      </div>
      <p className="mt-4 text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}