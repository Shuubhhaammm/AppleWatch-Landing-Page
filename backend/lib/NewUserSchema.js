const {Schema,model,models} = require("mongoose");

const NewUser = new Schema({
    name: {type: String,required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});

const NewUserSchema = (models.NewUser) || model("Users ",NewUser);

module.exports = NewUserSchema;