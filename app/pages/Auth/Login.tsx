import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import styles from './Login.css';

const Login = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.wapper_login_form}>
        <Form style={{ width: '100%' }}>
          <Form.Item>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item>
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <Link className="login-form-forgot" to="/login">
              Forgot password
            </Link>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: '100%' }}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Link to={routes.DASHBOARD}>Go to dashboard</Link>
    </div>
  );
};

export default Login;
