import { Button, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';

export const Authorization: React.FC = () => {
  return (
    <div className="w-96">
      <Form name="authorization">
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="bg-sky-500 mr-4">
            Log in
          </Button>
          <Link to="/register">
            <Typography.Text className="text-sky-500">Sign in</Typography.Text>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};
