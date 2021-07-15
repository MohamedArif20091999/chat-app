import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getMyDetail, getChat } from "../../actions";
import { Layout, Menu, List, Avatar, Table } from "antd";
import Chatscreen from "./Chatscreen";

import "./home.css";
import { set } from "mongoose";

const { SubMenu } = Menu;

const { Header, Content, Sider } = Layout;

const Home = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedUserName, setSelectedUserName] = useState("");

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const chat = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getMyDetail());
  }, []);
  const setUser = (user, name) => {
    setSelectedUser(user);
    setSelectedUserName(name);
    dispatch(getChat(user));
  };

  console.log(selectedUser);

  const renderItem = () => {
    if (allUsers.length) {
      return (
        <Layout>
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
                  <List.Item
                    key={item._id}
                    onClick={() => setUser(item._id, item.userName)}
                    className="list-item"
                  >
                    <a>
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            src={`https://ui-avatars.com/api/?name=${item.userName[0]}`}
                          />
                        }
                        title={<a href="">{item.userName}</a>}
                      />
                    </a>
                  </List.Item>
                )}
              />
            </Sider>
            <Layout className="content">
              <Content style={{ margin: "44px 300px 0", overflow: "initial" }}>
                <Chatscreen
                  selectedUserName={selectedUserName}
                  updateState={chat}
                  selectedUser={selectedUser}
                  chat={chat}
                ></Chatscreen>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      );
    }
    return <div></div>;
  };

  return renderItem();
};

export default Home;
