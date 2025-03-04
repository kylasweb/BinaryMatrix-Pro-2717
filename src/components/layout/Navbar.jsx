import { useAuth } from '../../contexts/AuthContext';
import { FiMenu, FiBell, FiUser } from 'react-icons/fi';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <button className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden">
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex items-center">
            <button className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <FiBell className="h-6 w-6" />
            </button>
            
            <div className="ml-3 relative">
              <div className="flex items-center">
                <button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <FiUser className="h-6 w-6 text-gray-400" />
                  <span className="ml-2 text-gray-700">{user.name}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}