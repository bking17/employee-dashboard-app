const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 5000;


const employees = 
[
  {
    "id":1,
    "name":"Alice",
    "department":"Engineering",
    "active":true
  },
  {
    "id":2,
    "name":"Bob",
    "department":"HR",
    "active":false
  }
]

app.get("/employees", (req, res) => {
    res.json(employees);
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});