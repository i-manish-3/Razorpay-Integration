// Replace with your Razorpay API key
const razorpayApiKey = 'YOUR_RAZORPAY_API_KEY';

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const payButton = document.getElementById('pay-button');

payButton.addEventListener('click', () => {
    const name = nameInput.value;
    const email = emailInput.value;

    // Create a Razorpay order
    fetch('/create-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    })
    .then(response => response.json())
    .then(data => {
        const options = {
            key: razorpayApiKey,
            amount: data.amount,
            currency: data.currency,
            name: 'Course Payment',
            description: 'Learn Web Development Course',
            order_id: data.id,
            handler: function (response) {
                // Handle successful payment
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            },
            prefill: {
                name,
                email,
            },
            theme: {
                color: '#007BFF',
            },
        };
        
        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
    })
    .catch(error => {
        console.error('Error creating Razorpay order:', error);
        alert('Payment failed. Please try again later.');
    });
});
