import { NavLink } from 'react-router-dom';
import { 
  FiHome, FiUsers, FiDollarSign, FiSettings, FiAward,
  FiBox, FiLayers, FiTarget, FiTool, FiLayout,
  FiMessageSquare, FiPieChart, FiShield, FiGlobe,
  FiCpu, FiDatabase, FiBookOpen, FiHelpCircle
} from 'react-icons/fi';

const menuGroups = [
  {
    title: "Main",
    items: [
      { to: "/admin", icon: FiHome, label: "Dashboard Overview" },
      { to: "/admin/users", icon: FiUsers, label: "User Management" },
      { to: "/admin/finance", icon: FiDollarSign, label: "Finance Management" },
      { to: "/admin/crm", icon: FiMessageSquare, label: "CRM Integration" }
    ]
  },
  {
    title: "Management",
    items: [
      { to: "/admin/rewards", icon: FiAward, label: "Rewards Management" },
      { to: "/admin/commissions", icon: FiDollarSign, label: "Commission Management" },
      { to: "/admin/investment-plans", icon: FiTarget, label: "Investment Plans" },
      { to: "/admin/pools", icon: FiBox, label: "Pool Management" },
      { to: "/admin/ranks", icon: FiLayers, label: "Rank Management" },
      { to: "/admin/tasks", icon: FiTarget, label: "Task Management" }
    ]
  },
  {
    title: "Ultimate Admin Tools",
    items: [
      { to: "/admin/tools/balance", icon: FiDollarSign, label: "Balance Adjustment" },
      { to: "/admin/tools/ranks", icon: FiLayers, label: "Rank Adjustment" },
      { to: "/admin/tools/rewards", icon: FiAward, label: "Reward Adjustment" },
      { to: "/admin/tools/transactions", icon: FiDatabase, label: "Transaction Management" },
      { to: "/admin/tools/monitoring", icon: FiShield, label: "User Monitoring" }
    ]
  },
  {
    title: "Frontend Management",
    items: [
      { to: "/admin/frontend/templates", icon: FiLayout, label: "Templates" },
      { to: "/admin/frontend/pages", icon: FiBookOpen, label: "Pages" },
      { to: "/admin/frontend/sections", icon: FiLayers, label: "Sections" },
      { to: "/admin/frontend/blog", icon: FiBookOpen, label: "Blog" },
      { to: "/admin/frontend/faq", icon: FiHelpCircle, label: "FAQ" }
    ]
  },
  {
    title: "System",
    items: [
      { to: "/admin/settings", icon: FiSettings, label: "Settings" },
      { to: "/admin/analytics", icon: FiPieChart, label: "Analytics" },
      { to: "/admin/features", icon: FiCpu, label: "Feature Manager" },
      { to: "/admin/localization", icon: FiGlobe, label: "Localization" }
    ]
  }
];

export default function AdminSidebar() {
  return (
    <div className="flex flex-col w-64 bg-white shadow-lg">
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex-1 px-2 py-4 space-y-1">
          {menuGroups.map((group, index) => (
            <div key={index} className="py-4">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {group.title}
              </h3>
              <div className="mt-2 space-y-1">
                {group.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`
                    }
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}