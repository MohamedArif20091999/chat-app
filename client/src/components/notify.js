import { Button, notification, Space } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Notify = () => {
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth == "auth_err") {
      openNotificationWithIcon();
    }
  }, []);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Authentication Failed",
      description: "Bad credentials",
    });
  };
};

export default Notify;
