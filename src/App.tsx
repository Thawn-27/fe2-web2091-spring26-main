import { Layout } from "antd";
import { Link, Routes, Route } from "react-router-dom";
import Lab3 from "./lab3";
import Lab4 from "./lab4";
import Lab5 from "./lab5";
import { Toaster } from "react-hot-toast";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">WEB2091 App</Link>
          
          <div className="flex gap-4">
            <Link to="/" className="hover:text-gray-200">Đăng nhập</Link>
            <Link to="/add" className="hover:text-gray-200">Thêm</Link>
            <Link to="/lab5" className="hover:text-gray-200 font-bold">Danh sách</Link>
          </div>
        </div>
      </nav>

      <Layout style={{ marginTop: 20 }}>
        <Header style={{ color: "white" }}>Quản lý truyện - Lab 5</Header>
        
        <Content style={{ padding: 20 }}>
          <Routes>
            <Route path="/" element={<Lab3 />} />
            <Route path="/add" element={<Lab4 />} />
            <Route path="/lab5" element={<Lab5 />} />
          </Routes>
        </Content>

        <Footer style={{ textAlign: 'center' }}>FPT Polytechnic ©2026</Footer>
      </Layout>

      <Toaster />
    </>
  );
}

export default App;