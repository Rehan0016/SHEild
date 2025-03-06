const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Mock function to simulate sending an SOS alert
const sendSOSAlert = (userId) => {
  // Logic to send an alert (could be SMS, email, etc.)
  console.log(`SOS alert sent for user: ${userId}`);
  
  // You can replace this with actual logic like Twilio for SMS or Email API
  return 'SOS Alert Sent to Emergency Contacts';
};

// Route to handle SOS button press
app.post('/api/sos', (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  const alertMessage = sendSOSAlert(userId);
  return res.status(200).json({ message: alertMessage });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
