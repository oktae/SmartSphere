import React, { useState } from 'react';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  const validateCardNumber = (number: string) => /^\d{16}$/.test(number);
  const validateExpiryDate = (date: string) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(date);
  const validateCvv = (cvv: string) => /^\d{3}$/.test(cvv);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCardNumber(cardNumber)) {
      setError('Invalid card number. It must be 16 digits.');
      return;
    }
    if (!validateExpiryDate(expiryDate)) {
      setError('Invalid expiry date. Use MM/YY format.');
      return;
    }
    if (!validateCvv(cvv)) {
      setError('Invalid CVV. It must be 3 digits.');
      return;
    }
    setError('');
    alert('Payment processed successfully!');
  };

  return (
    <div>
      <h2>Payment</h2>
      <form onSubmit={handlePayment}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            id="cardNumber"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            id="expiryDate"
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            id="cvv"
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default PaymentForm;
