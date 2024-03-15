const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const MONGO_URI = 'mongodb+srv://mrsspider:mtechwoohoo123@cluster0.zqod01g.mongodb.net/'
const express = require('express');
const PORT = process.env.PORT || 3001
const path = require('path')
const cors = require('cors')
// const apiRouter = require('./api/api-routes')

const app = express()
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../client/dist")));
// app.use("/api", apiRouter);


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

// const User = require('./student');


// Have Node serve the files for our built React app

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  // res.json({ "users": ["usersone", "usertwo"] });
});

app.post("/signup", async (req, res) => {
  console.log('working!!!!!!!!!!!!!!!!');
  console.log(req.body);

  User.create(req.body)
    .then((students) => res.json(students))
    .catch((err) => res.json(err));
  console.log('successfully hashed password');
  res.json({ "success": ["did it work?", "yes"] });
})

app.post("/login", async (req, res) => {
  console.log('LOGIN');
  const { email, password } = req.body;

  // try {
  //   const user = await User.findOne({ email: email});

  //   if (!user) {
  //     return res.json("no one exists omg")
  //   }

  //   const isMatch = await bcrypt.compare(password, user.password);

  //   if (isMatch) {
  //     res.json("yippie");
  //   } else {
  //     res.json("password WRONG");
  //   }
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json('server error')
  // }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});