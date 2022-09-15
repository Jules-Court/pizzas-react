const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json


app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
  





app.post("/form", async (req, res) => {
    const {fname, lname, address,basket} = req.body;


    console.log(req.body);


})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
