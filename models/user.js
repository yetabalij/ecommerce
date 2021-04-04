//importing required packages
const mongoose = require("mongoose");
const ctypto = require("crypto");
const uuidv1 = require(uuid / v1);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlenght: 32,
    },
    email: {
      type: String,
      tirm: true,
      required: true,
      unique: true,
    },
    hased_password: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      tirm: true,
    },
    Salt: String,
    role: {
      type: Number,
      default: 0,
    },
    history: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

//virtual fields
userSchema
  .virtual("password")
  .set((password) => {
    this._password = password;
    this.Salt = uuidv1();
    this.hased_password = this.encryptPassword(password);
  })
  .get(() => {
    return this._password;
  });

userSchema.methods = {
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.Salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

//exprt module
module.exports = mongoose.model("User", userSchema);
