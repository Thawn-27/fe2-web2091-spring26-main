import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Button, Layout } from "antd";
import Lab2 from "./lab2";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Chào mừng đến với WEB2091
        </h1>

        <Button type="primary">Click me</Button>

        <Layout style={{ marginTop: 20 }}>
          <Header style={{ color: "white" }}>Header</Header>

          <Content style={{ padding: 20 }}>
            {/* Bảng Lab2 hiển thị ở đây */}
            <Lab2 />
          </Content>

          <Footer>Footer</Footer>
        </Layout>
      </div>

      <Toaster />
    </>
  );
}

export default App;