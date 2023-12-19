const mongoose = require("mongoose");

const uri = process.env.MONGO_URI || "mongodb+srv://alveena123:BBDUniversity000@firstcluster.saxzd7w.mongodb.net/";

mongoose.connect(uri).then(()=>{
    console.log("Connection was established");
}).catch((error) => {
    console.log("Some error occured");
    console.log(error.message);
});

