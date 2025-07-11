import React from 'react';

const PaymentPage = () => {
  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Check your internet connection.');
      return;
    }

    const options = {
      key: 'RAZORPAY_KEY_ID', // ✅ Replace with your Razorpay Key ID
      amount: 100000, // 1000 INR in paise
      currency: 'INR',
      name: 'My Room Booking',
      description: 'Deluxe Room - 1 Night',
      image: 'https://yourwebsite.com/logo.png', // optional
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // 🔁 Call your backend to verify and confirm the booking
      },
      prefill: {
        name: 'Test User',
        email: 'testuser@example.com',
        contact: '9876543210',
      },
      notes: {
        address: 'Room Booking Address',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Book Your Room</h2>
      <p>Deluxe Room - ₹1000 per night</p>
      <button
        onClick={handlePayment}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3399cc',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Pay with Razorpay
      </button>
    </div>
  );
};

export default PaymentPage;
