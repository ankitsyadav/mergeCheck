const express = require('express');

const app = express();

app.get('/merge-check', (req, res) => {
  res.send('Merge check endpoint is working!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

