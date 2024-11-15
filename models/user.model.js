const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'A username is needed!'],
        unique: true,
        trim: true,
      },
     
      email: {
        type: String,
        required: [true, 'An email is needed'],
        unique: true,
        minLength: 1,
        lowercase: true,
        trim: true,
        match: [
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          'Choose a valid email',
        ],
      },
      password: {
        salt: { type: String, required: true },
        hash: { type: String, required: true },
      },
    role: { type: String, required: true, enum: ['admin', 'user'] },
    createdAt: { type: Date, default: Date.now },
});

module.exports = model('User', userSchema);