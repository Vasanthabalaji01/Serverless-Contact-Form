function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var formData = {
        name: name,
        email: email,
        message: message
    };

    // Send the form data to the Lambda function using fetch API
    fetch('YOUR_LAMBDA_FUNCTION_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').innerHTML = data.message;
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerHTML = 'Submission failed. Please try again.';
    });
}
