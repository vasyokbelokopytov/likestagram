import { Button, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';

export const Authorization: React.FC = () => {
  return (
    <div className="w-96">
      <Form name="authorization">
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Будь ласка, введіть свій e-mail!',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Ваш e-mail..." />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Будь ласка, введіть свій nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Ваш username..." />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Будь ласка, введіть свій пароль!',
              whitespace: true,
            },
          ]}
        >
          <Input type="password" placeholder="Ваш пароль..." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="bg-sky-500 mr-4">
            Війти
          </Button>
          <Link to="/register">
            <Typography.Text className="text-sky-500">
              Зареєструватися
            </Typography.Text>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};
