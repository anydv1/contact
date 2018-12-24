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
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});
var contact = mongoose.model('Contact', contactSchema)
module.exports = contact;

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