import { Button, Image, Upload, Form, Input, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export const Settings = () => {
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
          className="w-full h-96 p-2 flex-grow overflow-y-scroll"
          layout="vertical"
        >
          <Typography.Title level={3}>Information</Typography.Title>

          <Form.Item label="E-mail">
            <Input />
          </Form.Item>
          <Form.Item label="Username">
            <Input />
          </Form.Item>
          <Form.Item label="Name">
            <Input />
          </Form.Item>
          <Form.Item label="Instagram">
            <Input />
          </Form.Item>
          <Form.Item label="Telegram">
            <Input />
          </Form.Item>

          <Form.Item label="Description">
            <TextArea rows={6} />
          </Form.Item>
          <Form.Item noStyle>
            <Button type="primary" className="bg-sky-500 mr-4">
              Submit
            </Button>

            <Button>Reset</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
