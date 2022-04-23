const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true
    },
    name: {
      type: String
    },
    password: {
      type: String,
      required: true,
    },
    matches: [{
      type: Schema.Types.ObjectId,
      ref: 'Match'
    }],
    favouriteClub: [{
      type: Schema.Types.ObjectId,
      ref: 'Match'
    }]
  },
  
  {

    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
