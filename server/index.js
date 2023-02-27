const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const adresses = require("./cryptography");

app.use(cors());
app.use(express.json());

const balances = adresses.generate();
console.log(balances);

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const data = balances.find((obj) => obj.address === address);
  let balance = 0
  if(data!==undefined){
    balance = data.balance;
  }
  res.send({ balance });
});

app.get("/info", (req, res) => {
  res.send({ balances });
});

app.post("/transfer", (req, res) => {
  const { sender, recipient, amount } = req.body;
  const dataSender = balances.find((obj) => obj.address === sender);
  const dataRecipient = balances.find((obj) => obj.address === recipient);

  if (dataSender.balance < amount) {
    res.status(400).send({ message: "Not enough founds!" });
  } else {
    dataRecipient.balance = dataRecipient.balance + amount;
    dataSender.balance = dataSender.balance - amount;
    res.send({ balance: dataSender.balance });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
