/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, Select, Radio } from 'antd';
import { NepaliDatePicker } from 'nepali-datepicker-reactjs';
import LayoutSidebar from '../../components/Layout/Layout';
import './calender.css';

const { Option } = Select;

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

// interface Props { }

const AddCustomer = () => {
  const [date, setDate] = useState<string>('');

  const onFinish = (values: void) => {
    console.log(values);
  };

  const prefixSelector = (
    <Form.Item name={['user', 'prefix']} noStyle>
      <Select style={{ width: 70 }}>
        <Option value="+977">+977</Option>
        <Option value="091">091</Option>
      </Select>
    </Form.Item>
  );

  return (
    <LayoutSidebar>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'fname']}
          label="First Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'lname']}
          label="Last Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[{ type: 'email', required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['password']}
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name={['user', 'password']}
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject(
                  'The two passwords that you entered do not match!'
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item name={['user', 'join-date']} label="Join Date">
          <NepaliDatePicker
            inputClassName="form-control"
            className=""
            value={date}
            onChange={(value: string) => setDate(value)}
            options={{ calenderLocale: 'ne', valueLocale: 'en' }}
          />
        </Form.Item>
        <Form.Item
          name={['user', 'age']}
          label="Age"
          rules={[{ type: 'number', min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={['user', 'phone']}
          label="Phone Number"
          rules={[
            { required: true, message: 'Please input your phone number!' },
          ]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name={['user', 'gender']}
          label="Gender"
          rules={[{ required: true }]}
        >
          <Select placeholder="Select an option" allowClear>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>

        <Form.Item name={['user', 'shift']} label="Shift">
          <Radio.Group>
            <Radio value="morning">Morning</Radio>
            <Radio value="afternoon">Afternoon</Radio>
            <Radio value="evening">Evening</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name={['user', 'remarks']} label="Remarks">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </LayoutSidebar>
  );
};

export default AddCustomer;
