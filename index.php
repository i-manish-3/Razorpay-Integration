<button id="rzp-button1">Pay</button>
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script>
var options = {
    "key": "rzp_test_F53L1onDZpQADU", // Enter the Key ID generated from the Dashboard
    "amount": "60000", 
    "currency": "INR",
    "name": "Acme Corp", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "handler": function(response){
        console.log(response);
    },
    "prefill": {
        "name": "Gaurav Kumar", 
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}
</script>