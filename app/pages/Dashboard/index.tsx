import React from 'react';
import { Card, Col, Row } from 'antd';
import LayoutSidebar from '../../components/Layout/Layout';

const Dashboard = (): JSX.Element => {
  return (
    <LayoutSidebar>
      <div className="site-card-wrapper">
        <Row gutter={16} style={{ marginBottom: '2rem' }}>
          <Col span={8}>
            <Card title="Total Earning" bordered={false}>
              <div style={{ backgroundColor: '#ded677' }}>Rs. 80,000</div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Monthly Earning" bordered={false}>
              <div style={{ backgroundColor: '#72bfdc' }}>Rs. 15,000</div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Weekly Earning" bordered={false}>
              <div style={{ backgroundColor: '#9797e2' }}>Rs. 5,000</div>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginBottom: '2rem' }}>
          <Col span={8}>
            <Card title="Total Customers" bordered={false}>
              <div style={{ backgroundColor: '#ded677' }}>48</div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Monthly Customers" bordered={false}>
              <div style={{ backgroundColor: '#72bfdc' }}>8</div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Weekly Customers" bordered={false}>
              <div style={{ backgroundColor: '#9797e2' }}>2</div>
            </Card>
          </Col>
        </Row>
      </div>
    </LayoutSidebar>
  );
};

export default Dashboard;
