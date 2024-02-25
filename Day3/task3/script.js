document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let emailInput = document.getElementById('email').value;
    fetch('https://api.collect-email.example.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: emailInput })
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for submitting your email!');
        } else {
            alert('Error: Failed to submit email. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error: Failed to submit email. Please try again later.');
    });
});      
 