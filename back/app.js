const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const crypto = require("crypto-js");
var key = "password@111";

const pool = require("./db");


app.use(bodyParser.json()); // for parsing application/json

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.post("/form", async (req, res) => {
  const { fname, lname, address, basket } = req.body;
  console.log(req.body);
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



/* DB PROGRESS FOR COMMAND */

// GET Commande where take = 0 (donc celle qui sont pas prise)
// app.get('/produit', async (req, res) => {
//   try {
//       const allProduit = await pool.query("SELECT * FROM Commande WHERE take = 0");
//       res.json(allProduit.rows);
//   }
//   catch (err) {
//       console.error(err);
//   }
// });


// GET Commande where take = id_livreur (donc celle qui prise par le livreur en question)
// app.get('/produit', async (req, res) => {
//   try {
//       const id_livreur = await pool.query("SELECT id_livreur FROM Livreur)
//       const allProduit = await pool.query("SELECT * FROM Commande WHERE take = $1, [id_livreur]");
//       res.json(allProduit.rows);
//   }
//   catch (err) {
//       console.error(err);
//   }
// });


// CREATE Commande
// app.post("/produit", async (req, res) => {
//   try {
//       const { name } = req.body;
//     put data from command database
//       const newProduit = await pool.query("INSERT INTO Commande VALUES () RETURNING *", [name]);
//       res.json(newProduit.rows[0]);
//   }
//   catch (e) {
//       console.error(e);
//   }
// })


// TODO : UPDATE Commande
// app.post("/produit", async (req, res) => {
//   try {
//       const { name } = req.body;
//     put data from command database
//       const newProduit = await pool.query("ALTER TABLE Commande );
//       res.json(newProduit.rows[0]);
//   }
//   catch (e) {
//       console.error(e);
//   }
// })


// TODO : REMOVE Commande
// app.post("/produit", async (req, res) => {
//   try {
//       const { name } = req.body;
//     put data from command database
//       const newProduit = await pool.query("DELETE FROM Produit );
//       res.json(newProduit.rows[0]);
//   }
//   catch (e) {
//       console.error(e);
//   }
// })

/* */
const PORT = process.env.PORT || 8081;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
