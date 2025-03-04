import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Layout from '../components/layout/Layout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Onboarding from '../pages/Onboarding';
import Dashboard from '../pages/Dashboard';
import Network from '../pages/Network';
import Profile from '../pages/Profile';
import LandingPage from '../pages/public/LandingPage';
import Plans from '../pages/public/Plans';
import AdminDashboard from '../pages/admin/AdminDashboard';
import UserManagement from '../pages/admin/UserManagement';
import RewardsManagement from '../pages/admin/RewardsManagement';
import InvestmentPlans from '../pages/admin/InvestmentPlans';
import TaskManagement from '../pages/admin/TaskManagement';
import PoolManagement from '../pages/admin/PoolManagement';
import TokenManagement from '../pages/admin/TokenManagement';
import FrontendManager from '../pages/admin/frontend/FrontendManager';
import BalanceAdjustment from '../pages/admin/tools/BalanceAdjustment';
import RankAdjustment from '../pages/admin/tools/RankAdjustment';
import GamificationHub from '../pages/GamificationHub';

const ProtectedRoute = ({ children, roles = [] }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (roles.length && !roles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <LandingPage />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to="/dashboard" replace /> : <Register />} />
      <Route path="/onboarding" element={
        <ProtectedRoute>
          <Onboarding />
        </ProtectedRoute>
      } />

      {/* Protected Routes */}
      <Route element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/network" element={<Network />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gamification" element={<GamificationHub />} />

        {/* Admin Routes */}
        <Route path="/admin" element={
          <ProtectedRoute roles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/users" element={
          <ProtectedRoute roles={['admin']}>
            <UserManagement />
          </ProtectedRoute>
        } />
        <Route path="/admin/rewards" element={
          <ProtectedRoute roles={['admin']}>
            <RewardsManagement />
          </ProtectedRoute>
        } />
        <Route path="/admin/investment-plans" element={
          <ProtectedRoute roles={['admin']}>
            <InvestmentPlans />
          </ProtectedRoute>
        } />
        <Route path="/admin/tasks" element={
          <ProtectedRoute roles={['admin']}>
            <TaskManagement />
          </ProtectedRoute>
        } />
        <Route path="/admin/pools" element={
          <ProtectedRoute roles={['admin']}>
            <PoolManagement />
          </ProtectedRoute>
        } />
        <Route path="/admin/tokens" element={
          <ProtectedRoute roles={['admin']}>
            <TokenManagement />
          </ProtectedRoute>
        } />
        <Route path="/admin/frontend/*" element={
          <ProtectedRoute roles={['admin']}>
            <FrontendManager />
          </ProtectedRoute>
        } />
        <Route path="/admin/tools/balance" element={
          <ProtectedRoute roles={['admin']}>
            <BalanceAdjustment />
          </ProtectedRoute>
        } />
        <Route path="/admin/tools/ranks" element={
          <ProtectedRoute roles={['admin']}>
            <RankAdjustment />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  );
}