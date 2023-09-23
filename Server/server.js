import express from 'express'
import mysql2 from 'mysql2'
import cors from 'cors'
import coookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const app = express();
app.use(cors());
app.use(coookieParser());
app.use(express.json());


const con = mysql2.createConnection({
    host: "localhost",
    user: "newuser",
    password: "newpassword",
    database: "ems",
})

con.connect(function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("connected");
    }
    }
)

app.post("/login", (req, res) => {
   const sql = "SELECT * FROM users Where email = ? AND password = ?";
   con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if(err) return res.json({Status: "Error", Error: "Error in running query"});

    if(result.length > 0) {
        return res.json({Status: "Success"})
    } else {
        return res.json({Status: "Error", Error: "Wrong Email or Password"});
    }
   });
})

app.listen(8081, () => {
    console.log("Running");
})