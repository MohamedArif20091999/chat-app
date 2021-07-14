import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../actions";
import { Layout, Menu, List, Avatar, Table } from "antd";
import Chatscreen from "./Chatscreen";

import "./home.css";

const { SubMenu } = Menu;

const { Header, Content, Sider } = Layout;

const Home = () => {
  const [selectedUser, setSelectedUser] = useState("");

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <Layout>
      <Header className="header" style={{}}>
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
          <div className="side-head-main">
            <h1 className="side-head">USERS</h1>
          </div>
          <List
            itemLayout="horizontal"
            dataSource={allUsers}
            rowKey="_id"
            renderItem={(item) => (
              <List.Item key={item._id} className="list-item">
                <a>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://ui-avatars.com/api/?name=${item.userName[0]}`}
                      />
                    }
                    title={<a href="https://ant.design">{item.userName}</a>}
                  />
                </a>
              </List.Item>
            )}
          />
        </Sider>
        <Layout>
          <Content
            className="content"
            style={{ margin: "44px 300px 0", overflow: "initial" }}
          >
            <Chatscreen></Chatscreen>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
