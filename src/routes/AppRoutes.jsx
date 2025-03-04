// ... existing imports ...
import Plans from '../pages/public/Plans';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/onboarding" element={<Onboarding />} />
      
      {/* Protected Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        {/* ... existing protected routes ... */}
      </Route>
    </Routes>
  );
}