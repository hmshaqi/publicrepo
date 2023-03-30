const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello world received a request.");

  const target = process.env.TARGET || "World";
  res.send(`Hello there v2 here, ${target}!`);

});


app.get("/cpu-intensive", (req, res) => {
 let x = 0.0001;
  for (i = 0; i <= 1000000; i++) {
    x += Math.sqrt(x);
  }
  res.send("OK!");
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Hello world listening on port", port);
});
