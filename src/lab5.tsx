import { Table, Image, Spin, Button, message, Popconfirm } from "antd";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

// 1. Khai báo Interface (để hết lỗi record: Story)
interface Story {
  id: number;
  title: string;
  author: string;
  image: string;
  description: string;
  createdAt: string;
}

const Lab5 = () => {
  const queryClient = useQueryClient();

  // 2. Lấy dữ liệu từ API
  const { data, isLoading, isError } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  // 3. Xử lý xóa truyện
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      message.success("Xóa truyện thành công!");
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  // 4. Khai báo Columns (Đây là phần quan trọng nhất - phải nằm TRONG Lab5)
  const columns = [
    { 
      title: "ID", 
      dataIndex: "id", 
      key: "id" 
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (url: string) => <Image src={url} width={50} fallback="https://via.placeholder.com/50" />,
    },
    { title: "Tên truyện", dataIndex: "title" },
    { title: "Tác giả", dataIndex: "author" },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      render: (date: string) => date ? new Date(date).toLocaleDateString("vi-VN") : "N/A",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_: any, record: Story) => (
<>
          <Popconfirm
            title="Delete the story"
            description="Are you sure to delete this story?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteMutation.mutate(record.id)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
          <Button type="primary">
            <Link to={`/edit/${record.id}`}>Edit</Link>
          </Button>
        </>
      ),
    },
  ];

  // 5. Kiểm tra trạng thái tải
  if (isLoading) return <div style={{ textAlign: 'center', padding: '50px' }}><Spin tip="Đang tải..." /></div>;
  
  if (isError) return <p style={{ color: 'red', textAlign: 'center' }}>Lỗi kết nối API! Hãy bật json-server.</p>;

  // 6. Trả về giao diện
  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
      <h2 style={{ marginBottom: '20px' }}>Quản lý danh sách truyện</h2>
      <Table 
        columns={columns} 
        dataSource={data} 
        rowKey="id" 
        pagination={{ pageSize: 5 }} 
      />
    </div>
  );
};

export default Lab5;