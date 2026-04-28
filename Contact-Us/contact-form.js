const formSubmit = document.getElementById('form-submit');
const successMessage = document.getElementById('message-success');

formSubmit.addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name && email && phone && message) {
        messageSuccess(`Thank you for contacting us, ${name}! We will get back to you shortly.`);
        formSubmit.reset();
    } else {
        alert('Please fill in all fields before submitting the form.');
    }
});


function messageSuccess(msg) {
    successMessage.querySelector('p').textContent = msg;
    successMessage.classList.add('show-message');

    setTimeout(() => {
        successMessage.classList.remove('show-message');
    }, 3000);
}