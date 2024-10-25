function showContactForm(formId) {
    document.querySelectorAll('.contactForm').forEach(form => {
        form.style.display = 'none';
    });
    document.querySelectorAll('.contactBtn').forEach(button => {
        button.style.display = 'none';
    });
    document.getElementById(formId).style.display = 'block';
}

function hideContactForm(formId) {
    document.getElementById(formId).style.display = 'none';
    document.querySelectorAll('.contactBtn').forEach(button => {
        button.style.display = 'inline-block';
    });
}

function submitForm(form) {
    event.preventDefault();

    const formData = new FormData(form);
    const jsonData = {};

    // Convert FormData to JSON
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

     // Disable submit button
     const submitButton = form.querySelector('button[type="submit"]');
     submitButton.disabled = true;
     submitButton.textContent = 'Submitting...';

    fetch(form.action, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(jsonData) 
    })
    .then(response => {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';

        if (response.ok) {
            alert('Form submitted successfully!');
            hideContactForm(form.id);
        } else {
            alert('Form submission failed:', response.statusText);
            console.error('Form submission failed:', response.statusText);
        }
    })
    .catch(error => {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
        console.error('Error:', error);
    });
}
