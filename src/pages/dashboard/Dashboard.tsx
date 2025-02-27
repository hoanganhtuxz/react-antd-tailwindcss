import { 
  Card, 
  Col, 
  Row, 
  Statistic, 
  Table, 
  List, 
  Collapse, 
  Badge, 
  Divider,
  Typography
} from "antd";
import { 
  UserOutlined, 
  ShoppingCartOutlined, 
  DollarOutlined,
  ArrowUpOutlined,
  ClockCircleOutlined
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Panel } = Collapse;

export default function Dashboard() {
  // Data for Table
  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Badge 
          status={status === 'Active' ? 'success' : 'error'} 
          text={status} 
        />
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => `$${amount.toLocaleString()}`,
    },
  ];

  const tableData = [
    { key: '1', name: 'John Doe', email: 'john@example.com', status: 'Active', amount: 1250 },
    { key: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive', amount: 950 },
    { key: '3', name: 'Bob Johnson', email: 'bob@example.com', status: 'Active', amount: 1850 },
    { key: '4', name: 'Alice Williams', email: 'alice@example.com', status: 'Active', amount: 2200 },
  ];

  // Data for List
  const listData = [
    {
      title: 'Product A',
      description: 'Best-selling product with highest conversion rate',
      time: '2 hours ago',
    },
    {
      title: 'Product B',
      description: 'New arrival, trending in category',
      time: '5 hours ago',
    },
    {
      title: 'Product C',
      description: 'Limited stock, high demand item',
      time: '1 day ago',
    },
    {
      title: 'Product D',
      description: 'Special offer with promotional pricing',
      time: '2 days ago',
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      {/* Stats Cards */}
      <Row gutter={16} style={{ marginBottom: '24px' }}>
        <Col span={8}>
          <Card>
            <Statistic 
              title="Users" 
              value={1200} 
              prefix={<UserOutlined />}
              suffix={<Text type="success" style={{ fontSize: '14px' }}><ArrowUpOutlined /> 15%</Text>} 
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic 
              title="Orders" 
              value={350} 
              prefix={<ShoppingCartOutlined />} 
              suffix={<Text type="success" style={{ fontSize: '14px' }}><ArrowUpOutlined /> 8%</Text>} 
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic 
              title="Revenue" 
              value={12500} 
              prefix={<DollarOutlined />} 
              suffix={<Text type="success" style={{ fontSize: '14px' }}><ArrowUpOutlined /> 12%</Text>}
              formatter={(value) => `$${value.toLocaleString()}`}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        {/* Table Component */}
        <Col span={24} lg={12} style={{ marginBottom: '24px' }}>
          <Card title="Recent Customers">
            <Table 
              columns={tableColumns} 
              dataSource={tableData} 
              pagination={false}
              size="middle"
            />
          </Card>
        </Col>

        {/* List Component */}
        <Col span={24} lg={12} style={{ marginBottom: '24px' }}>
          <Card title="Recent Products">
            <List
              itemLayout="horizontal"
              dataSource={listData}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
                    description={item.description}
                  />
                  <div>
                    <ClockCircleOutlined style={{ marginRight: '8px', color: '#8c8c8c' }} />
                    <Text type="secondary">{item.time}</Text>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      {/* Collapse Component */}
      <Row>
        <Col span={24}>
          <Card title="System Information">
            <Collapse defaultActiveKey={['1']}>
              <Panel header="Recent Activities" key="1">
                <p>User signups increased by 25% this month compared to last month.</p>
                <p>Total page views reached 45,000 in the last 7 days.</p>
              </Panel>
              <Panel header="System Notifications" key="2">
                <p>System maintenance scheduled for next Sunday. The platform will be down for 2 hours.</p>
                <p>New feature deployment completed successfully.</p>
              </Panel>
              <Panel header="Performance Metrics" key="3">
                <p>Page load time decreased by 15% after the latest optimization update.</p>
                <p>Server response time averaging 120ms across all endpoints.</p>
              </Panel>
            </Collapse>
          </Card>
        </Col>
      </Row>

      <Divider />

      {/* Additional Ant Design Components */}
      <Row gutter={16}>
        <Col span={24}>
          <Title level={4}>Additional Components Available</Title>
          <Text type="secondary">
            Ant Design offers many more components like DatePicker, Modal, Form, Tabs, 
            Steps, Carousel, Menu, Pagination, Upload, and more that you can integrate 
            into your dashboard.
          </Text>
        </Col>
      </Row>
    </div>
  )
}