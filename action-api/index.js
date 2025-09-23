const express = require('express');
const cors = require('cors');
const app = express();
const port = 5003;
app.use(cors());
app.post('/execute', (req, res) => res.json({ success: true, message: 'Action successfully triggered on Action API!' }));
app.listen(port, () => console.log(`Action API listening on port ${port}`));