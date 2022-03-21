const express = require('express');
const cors = require('cors') // This is new
const app = express();

require('./server/config/mongoose.config');

app.use(cors()) // This is new
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const port = 8000;
require('./server/routes/product.routes')(app); // This is new





app.listen(port, () => console.log(`Listening on port: ${port}`) );
