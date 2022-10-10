const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const crypto = require("crypto-js");
var key = "password@111";
const pool = require("./db");
const jwt = require("jsonwebtoken");
const { kdf } = require("crypto-js");

const JWT_SECRET = "njfsrgqeriogrqn33547)cjnvcmzfmzé634TR";

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
  const query =
    "INSERT INTO Commande (LastName, FirstName, Prix, Contenu, Addresse, Phone, LivreurID) VALUES ($1, $2, $3, $4, $5, $6, NULL) RETURNING *";
  const values = [
    lname,
    fname,
    basket.totalPrice,
    basket.basket,
    address,
    phone,
  ];

  pool
    .query(query, values)
    .then((resp) => {
      res.json(resp.row);
    })
    .catch((e) => console.error(e.stack));
});

app.post("/sign-up", async (req, res) => {
  const { fname, lname, mail } = req.body;
  const password = cryptage(req.body.password);

  const query =
    "INSERT INTO Livreur (LastName, FirstName, Email, Password) VALUES ($1, $2, $3, $4) RETURNING *";

  const values = [lname, fname, mail, password];
  pool
    .query(query, values)
    .then((resp) => {
      res.send({ status: "ok" });
    })
    .catch((e) => res.send({ status: "error, user exists" }));
});

app.post("/login", async (req, res) => {
  const mail = req.body.mail;
  const mdp = req.body.password;
  try {
    const livreur = await pool.query(
      "SELECT * FROM Livreur WHERE Email LIKE $1",
      [mail]
    );
    if (decrypt(livreur.rows[0].password) === mdp) {
      const token = jwt.sign(
        { email: livreur.rows[0].email, id: livreur.rows[0].livreurid },
        JWT_SECRET
      );

      if (res.status(201)) {
        console.log(livreur.rows[0].livreurid)
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ status: "erreur" });
      }
    }
    res.json({ status: "error", error: "Invalid Password" });
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user.email);
    const livreur = await pool.query(
      "SELECT * FROM Livreur WHERE Email LIKE $1",
      [user.email]
    );
    console.log(livreur.rows)
    if(livreur.rows[0].email===user.email){
      res.send({status:"ok", data:user})
    }
    
  } catch (error) {}
});

app.get("/form", async (req, res) => {
  try {
    const allProduit = await pool.query(
      "SELECT * FROM Commande WHERE LivreurId is NULL"
    );
    res.json(allProduit.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/formsolo", async (req, res) => {
  try {
    const allProduit = await pool.query(
      "SELECT * FROM Commande WHERE LivreurId is not NULL"
    );
    res.json(allProduit.rows);
  } catch (err) {
    console.error(err.message);
  }
});

/* CRYPTAGE */
function cryptage(data) {
  return crypto.AES.encrypt(data, key).toString();
}

function decrypt(dataCrypted) {
  return crypto.AES.decrypt(dataCrypted, key).toString(crypto.enc.Utf8);
}

const PORT = process.env.PORT || 8081;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
