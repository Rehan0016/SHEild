// Initialize EmailJS with your user ID
emailjs.init("your_user_id");

// Function to send the email using EmailJS
function sendEmail(contact) {
  var templateParams = {
    from_name: "Women Safety Map",
    to_name: contact.name,
    to_email: contact.email,
    message: "This is an emergency alert. Please respond immediately!",
  };

  emailjs.send("your_service_id", "your_template_id", templateParams)
    .then(function(response) {
      console.log('Email sent successfully!', response);
    }, function(error) {
      console.log('Failed to send email:', error);
    });
}

// Event listener for the SOS button
document.getElementById("sosButton").addEventListener("click", async function() {
    alert("🚨 SOS Activated! Calling & Sending Alerts...");

    // Get Emergency Contacts from localStorage
    let contacts = JSON.parse(localStorage.getItem("emergencyContacts")) || [];
    
    if (contacts.length > 0) {
        let firstContact = contacts[0];

        // Send WhatsApp message using the server endpoint
        fetch('/send-whatsapp', {
            method: 'POST',
            body: JSON.stringify({ phone: firstContact.phone }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => console.log('WhatsApp message sent successfully!', data))
        .catch(error => console.error('Error sending WhatsApp:', error));

        // Send Email using EmailJS
        sendEmail(firstContact);

        // Call the first emergency contact
        window.location.href = `tel:${firstContact.phone}`; 
    } else {
        alert("⚠ No emergency contacts found!");
    }
});
