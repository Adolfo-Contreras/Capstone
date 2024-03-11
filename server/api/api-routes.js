// const path = require('path');
const express = require('express')
const apiRouter = express.Router();
const bcrypt = require('bcrypt')
const cors = require('cors')
apiRouter.use(cors())
const bodyParser = require('body-parser');
apiRouter.use(bodyParser.urlencoded({ extended: true }));

apiRouter.get("/signup", (res, req) => {
    console.log('test');
});

const usersD = [];
apiRouter.post('/signup', async (res, req) => {
    try {
        console.log(req.body);
        const { firstName, lastName, email, username , password, phone, address } = req.body
        console.log({ firstName, lastName, email, username, password, phone, address });
        // const hashPass = await bcrypt.hash(password, 10)
        // usersD.push({
        //     firstName: req.body.firstName,
        //     lastName: req.body.lastName,
        //     email: req.body.email,
        //     password: hashPass,
        //     phone: req.body.phone,
        //     address: req.body.address,
        // })
        console.log(usersD);
        console.log('worked');
    } catch (err) {
        // res.json({ message: 'messed up oopsie!' });
        console.log('help', err);
    }
    // const info = req.body
    // const result = await signup // hash password
    // res.status(result.status)
});

module.exports = apiRouter; 