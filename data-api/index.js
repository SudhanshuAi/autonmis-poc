const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;
app.use(cors());
app.get('/info', (req, res) => res.json({ id: 123, user: 'test-user', source: 'Data API' }));
app.listen(port, () => console.log(`Data API listening on port ${port}`));