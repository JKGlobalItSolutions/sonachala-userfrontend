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
      alert('Razorpay SDK failed to load.');
      return;
    }

    const options = {
      key: 'RAZORPAY_KEY_ID', // 🔁 Replace this with your actual key
      amount: 100000, // ₹1000 in paise
      currency: 'INR',
      name: 'My Hotel',
      description: 'Deluxe Room Booking',
      image: 'https://yourdomain.com/logo.png',
      handler: function (response) {
        alert(`Payment successful! ID: ${response.razorpay_payment_id}`);
        // 🔁 Backend call panna vendiyathu - booking confirm pannanum
      },
      prefill: {
        name: 'Guest Name',
        email: 'guest@example.com',
        contact: '9876543210',
      },
      method: {
        upi: true, // ✅ Only UPI
        card: false,
        netbanking: false,
        wallet: false,
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
        Pay with UPI
      </button>
    </div>
  );
};

export default PaymentPage;
