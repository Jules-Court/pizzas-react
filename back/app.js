const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const crypto = require("crypto-js");
var key = "password@111";

const pool = require("./db");
const { application } = require("express");

app.use(bodyParser.json()); // for parsing application/json
app.use(express.json()); // => req.body

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.post("/form", async (req, res) => {
  const { fname, lname, address, basket, phone } = req.body;
  const newCommand = await pool.query(
    "INSERT INTO Commande (LastName, FirstName, Prix, Contenu, Addresse, Phone) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [lname, fname, basket.totalPrice, basket.basket, address, phone]
  );
  res.json(newCommand);
  
});



/* CRYPTAGE */
function cryptage(data) {
  var encrypted = crypto.AES.encrypt(data, key).toString();
  console.log("crypt");
  console.log(encrypted);
  return encrypted;
}

function decrypt(dataCrypted) {
  var decrypted = crypto.AES.decrypt(dataCrypted, key).toString(
    crypto.enc.Utf8
  );
  console.log(decrypted);
  return decrypted;
}


const PORT = process.env.PORT || 8081;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
