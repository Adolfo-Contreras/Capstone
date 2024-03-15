// const path = require('path');
// const cors = require('cors')
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt')
// const express = require('express')

// const apiRouter = express.Router();

// apiRouter.use(cors())
// apiRouter.use(express.json());


// // apiRouter.use(bodyParser.urlencoded({ extended: true }));

// // apiRouter.get("/signup", (res, req) => {
// //     console.log('server signup: test');
// // });


// apiRouter.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*'); // Allow all origins (for testing)
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
//   });
// // const usersD = [];
// apiRouter.post('/signup', async (res, req) => {
//     console.log('body:', req.body);

    
//     // try {
//     //     // const { firstName, lastName, email, username , password, phone, address } = req.body
//     //     // console.log({ firstName, lastName, email, username, password, phone, address });
//     //     // const hashPass = await bcrypt.hash(password, 10)
//     //     // usersD.push({
//     //     //     firstName: req.body.firstName,
//     //     //     lastName: req.body.lastName,
//     //     //     email: req.body.email,
//     //     //     password: hashPass,
//     //     //     phone: req.body.phone,
//     //     //     address: req.body.address,
//     //     // })
//     //     // console.log(usersD);
//     //     console.log('worked');
//     //     return 'success'
//     // } catch (err) {
//     //     // res.json({ message: 'messed up oopsie!' });
//     //     console.log('help', err);
//     // }
//     // // const info = req.body
//     // // const result = await signup // hash password
//     // // res.status(result.status)
// });

// module.exports = apiRouter; 