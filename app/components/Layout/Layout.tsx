import React, { useState, memo } from 'react';
import { Layout, Menu } from 'antd';

import { useHistory } from 'react-router-dom';

import { UserOutlined } from '@ant-design/icons';

import styles from './Layout.css';

const { Header, Content, Footer, Sider } = Layout;

interface Props {
  children: any;
}

// eslint-disable-next-line react/display-name
const LayoutSidebar = memo(
  ({ children }: Props): JSX.Element => {
    const history = useHistory();
    const { pathname }: any = history.location;
    const [currentMenu, setcurrentMenu] = useState();

    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={() => history.push('/dashboard')}
              // className={
              //   pathname === currentMenu
              //     ? `ant-menu-item-selected`
              //     : 'ant-menu-item'
              // }
            >
              Dashboard
            </Menu.Item>
            <Menu.SubMenu
              key="customers"
              icon={<UserOutlined />}
              title="Customers"
            >
              <Menu.Item key="3" onClick={() => history.push('/customers/add')}>
                Add
              </Menu.Item>
              <Menu.Item key="4">View</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="enquiry" icon={<UserOutlined />} title="Enquiry">
              <Menu.Item key="5" onClick={() => history.push('/enquiry/add')}>
                Add
              </Menu.Item>
              <Menu.Item key="6">View</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header
            className={styles.site_layout_background}
            style={{ padding: 0 }}
          />
          <Content
            style={{
              margin: '24px 16px 0',
              overflow: 'scroll',
              maxHeight: '80vh',
            }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: 'center' }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Complete Gym System ©2020 Created by Uzz
          </Footer>
        </Layout>
      </Layout>
    );
  }
);

export default LayoutSidebar;
