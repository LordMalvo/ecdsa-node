const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "0x1": 50,
  "0x2": 100,
  "0x3": 150,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/transfer", (req, res) => {
  const { sender, recipient, amount } = req.body;

  const balance = balances[address] || 0;
  res.send({ balance });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
