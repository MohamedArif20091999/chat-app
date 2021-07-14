import react, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../actions/index";

import "./register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  let history = useHistory();

  const register = (userName, email, password) => {
    dispatch(registerUser(userName, email, password));
  };

  return (
    <div className="Register">
      <Form
        className="form"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        //   onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
      >
        <h1>Welcome to chatapp</h1>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input onChange={(e) => setUserName(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            onClick={() => register(userName, email, password)}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
        <p>
          <a onClick={() => history.push("/login")}>
            Already have an account?<u> login</u>
          </a>
        </p>
      </Form>
    </div>
  );
};

export default Register;
