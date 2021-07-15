import react, { useState, useEffect } from "react";
import { Form, Input, Button, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const dispatch = useDispatch();

  const openNotificationWithIcon = (type) => {
    notification["error"]({
      message: "Authentication Failed",
      description: "Bad credentials",
    });
  };
  const login = () => {
    dispatch(loginUser(email, password));
  };

  const auth = useSelector((state) => state.auth);
  if (auth === "auth_err") {
    openNotificationWithIcon();
  }

  useEffect(() => {
    if (auth == "auth_err") {
      openNotificationWithIcon();
    }
  }, []);

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
