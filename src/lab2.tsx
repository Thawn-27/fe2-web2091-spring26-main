import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status: string) => (
      <span style={{ color: status === "active" ? "green" : "red" }}>
        {status}
      </span>
    ),
  },
  {
    title: "Action",
    render: (_: any, record: any) => (
      <>
        <button>Edit</button>
        <button style={{ marginLeft: 10 }}>Delete</button>
      </>
    ),
  },
];

const data = [
  {
    key: 1,
    id: 1,
    name: "John",
    email: "john@gmail.com",
    status: "active",
  },
  {
    key: 2,
    id: 2,
    name: "Anna",
    email: "anna@gmail.com",
    status: "inactive",
  },
  {
    key: 3,
    id: 3,
    name: "David",
    email: "david@gmail.com",
    status: "active",
  },
];

export default function UserTable() {
  return <Table columns={columns} dataSource={data} />;
}