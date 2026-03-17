import { Layout } from "antd";
import { Link, Routes, Route } from "react-router-dom";
import Lab3 from "./lab3";
import Lab4 from "./lab4";
import { Toaster } from "react-hot-toast";

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

          <div className="flex gap-4">
            <Link to="/">Danh sách</Link>
            <Link to="/add">Thêm mới</Link>
          </div>
        </div>
      </nav>

      {/* Layout */}
      <Layout style={{ marginTop: 20 }}>
        <Header style={{ color: "white" }}>Header</Header>

        <Content style={{ padding: 20 }}>
          <Routes>
            <Route path="/" element={<Lab3 />} />
            <Route path="/add" element={<Lab4 />} />
          </Routes>
        </Content>

        <Footer>Footer</Footer>
      </Layout>

      <Toaster />
    </>
  );
}

export default App;