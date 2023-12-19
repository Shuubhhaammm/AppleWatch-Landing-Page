const cors = require("cors");
const express = require("express");
const jwt = require("jsonwebtoken");
require("./lib/mongoose.js");
const ContactFormSchema = require("./lib/ContactFormSchema.js");
const NewUserSchema = require("./lib/NewUserSchema.js");
const app = express();
const PORT = 5500;
app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    console.log("GET REQUEST AT HOME");
})

app.post("/api/contact-us",async(req,res) => {
    try {
        const {name,email,query_message,contact_number} = await req.body;
        console.log("Data: ",{name,email,query_message,contact_number});
        const newQuery = await ContactFormSchema.create({name,email,query_message,contact_number});
        await newQuery.save();
        return res.json({
            message: "Data received at backend",
            status:201,
            details: newQuery
        })
    } catch (error) {
        console.log(error);
        return res.json({
            message: "Error at server",
            status: 500,
        })
    }
})

app.post("/api/register",async(req,res) => {
    try {
        const {name,email,password} = await req.body;
        console.log("Register request for :" , {name,email});
        const newUser = await NewUserSchema.create({name,email,password});
        await newUser.save();
        return res.json({
            message: "New User created",
            status: 201,
            user: newUser
        })
    } catch (error) {
        console.log(error.message);
        res.json({
            message: "Some error occured while registering user",
            status: 405
        })
    }
})

app.post("/api/check-credentials",async(req,res) => {
    const {email,password} = await req.body;
    console.log("Login Request: ",{email,password});
    const existingUser = await NewUserSchema.findOne({email:email});
    if(!existingUser){
        console.log("User Not Found");
        return res.json({
            message: "User not found",
            status: 404,
        })
    }

    const user_password = existingUser.password;
    if(user_password !== password){
        console.log("Invalid Password");
        return res.json({
            message: "Invalid credentials",
            status: 401
        })
    }

    console.log("Password match");
    const token = jwt.sign({userId: existingUser._id},'your-secret-key',{expiresIn:'1h'});
    return res.json({
        message: "Login Successfull",
        status: 200,
        token: token,
    })

})

app.listen(PORT,() => {
    console.log(`Server running at port ${PORT}`);
})