import { Button, Form, Input, Typography } from 'antd';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector, useErrorMessage } from '../app/hooks';
import { User, WithPassword } from '../app/types';
import { loggingInErrorChanged, logIn } from '../features/auth/authSlice';

export type Credentials = Pick<
  User & WithPassword,
  'username' | 'email' | 'password'
>;

export const Authorization: React.FC = () => {
  const dispatch = useAppDispatch();

  const fieldsErrors = useAppSelector(
    (state) => state.auth.loggingInFieldsErrors
  );
  const isLoading = useAppSelector((state) => state.auth.isLoggingIn);
  const error = useAppSelector((state) => state.auth.loggingInError);

  useErrorMessage(error, loggingInErrorChanged);

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

  const submitHandler = (data: Credentials) => {
    dispatch(logIn(data));
  };

  return (
    <div className="w-96">
      <Form name="authorization" form={form} onFinish={submitHandler}>
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
              message: 'Будь ласка, введіть свій username!',
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
          <Input.Password placeholder="Ваш пароль..." />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-sky-500 mr-4"
            loading={isLoading}
          >
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
