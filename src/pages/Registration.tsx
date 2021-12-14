import { Button, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';

export const Registration: React.FC = () => {
  return (
    <div className="w-96">
      <Form name="registration" layout="vertical" requiredMark={false}>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder="Your email..." />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password placeholder="Your password..." />
        </Form.Item>

        <Form.Item
          name="Username"
          label="Username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Your username..." />
        </Form.Item>

        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Your name..." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="bg-sky-500 mr-4">
            Register
          </Button>
          <Link to="/login">
            <Typography.Text className="text-sky-500">Sign in</Typography.Text>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};
