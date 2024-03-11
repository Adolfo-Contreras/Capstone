const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const MONGO_URI = 'mongodb+srv://mrsspider:mtechwoohoo123@cluster0.zqod01g.mongodb.net/'
const express = require('express');
const PORT = process.env.PORT || 3001
const app = express()
const path = require('path')
const cors = require('cors')
const apiRouter = require('./api/api-routes')

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/dist")));
app.use("/api", apiRouter);

async function connectToDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (error) {
    console.error('error connecting to mongodb :(', error)
  }
}

const userSchema = require('./user.schema');

const User = mongoose.model('User', userSchema);



// Have Node serve the files for our built React app

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
  console.log('test');
});

app.get("/api/broke", (req, res) => {
  res.json({ message: 'smth broke' });
});

app.get("/api/worked", (req, res) => {
  res.json({ message: 'it worked!' });
  console.log(dusers);
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});