import { Button, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { User, WithPassword } from '../app/types';
import { useAppDispatch, useAppSelector, useErrorMessage } from '../app/hooks';

import { register, registrationErrorChanged } from '../features/auth/authSlice';
import { useEffect } from 'react';

export const Registration: React.FC = () => {
  const fieldsErrors = useAppSelector(
    (state) => state.auth.registrationFieldsErrors
  );
  const error = useAppSelector((state) => state.auth.registrationError);
  const isLoading = useAppSelector((state) => state.auth.isRegistering);

  const dispatch = useAppDispatch();

  useErrorMessage(error, registrationErrorChanged);

  const [form] = Form.useForm();

  useEffect(() => {
    if (fieldsErrors) {
      const errorFields = (
        Object.keys(fieldsErrors) as Array<keyof typeof fieldsErrors>
      ).map((field) => ({
        name: field,
        errors: fieldsErrors[field],
      }));

      form.setFields(errorFields);
    }
  }, [fieldsErrors, form]);

  const submitHandler = (user: User & WithPassword) => {
    dispatch(register(user));
  };

  return (
    <div className="w-96">
      <Form
        form={form}
        name="registration"
        layout="vertical"
        requiredMark={false}
        onFinish={submitHandler}
      >
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
          label="Username"
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
          <Button
            type="primary"
            htmlType="submit"
            className="bg-sky-500 mr-4"
            loading={isLoading}
          >
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
