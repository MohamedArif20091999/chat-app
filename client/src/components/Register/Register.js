import react from "react";
import { Form, Input, Button } from "antd";
import "./register.css";

const Register = () => {
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
          <Input />
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
          <Input />
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
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <p>
          <a>
            Already have an account?<u> login</u>
          </a>
        </p>
      </Form>
    </div>
  );
};

export default Register;
