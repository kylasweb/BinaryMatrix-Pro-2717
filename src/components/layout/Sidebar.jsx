import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  FiHome, 
  FiUsers, 
  FiUser, 
  FiSettings,
  FiAward,
  FiDollarSign,
  FiLayout
} from 'react-icons/fi';

export default function Sidebar() {
  const { user } = useAuth();

  const adminLinks = [
    { to: "/admin", icon: FiSettings, label: "Dashboard" },
    { to: "/admin/users", icon: FiUsers, label: "Users" },
    { to: "/admin/rewards", icon: FiAward, label: "Rewards" },
    { to: "/admin/investment-plans", icon: FiDollarSign, label: "Investment Plans" },
    { to: "/admin/website-editor", icon: FiLayout, label: "Website Editor" }
  ];

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-white border-r border-gray-200">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <h1 className="text-2xl font-bold text-primary-600">MLM System</h1>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-primary-100 text-primary-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <FiHome className="mr-3 h-6 w-6" />
                Dashboard
              </NavLink>
              
              <NavLink
                to="/network"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-primary-100 text-primary-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <FiUsers className="mr-3 h-6 w-6" />
                Network
              </NavLink>

              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-primary-100 text-primary-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <FiUser className="mr-3 h-6 w-6" />
                Profile
              </NavLink>

              {user.role === 'admin' && (
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Admin
                  </h3>
                  <div className="mt-2 space-y-1">
                    {adminLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                          `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                            isActive
                              ? 'bg-primary-100 text-primary-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`
                        }
                      >
                        <link.icon className="mr-3 h-6 w-6" />
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}