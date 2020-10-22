/* eslint-disable promise/always-return */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { ReactText, useEffect, useState } from 'react';
import { Table } from 'antd';
import { TablePaginationConfig } from 'antd/lib/table';
import LayoutSidebar from '../../components/Layout/Layout';

const columns = [
  {
    title: 'User Id',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
];

interface Pagination {
  current?: number;
  pageSize: number;
}

const ViewCustomers: React.FC = () => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState('');
  const totalCount = 100;
  const pageSize = 20;

  // const getData = async (offset = 1, limit?: number, params = false) => {
  //   setisLoading(true);
  //   fetch(
  //     `https://jsonplaceholder.typicode.com/posts?&_limit=${limit}&_page=${offset}`
  //   )
  //     .then((r) => {
  //       // parse response
  //       const contentType = r.headers.get('content-type');
  //       if (contentType && contentType.indexOf('application/json') !== -1) {
  //         return r.json().then((data) => ({ status: r.status, body: data }));
  //       } else {
  //         return r.text().then((text) => ({ status: r.status, body: text }));
  //       }
  //     })
  //     .then((res) => {
  //       // get result

  //       setdata(res.body);
  //       setisLoading(false);
  //     })
  //     .catch((err) => {
  //       // handle error
  //       console.log(err);
  //     });
  // };
  const getData = (offset = 1, limit?: number, params = false) => {
    setisLoading(true);

    fetch(
      `https://jsonplaceholder.typicode.com/posts?&_limit=${limit}&_page=${offset}`,
      {
        method: 'GET', // || POST
      }
    )
      .then((r) => {
        // parse response
        // eslint-disable-next-line promise/no-nesting
        return r
          .json()
          .then((response) => ({ status: r.status, body: response }));
        // if (contentType && contentType.indexOf('application/json') !== -1) {
        // }
      })
      .then((res) => {
        // get result
        console.log('Result: ', res.body);
        setdata(res.body);
        setisLoading(false);
      })
      .catch((err) => {
        // handle error
        console.log(err);
      });
  };

  useEffect(() => {
    getData(undefined, pageSize);
  }, []);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    console.log({ pagination });
    getData(
      // pagination.current * pagination.pageSize - pagination.pageSize,
      pagination.current,
      pagination.pageSize
    );
  };

  return (
    <LayoutSidebar>
      <Table
        columns={columns}
        rowKey="key"
        dataSource={data}
        onChange={handleTableChange}
        loading={isLoading}
        pagination={{
          total: totalCount, // total count returned from backend
        }}
      />
      ;
    </LayoutSidebar>
  );
};

export default ViewCustomers;
