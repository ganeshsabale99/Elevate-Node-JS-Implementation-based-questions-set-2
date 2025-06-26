// Q: 1
// Express-Validator Questions
// 1. Conditional Validation Implement validation that requires phone number only if user role is 'admin',
//  using express-validator's conditional logic.


const express = require("express");
const { check, validate} = require("express-validator");


const app = express();
app.use(express.json());

app.post("/register",[
    check("role").isIn(["admin", "user"]).withMessage("Invalid role"),
    check('phone').if(check('role').equals('admin')).isMobilePhone().withMessage('Invalid phone number'),
],(req, res)=>{
    const errors = validate(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    res.send("Successfully registered");
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Server is running on PORT", PORT);
})