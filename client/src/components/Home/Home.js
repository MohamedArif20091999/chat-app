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
  // const [userChat, setUserChat] = useState([]);

  const [selectedUser, setSelectedUser] = useState("");

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const chat = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getMyDetail());
  }, []);
  const setUser = (user) => {
    setSelectedUser(user);
    dispatch(getChat(user));

    console.log("CHAT", chat);
  };

  console.log(selectedUser);

  const renderItem = () => {
    if (allUsers.length) {
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
                  <List.Item
                    key={item._id}
                    onClick={() => setUser(item._id)}
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
            <Layout>
              <Content
                className="content"
                style={{ margin: "44px 300px 0", overflow: "initial" }}
              >
                <Chatscreen
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
  // <Layout>
  //   <Header className="header" style={{}}>
  //     <div className="logo"></div>
  //   </Header>
  //   <Layout>
  //     <Sider
  //       width={260}
  //       style={{
  //         overflow: "auto",
  //         height: "100vh",
  //         position: "fixed",
  //         left: 0,
  //       }}
  //       className="site-layout-background"
  //     >
  //       <div className="side-head-main">
  //         <h1 className="side-head">USERS</h1>
  //       </div>
  //       <List
  //         itemLayout="horizontal"
  //         dataSource={allUsers}
  //         rowKey="_id"
  //         renderItem={(item) => (
  //           <List.Item key={item._id} className="list-item">
  //             <a>
  //               <List.Item.Meta
  //                 avatar={
  //                   <Avatar
  //                     src={`https://ui-avatars.com/api/?name=${item.userName[0]}`}
  //                   />
  //                 }
  //                 title={<a href="https://ant.design">{item.userName}</a>}
  //               />
  //             </a>
  //           </List.Item>
  //         )}
  //       />
  //     </Sider>
  //     <Layout>
  //       <Content
  //         className="content"
  //         style={{ margin: "44px 300px 0", overflow: "initial" }}
  //       >
  //         <Chatscreen></Chatscreen>
  //       </Content>
  //     </Layout>
  //   </Layout>
  // </Layout>
};

export default Home;
