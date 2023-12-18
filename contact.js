// Function to toggle the FAQs
document.addEventListener('DOMContentLoaded', function () {
    Array.from(document.getElementsByClassName('question'))
        .forEach(function (question) {
            question.addEventListener('click', function () {
                var answer = this.getElementsByClassName('answer')[0];
                if (answer.style.display == 'none') {
                    answer.style.display = 'block';
                } else {
                    answer.style.display = 'none';
                }
            });
        });
});

// Function to toggle the contact form
document.addEventListener('DOMContentLoaded', function () {
    contactBtn.addEventListener('click', function () {
        if (document.getElementById('contactForm').style.display == 'none') {
            document.getElementById('contactForm').style.display = 'block';
        } else {
            contactForm.style.display = 'none';
        }
    });
});

async function addCustomer() {

    var test = await fetch(`http://localhost:3000/customer`, {
        method: 'POST',
        body: JSON.stringify({
            name: `${document.getElementById('name').value}`,
            phone: `${document.getElementById('phone').value}`,
            email: `${document.getElementById('email').value}`,
            message: `${document.getElementById('message').value}`
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
}