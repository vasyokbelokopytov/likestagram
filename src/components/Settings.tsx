import { Button, Image, Upload, Form, Input, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { User } from '../app/types';
import { editAccount } from '../features/auth/authSlice';
import { useEffect } from 'react';

const { TextArea } = Input;

export const Settings = () => {
  const account = useAppSelector((state) => state.auth.account);
  const fieldsErrors = useAppSelector(
    (state) => state.auth.accountEditingFieldsErrors
  );
  const dispatch = useAppDispatch();

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

  const resetHandler = () => {
    form.resetFields();
  };

  const submitHandler = (user: User) => {
    dispatch(editAccount(user));
  };

  return (
    <div className="h-full flex justify-around">
      <div className="w-1/3 flex-shrink-0 flex flex-col justify-center items-center p-4">
        <Image
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          width={190}
        />
        <Upload>
          <Button icon={<UploadOutlined />} className="w-48 mt-4">
            Click to Upload
          </Button>
        </Upload>
      </div>
      <div className="w-1/2 h-full flex-shrink-0 p-4 flex flex-col items-center justify-center overflow-y-hidden">
        <Form
          form={form}
          className="w-full h-96 p-2 flex-grow overflow-y-scroll"
          layout="vertical"
          onFinish={submitHandler}
          requiredMark={false}
        >
          <Typography.Title level={3}>Information</Typography.Title>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'E-mail is not valid!',
              },
              {
                required: true,
                message: 'Please, enter your e-mail!',
                whitespace: true,
              },
              {
                max: 254,
                message: 'Email must be 254 characters or fewer!',
              },
            ]}
          >
            <Input placeholder="Your e-mail..." />
          </Form.Item>
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: 'Please, enter your username!',
                whitespace: true,
              },
              {
                max: 150,
                message: 'Username must be 150 characters or fewer!',
              },
            ]}
          >
            <Input placeholder="Your username..." />
          </Form.Item>
          <Form.Item
            name="first_name"
            label="First name"
            rules={[
              {
                required: true,
                message: 'Please, enter your first name!',
                whitespace: true,
              },
              {
                max: 150,
                message: 'First name must be 150 characters or fewer!',
              },
            ]}
          >
            <Input placeholder="First name..." />
          </Form.Item>

          <Form.Item
            name="last_name"
            label="Last name"
            rules={[
              {
                required: true,
                message: 'Please, enter your last name!',
                whitespace: true,
              },
              {
                max: 150,
                message: 'Last name must be 150 characters or fewer!',
              },
            ]}
          >
            <Input placeholder="Your last name..." />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            initialValue={account?.description}
            rules={[
              {
                max: 2000,
                message: 'Description must be 2000 characters or fewer',
              },
            ]}
          >
            <TextArea rows={6} />
          </Form.Item>
          <Form.Item noStyle>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-sky-500 mr-4"
            >
              Apply
            </Button>

            <Button onClick={resetHandler}>Reset</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
