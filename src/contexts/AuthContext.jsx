import { createContext, useContext, useState, useEffect } from 'react';
import { testUsers } from '../data/testCredentials';
import { useToast } from '../components/ui/Toaster';
import { generateId } from '../utils/helpers';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    try {
      // Initialize test users in localStorage if they don't exist
      const existingUsers = localStorage.getItem('users');
      if (!existingUsers) {
        localStorage.setItem('users', JSON.stringify(testUsers));
      }

      const savedUser = localStorage.getItem('currentUser');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error('Error initializing auth:', error);
      toast('Error initializing authentication', 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(
        u => u.email === credentials.email && u.password === credentials.password
      );

      if (user) {
        setUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        toast('Successfully logged in', 'success');
        return { success: true, newUser: false };
      } else {
        toast('Invalid credentials', 'error');
        return { success: false, newUser: false };
      }
    } catch (error) {
      console.error('Login error:', error);
      toast('Error during login', 'error');
      return { success: false, error: 'Login failed' };
    }
  };

  const register = async (userData) => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      if (users.find(u => u.email === userData.email)) {
        toast('Email already exists', 'error');
        return { success: false, error: 'Email already exists' };
      }

      const newUser = {
        ...userData,
        id: generateId(),
        sponsorId: userData.sponsorId || 'ADMIN',
        role: 'user',
        level: 1,
        leftLeg: null,
        rightLeg: null,
        joinDate: new Date().toISOString(),
        earnings: 0,
        rank: 'STARTER',
        wallet: {
          balance: 0,
          deposits: [],
          withdrawals: []
        }
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      toast('Registration successful', 'success');
      return { success: true, newUser: true };
    } catch (error) {
      console.error('Registration error:', error);
      toast('Error during registration', 'error');
      return { success: false, error: 'Registration failed' };
    }
  };

  const logout = () => {
    try {
      setUser(null);
      localStorage.removeItem('currentUser');
      toast('Successfully logged out', 'success');
    } catch (error) {
      console.error('Logout error:', error);
      toast('Error during logout', 'error');
    }
  };

  const value = {
    user,
    login,
    logout,
    register,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};