function sendEmail() {
    var formData = new FormData(document.getElementById('email-form'));

    // Use Fetch API to send a POST request
    fetch('/send-email', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        if (data === 'Email sent successfully!') {
            var alertDiv = document.querySelector('#alert');
            alertDiv.className = 'alert alert-success';
            alertDiv.innerHTML = '<p>Email sent successfully!</p>';

            setTimeout(function() {
                alertDiv.className = '';
                alertDiv.innerHTML = '';
            }, 5000);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    sendEmail();
});
