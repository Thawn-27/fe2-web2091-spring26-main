import { Form, Input, Button } from "antd";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";


interface Story {
  title: string;
  author?: string;
  image?: string;
  description?: string;
}

const Lab4 = () => {
  const mutation = useMutation({
    mutationFn: async (data: Story) => {
      const res = await axios.post("http://localhost:3000/stories", data);
      return res.data;
    },

    onSuccess: () => {
      toast.success("Thêm thành công");
    },

    onError: () => {
      toast.error("Lỗi rồi");
    },
  });

  const onFinish = (values: Story) => {
    mutation.mutate(values);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Thêm truyện</h2>

      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
        <Form.Item
          label="Tên truyện"
          name="title"
          rules={[{ required: true, message: "Nhập tên truyện" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Tác giả" name="author">
          <Input />
        </Form.Item>

        <Form.Item label="Image" name="image">
          <Input />
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={mutation.isPending}>
          Thêm
        </Button>
      </Form>
    </div>
  );
};

export default Lab4;