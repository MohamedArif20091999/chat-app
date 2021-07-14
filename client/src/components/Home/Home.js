import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../actions";
import { Layout, Menu, List, Avatar, Table } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "./home.css";

const { SubMenu } = Menu;

const { Header, Content, Sider } = Layout;

const Home = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  console.log("Put me in comp:", allUsers);

  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

  return (
    <Layout>
      <Header className="header">
        <div className="logo"></div>
      </Header>
      <Layout>
        <Sider
          width={260}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
          className="site-layout-background"
        >
          <List
            itemLayout="horizontal"
            dataSource={allUsers}
            rowKey="_id"
            renderItem={(item) => (
              <List.Item key={item._id}>
                {/* <h1>{rowKey}</h1> */}
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://ui-avatars.com/api/?name=${item.userName[0]}`}
                    />
                  }
                  title={<a href="https://ant.design">{item.userName}</a>}
                />
              </List.Item>
            )}
          />
        </Sider>
      </Layout>
    </Layout>
  );
};

export default Home;
