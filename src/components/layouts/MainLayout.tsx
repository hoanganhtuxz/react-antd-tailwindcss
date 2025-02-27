import React, { useState } from "react";

import {
  AppstoreOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
// import LanguageSwitcher from "../common/LanguageSwitcher";
import UserPopover from "../auth/UserPopover";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  // overflow: "auto",
  scrollbarWidth: "thin",
  // scrollbarGutter: "stable",
};

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    icon: <MailOutlined />,
    label: "Navigation One",
    children: [
      { key: "11", label: "Option 1" },
      { key: "12", label: "Option 2" },
      { key: "13", label: "Option 3" },
      { key: "14", label: "Option 4" },
    ],
  },
  {
    key: "2",
    icon: <AppstoreOutlined />,
    label: "Navigation Two",
    children: [
      { key: "21", label: "Option 1" },
      { key: "22", label: "Option 2" },
      {
        key: "23",
        label: "Submenu",
        children: [
          { key: "231", label: "Option 1" },
          { key: "232", label: "Option 2" },
          { key: "233", label: "Option 3" },
        ],
      },
      {
        key: "24",
        label: "Submenu 2",
        children: [
          { key: "241", label: "Option 1" },
          { key: "242", label: "Option 2" },
          { key: "243", label: "Option 3" },
        ],
      },
    ],
  },
  {
    key: "3",
    icon: <SettingOutlined />,
    label: "Navigation Three",
    children: [
      { key: "31", label: "Option 1" },
      { key: "32", label: "Option 2" },
      { key: "33", label: "Option 3" },
      { key: "34", label: "Option 4" },
    ],
  },
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout hasSider>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={siderStyle}
      >
        <div className="w-full h-[64px] flex items-center justify-center bg-gray-500" />
        <div className="h-[calc(100vh-64px)] overflow-y-auto thin-scroll">
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </div>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="flex justify-between items-center pr-5">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <div>
              {/* <LanguageSwitcher /> */}
              <UserPopover />
            </div>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
