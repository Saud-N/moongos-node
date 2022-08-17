const express = require("express"); // importing express
const app = express(); // to create our app
app.use(express.json());
const mongoose = require("mongoose"); //importing mongoose

mongoose.connect("mongodb://localhost:27017/Saud", () => {
  console.log("connected"); //connecting to mongoose//
});

const schema = new mongoose.Schema({
  name: String, // created a collection SHAPE !
});

const User = mongoose.model("User", schema); // creating the actull collection!!

// route for the API
app.get("/api", async (req, res) => {
  // save this pattern like u have to REQ before RES!

  let data = await User.find({}); // fetching the data from the database
  res.json(data);
});

app.post("/api", async (req, res) => {
  console.log(req.body);//
  await User.create(req.body);
  res.sendStatus(200);
  //posting on mongoose
});

app.listen(5000, () => {
  console.log("running on port 5000"); // starting up our backend
});
