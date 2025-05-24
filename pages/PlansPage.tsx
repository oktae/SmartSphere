import React from 'react';
import PlansView from '../components/PlansView';
import PaymentForm from '../components/PaymentForm';

const PlansPage = () => {
  return (
    <div>
      <h1>Our Plans</h1>
      <PlansView />
      <PaymentForm />
    </div>
  );
};

export default PlansPage;
