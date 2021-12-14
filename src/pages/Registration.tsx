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
              message: 'E-mail невалідний!',
            },
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
          name="password"
          label="Пароль"
          rules={[
            {
              required: true,
              message: 'Будь ласка, введіть свій пароль!',
              whitespace: true,
            },
          ]}
        >
          <Input.Password placeholder="Ваш пароль..." />
        </Form.Item>

        <Form.Item
          name="username"
          label="Nickname"
          rules={[
            {
              required: true,
              message: 'Будь ласка, введіть свій nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Ваш nickname..." />
        </Form.Item>

        <Form.Item
          name="first_name"
          label="Ім'я"
          rules={[
            {
              required: true,
              message: "Будь ласка, введіть своє ім'я!",
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Ваше ім'я..." />
        </Form.Item>

        <Form.Item
          name="last_name"
          label="Прізвище"
          rules={[
            {
              required: true,
              message: 'Будь ласка, введіть своє прізвище!',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Ваше прізвище..." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="bg-sky-500 mr-4">
            Зареєструватися
          </Button>
          <Link to="/login">
            <Typography.Text className="text-sky-500">Війти</Typography.Text>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};
