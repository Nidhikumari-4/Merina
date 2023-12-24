// Import required modules
const express = require("express");
const cors = require("cors");
const app = express();
const user = require("./routes/user");

// Set up server port
const PORT = process.env.PORT || 4000;

// Use cors
app.use(
  cors({
    origin: "*",
  })
);

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});

// Use JSON parser
app.use(express.json());

// Endpoint for testing
app.get("/", (req, res) => {
  res.send("App is Up and Running");
});

// Routes
app.use("/api/v1", user);
