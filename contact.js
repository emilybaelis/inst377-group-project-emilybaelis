// Function to toggle the FAQs
document.addEventListener('DOMContentLoaded', function() {
    Array.from(document.getElementsByClassName('question'))
        .forEach(function(question) {
        question.addEventListener('click', function() {
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
document.addEventListener('DOMContentLoaded', function() {
    contactBtn.addEventListener('click', function() {
        if (document.getElementById('contactForm').style.display == 'none') {
            document.getElementById('contactForm').style.display = 'block';
        } else {
            contactForm.style.display = 'none';
        }
    });
});
