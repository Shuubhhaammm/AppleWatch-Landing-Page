const cors = require("cors");
const express = require("express");
require("./lib/mongoose.js");
const UserFormSchema = require("./lib/UserFormSchema.js");
const app = express();
const PORT = 5500;
app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    console.log("GET REQUEST AT HOME");
    response.send("Hello bhai chalra kya ?");
})