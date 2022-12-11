require("dotenv").config();
const axios = require("axios");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.get("/search", async (req, res) => {
  var param = req.query.search;
  if (param) {
    var result = await axios.post(
      `${process.env.api}/getFullAnswer?question=${param}`
    );
    res.render("table_output.ejs", {
      data: result.data.out,
    });
  } else {
    res.render("search.ejs");
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
