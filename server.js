const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//mongoose.connect("mongodb://localhost:27017/userdb", { useNewUrlParser: true });

//let db = mongoose.connection;

const db = require("./config/default").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Check connection
/*db.once("open", (req, res) => {
  console.log("Connected to MongoDB");
});*/

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set a static folder
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/alumini", require("./routes/api/alumini"));
app.use("/api/feedback", require("./routes/api/feedback"));
app.use("/api/info", require("./routes/api/info"));
app.use("/api/payment", require("./routes/api/payment"));

const PORT = process.env.PORT || 5000;

// Doing this for all such pages is not feasible
// Therefore, we will make the public folder a static folder
/*app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});*/

// Testing Payment Gateway
/*app.post("/charge", (req, res) => {
  var token = req.body.stripeToken;
  var chargeAmount = req.body.chargeAmount;
  var charge = stripe.charges.create(
    {
      amount: chargeAmount,
      currency: "gbp",
      source: token
    },
    (err, charge) => {
      if (err & (err.type === "StripeCardError")) {
        console.log("Your card was declined");
      }
    }
  );

  console.log("Your payment was successful");
  res.redirect("/dashboard.html");
});
*/

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
