import React from 'react';

const plans = [
  { name: 'Basic', price: '$10/month', features: ['Feature 1', 'Feature 2'] },
  { name: 'Standard', price: '$20/month', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
  { name: 'Premium', price: '$30/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
];

const PlansView = () => {
  return (
    <div>
      <h2>Service Plans</h2>
      <div>
        {plans.map((plan, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansView;
