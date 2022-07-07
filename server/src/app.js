const express = require('express');
const cors = require('cors');
const router = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  console.log(process.env.APP_NAME);
  res.send('hello from container');
})

app.use('/api', router);

// error handling

module.exports = app;
