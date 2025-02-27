import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import LoginLayout from "@/components/layouts/LoginLayout";
import Login from "@/pages/auth/Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Dashboard from "@/pages/dashboard/Dashboard";
import AuthProvider from "@/components/auth/AuthProvider";

export default function AppRoutes() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Auth routes */}
          <Route element={<PublicRoute />}>
            <Route element={<LoginLayout />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Route>

          {/* Protected routes */}
          <Route element={<PrivateRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}
