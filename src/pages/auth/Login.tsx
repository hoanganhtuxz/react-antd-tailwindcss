/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Form, Input, Typography, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { login } from "@/store/slices/authSlice";
import type { AppDispatch, RootState } from "@/store";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

export default function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading } = useSelector((state: RootState) => state.user);

  const onFinish = async (values: { username: string; password: string }) => {
    try {
      await dispatch(login(values)).unwrap();
      message.success(t("login.success"));
      navigate("/");
    } catch (error: any) {
      message.error(`${t("login.error")}: ${error}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      <Card className="!shadow-sm" style={{ width: 400 }}>
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          {t("login.title")}
        </Typography.Title>
        <Form name="login_form" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="username"
            rules={[{ required: true, message: t("login.username.required") }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder={t("login.username.placeholder")}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: t("login.password.required") }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder={t("login.password.placeholder")}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              {t("login.button")}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
