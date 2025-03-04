import { FiUsers, FiDollarSign, FiActivity } from 'react-icons/fi';

const icons = {
  users: FiUsers,
  dollar: FiDollarSign,
  chart: FiActivity
};

export default function StatsCard({ title, value, icon }) {
  const Icon = icons[icon];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center">
        {Icon && <Icon className="h-6 w-6 text-primary-500" />}
        <h3 className="ml-3 text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <p className="mt-4 text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}