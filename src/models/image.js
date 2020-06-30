const mongoose = require('mongoose');
const { Schema } = mongoose;

new Schema({
  title: { type: String },
  description: { type: String },
  filename: { type: String },
});
