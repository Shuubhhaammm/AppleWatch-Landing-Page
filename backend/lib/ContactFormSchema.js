const {Schema,model,models} = require("mongoose");

const ContactForm = new Schema({
    name: {type: String,required: true},
    email: {type: String, required: true},
    contact_number: {type: String, required: true},
    query_message: {type: String, required: true}
});

const ContactFormSchema = (models.ContactForm) || model("Contact Form ",ContactForm);

module.exports = ContactFormSchema;