import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Spin } from "antd";
import { useTranslation } from "react-i18next";

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
const content = <div style={contentStyle} />;

export default function PrivateRoute() {
  const { isAuthenticated, loading } = useSelector(
    (state: RootState) => state.user
  );
  const { t } = useTranslation();

  // Hiển thị trạng thái loading khi đang xác thực
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin tip={`${t("loadingLayout")}`} size="default">
          {content}
        </Spin>
      </div>
    );
  }

  // Điều hướng dựa trên trạng thái xác thực
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
