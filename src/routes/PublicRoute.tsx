import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function PublicRoute() {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
}
