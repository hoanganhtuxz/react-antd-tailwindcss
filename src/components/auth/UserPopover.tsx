import { Popover, Button, Divider, Avatar } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { logout } from "@/store/slices/authSlice";

const UserPopover = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.user);

  console.log(user);

  const handleLogout = () => {
    dispatch(logout());
  };

  // Nội dung của popover
  const content = (
    <div className="w-64">
      <div className="py-2">
        <UserOutlined />
        <p className="text-gray-500 text-sm">Đã đăng nhập với</p>
        <p className="font-medium text-gray-900 truncate">{user?.username}</p>
        <p className="font-medium text-gray-900 truncate">{user?.email}</p>
      </div>
      <Divider />
      <Button
        type="dashed"
        danger
        icon={<LogoutOutlined />}
        className="flex items-center w-full justify-start px-1"
        onClick={handleLogout}
      >
        <span>Đăng xuất</span>
      </Button>
    </div>
  );

  return (
    <Popover content={content} trigger="hover" placement="bottomRight">
      <Avatar
        className="shadow-sm cursor-pointer"
        style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
        size="large"
      >
        {user?.username?.charAt(0)}
      </Avatar>
    </Popover>
  );
};

export default UserPopover;
