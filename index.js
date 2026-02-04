const express = require('express');

const app = express();

app.get('/merge-check', (req, res) => {
  res.send('Merge check endpoint is working! my name is ridhi');
});

app.get((req, res) => {
  res.status(404).send('Endpoint not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

