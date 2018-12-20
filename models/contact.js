const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  
 number: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Contact', contactSchema);

// const contacts = [];

// module.exports = class Product {
//     constructor(n) {
//         this.name = n;
//     }

//     save() {
//         contacts.push(this);
//     }

//     static fetchAll() {
//         return contacts;
//     }
// }