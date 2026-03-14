import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Button, Layout } from "antd";
import Lab3 from "./Lab3";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

          <Link to="/" className="text-xl font-semibold">
            WEB2091 App
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">Trang chủ</Link>
            <Link to="/list" className="hover:text-gray-200">Danh sách</Link>
            <Link to="/add" className="hover:text-gray-200">Thêm mới</Link>
          </div>

          <div className="hidden md:flex items-center space-x-5">
            <Link to="/" className="hover:text-gray-200">Đăng nhập</Link>
            <Link to="/" className="hover:text-gray-200">Đăng ký</Link>
          </div>

        </div>
      </nav>

      {/* Layout */}
      <Layout style={{ margin: 20 }}>
        <Header style={{ color: "white" }}>Header</Header>

        <Content style={{ padding: 20 }}>
          <Lab3 />
        </Content>

        <Footer>Footer</Footer>
      </Layout>

      <Toaster />
    </>
  );
}

export default App;