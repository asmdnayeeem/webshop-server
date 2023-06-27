const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  cartitems: {
    type: Array,
    required: false,
    default: [],
  },
  wishlistitems: {
    type: Array,
    required: false,
    default: [],
  },
  orders: {
    type: Array,
    required: false,
    default: [],
  },
  address: {
    type: Array,
    required: false,
    default: [],
  },
  phone: {
    type: String,
    required: false,
    default: "",
  },
  email: {
    type: String,
    required: false,
    default: "",
  },
  name: {
    type: String,
    required: false,
    default: "",
  },
});

const User = mongoose.model("User", userSchema, "user");
module.exports = User;

// User.findOne({ username: "hello" }).then((user) => {
//   (user.cartitems = [...user.cartitems, "fasdffds"]), user.save();
// });
// User.findOne({username:"hello"}).then((user)=>{user.cartitems={...user.cartitems[0],"id":"fasdffds"},user.save()});
// User.findOne({username:"hello"}).then((user)=>{ console.log("fasdffds" in user.cartitems[0]); });
// User.findOne({ username: "hello" }).then((user) => {
//   console.log(user.cartitems.includes("fasdffds"));
// });
