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

// function submitForm(form) {
//     event.preventDefault();

//     const formData = new FormData(form);
//     const formDataEntries = new URLSearchParams(formData).toString();

//     fetch(form.action, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: formDataEntries
//     })
//     .then(response => response.text())
//     .then(data => {
//         alert('Request sent successfully!');
//         hideContactForm(form.id);
//     })
//     .catch(error => console.error('Error:', error));

//     return false;
// }
function submitForm(form) {
    event.preventDefault();

    const formData = new FormData(form);
    const jsonData = {};

    // Convert FormData to JSON
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    fetch(form.action, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(jsonData) 
    })
    .then(response => {
        if (response.ok) {
            console.log('Form submitted successfully!');
        } else {
            console.error('Form submission failed:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
