import { Outlet } from "react-router-dom";

export default function LoginLayout() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Outlet />
    </div>
  );
}
