const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;

// Doing this for all such pages is not feasible
// Therefore, we will make the public folder a static folder
/*app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});*/

// Set a static folder
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/login", require("./routes/api/login"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
