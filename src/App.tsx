import { ConfigProvider } from "antd";
import AppRoutes from "./routes";

export default function App() {
  return (
    <ConfigProvider>
      <AppRoutes />
    </ConfigProvider>
  );
}
