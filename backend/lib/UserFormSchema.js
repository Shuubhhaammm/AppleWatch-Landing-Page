const {Schema,model,models} = require("mongoose");

const Form = new Schema({
    name: {},
    age: {},
    email: {},
    phone: {},
});

const UserFormSchema = (models.Form) || model("User Form ",Form);

module.exports = UserFormSchema;