const express = require('express');
const cors = require('cors');
const app = express();
const port = 5002;
app.use(cors());
app.get('/health', (req, res) => res.json({ status: 'OK: All systems normal from Status API', timestamp: new Date() }));
app.listen(port, () => console.log(`Status API listening on port ${port}`));