const express = require('express');
const app = express();
const routes = require('./routes/index');
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/', routes);

app.listen(port, () => console.log(`Server started on port ${port}`));