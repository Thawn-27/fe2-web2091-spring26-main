import { Form, Input, Button, InputNumber, Card } from "antd";

const Lab3 = () => {

  // LOGIN
  const onLogin = (values: any) => {
    console.log("Login Data:", values);
  };

  // REGISTER
  const onRegister = (values: any) => {
    console.log("Register Data:", values);
  };

  // PRODUCT
  const onProduct = (values: any) => {
    console.log("Product Data:", values);
  };

  return (
    <div style={{ padding: 40, display: "grid", gap: 40 }}>

      {/* BÀI 1 LOGIN */}
      <Card title="Bài 1: Login Form" style={{ maxWidth: 400 }}>
        <Form layout="vertical" onFinish={onLogin}>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email" }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập password" }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>

        </Form>
      </Card>


      {/* BÀI 2 REGISTER */}
      <Card title="Bài 2: Register Form" style={{ maxWidth: 500 }}>
        <Form layout="vertical" onFinish={onRegister}>

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Nhập tên" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Nhập email" },
              { type: "email", message: "Email không đúng định dạng" }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Nhập số điện thoại" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Nhập password" },
              { min: 6, message: "Password tối thiểu 6 ký tự" }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Nhập lại password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Password không trùng");
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>

        </Form>
      </Card>


      {/* BÀI 3 PRODUCT */}
      <Card title="Bài 3: Product Form" style={{ maxWidth: 500 }}>
        <Form layout="vertical" onFinish={onProduct}>

          <Form.Item
            label="Tên sản phẩm"
            name="name"
            rules={[{ required: true, message: "Nhập tên sản phẩm" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Giá"
            name="price"
            rules={[{ required: true, message: "Nhập giá" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Số lượng"
            name="quantity"
            rules={[{ required: true, message: "Nhập số lượng" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Mô tả"
            name="description"
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Thêm sản phẩm
            </Button>
          </Form.Item>

        </Form>
      </Card>

    </div>
  );
};

export default Lab3;