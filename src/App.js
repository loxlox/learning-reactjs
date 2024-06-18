import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import FetchApi from "./fetchApi";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [staySignIn, setStaySignIn] = useState(false);

  const handleSubmitForm = (values) => {
    // const payload = {
    //   Email: values.username,
    //   Password: values.password,
    //   StaySignIn: values.staySignIn,
    // };

    // navigate("/dashboard");
    window.location.href = "/dashboard";

    // FetchApi("http://192.168.50.197:3000/users/login", "POST", payload).then(
    //   (response) => console.log(response)
    // );
  };

  return (
    <div className="App">
      <Row>
        <Col md={{ span: 6, offset: 9 }}>
          <Form
            autoComplete="off"
            form={form}
            onFinish={(values) => handleSubmitForm(values)}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input username!" },
                // { pattern: /^[A-Za-z]+$/, message: "Please input username only in alphabet!" },
              ]}
            >
              <Input
                placeholder="Input username"
                // value={email}
                // onChange={(evt) => setEmail(evt.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input password!" },
                // { pattern: /^[a-zA-Z0-9]/, message: "Please input password only in alphanumeric!" },
              ]}
            >
              <Input.Password
                placeholder="Input password"
                // value={password}
                // onChange={(evt) => setPassword(evt.target.value)}
              />
            </Form.Item>
            <Form.Item name="staySignIn" valuePropName="checked">
              <Checkbox
              // checked={staySignIn}
              // onChange={(evt) => setStaySignIn(evt.target.checked)}
              >
                Stay Sign In
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
