const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Define your desired port

app.get('/api', (req, res) => {
  // Your API logic here
  const data = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
  ];
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
