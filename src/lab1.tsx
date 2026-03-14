//Bài 1
import { Layout, Menu } from "antd";

const { Header, Sider, Content } = Layout;

export default function Dashboard() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      
     
      <Sider>
        <Menu
          theme="dark"
          mode="inline"
          items={[
            { key: 1, label: "Dashboard" },
            { key: 2, label: "Users" },
            { key: 3, label: "Settings" }
          ]}
        />
      </Sider>

      <Layout>
        
        <Header style={{ color: "white" }}>
          Admin Dashboard
        </Header>

       
        <Content style={{ padding: 20 }}>
          Nội dung trang
        </Content>
      </Layout>

    </Layout>
  );
}
//Bài 2: Tạo Form đăng ký
import { Form, Input, Button } from "antd";

export default function RegisterForm() {

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form onFinish={onFinish} style={{ maxWidth: 400 }}>

      <Form.Item
        name="name"
        rules={[{ required: true, message: "Nhập tên" }]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, message: "Nhập email" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Nhập password" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>

    </Form>
  );
}
//Bài 3: Tạo bảng danh sách User
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
  },
];

const data = [
  {
    key: 1,
    name: "Nguyen Van A",
    email: "a@gmail.com",
    role: "Admin",
  },
  {
    key: 2,
    name: "Tran Van B",
    email: "b@gmail.com",
    role: "User",
  },
];

export default function UserTable() {
  return <Table columns={columns} dataSource={data} />;
}
//Bài 4: Modal chứa form thêm User
import { Modal, Button, Form, Input } from "antd";
import { useState } from "react";

export default function AddUserModal() {

  const [open, setOpen] = useState(false);

  const onFinish = (values) => {
    console.log(values);
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Thêm User
      </Button>

      <Modal
        title="Thêm User"
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <Form onFinish={onFinish}>

          <Form.Item name="name">
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item name="email">
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item name="role">
            <Input placeholder="Role" />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Thêm
          </Button>

        </Form>
      </Modal>
    </>
  );
}