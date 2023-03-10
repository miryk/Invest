require('dotenv').config();
const cors = require('cors');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./routers/bonds.route')(app);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})