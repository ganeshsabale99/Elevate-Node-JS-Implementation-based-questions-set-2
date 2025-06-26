// JWT (jsonwebtoken) Questions
// 2. Token Blacklisting Build a system to blacklist JWT tokens on logout and check blacklist on each request.


const express = require("express");
const jwt = require("jsonwebtoken");
const PORT = 3000;
const app = express();

app.use(express.json());

const users = [
    {
        id: 1,
        username: "user1",
        password: "12345678",
        role: "admin"
    },
    {
        id: 2,
        username: "usrer2",
        password: "87456321",
        role: "user"
    }
]


app.post("/login", (req, res)=>{

})


app.listen(PORT, ()=>{
    console.log("server is runningt on port", PORT);
})