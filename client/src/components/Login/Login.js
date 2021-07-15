import react, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const dispatch = useDispatch();
  const login = () => {
    console.log(email, password);
    dispatch(loginUser(email, password));
  };

  return (
    <div className="Login">
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
          <Button onClick={login} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <p>
          <a onClick={() => history.push("/")}>
            New here create an account?<u> SignUp</u>
          </a>
        </p>
      </Form>
    </div>
  );
};

export default Login;
