import React from 'react';
import { useHistory } from 'react-router-dom';
import LayoutSidebar from '../../components/Layout/Layout';
import AddCustomer from './AddCustomer';

const Customers = (): JSX.Element => {
  const history = useHistory();

  const slug = history.location.pathname.split('/')[2];

  console.log(slug);

  switch (slug) {
    case 'add':
      return <AddCustomer />;
    default:
      return (
        <LayoutSidebar>
          <h1>This is Customers</h1>
        </LayoutSidebar>
      );
  }
};

export default Customers;
