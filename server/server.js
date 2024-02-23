const express = require('express');
const PORT = process.env.PORT || 3001
const app = express()
const path = require('path')

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/dist")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});