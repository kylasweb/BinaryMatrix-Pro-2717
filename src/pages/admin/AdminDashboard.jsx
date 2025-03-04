import { useNetwork } from '../../contexts/NetworkContext';
import { motion } from 'framer-motion';
import AdminStatsCard from '../../components/admin/AdminStatsCard';
import NetworkGraph from '../../components/admin/NetworkGraph';

export default function AdminDashboard() {
  const { stats, network } = useNetwork();

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <AdminStatsCard
          title="Total Users"
          value={stats.totalUsers}
          change={"+12%"}
          type="users"
        />
        <AdminStatsCard
          title="Total Revenue"
          value={`$${stats.totalEarnings.toFixed(2)}`}
          change={"+8.1%"}
          type="revenue"
        />
        <AdminStatsCard
          title="Active Users"
          value={stats.activeUsers}
          change={"+5.4%"}
          type="active"
        />
        <AdminStatsCard
          title="Conversion Rate"
          value="67%"
          change={"+2.4%"}
          type="conversion"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Network Overview</h2>
          <NetworkGraph data={network} />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Recent Activities</h2>
          {/* Activity list component here */}
        </div>
      </motion.div>
    </div>
  );
}