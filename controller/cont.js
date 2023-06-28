const Card = require("../models/Cards");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//cards
const addCard = async (req, res, next) => {
  const { base64, gender, type, brand, price, discription } = req.body;
  const newcard = new Card({
    base64: base64,
    type: type,
    brand: brand,
    price: price,
    discription: discription,
    gender: gender,
  });
  await newcard
    .save()
    .then((r) => res.json(r))
    .catch((err) => res.json(err));
};
const deleteCard = async (req, res, next) => {
  const { id } = req.body;
  await Card.findByIdAndDelete(id)
    .then((r) => res.json(r))
    .catch((err) => res.json(err));
};
const allCards = async (req, res, next) => {
  await Card.find()
    .then((r) => res.json(r))
    .catch((err) => res.json(err));
};
const getCards = async (req, res, next) => {
  const { fill } = req.params;
  await Card.find({ gender: { $in: fill } })
    .then((r) => res.json(r))
    .catch((err) => res.json(err));
};
const getCard = async (req, res, next) => {
  const { id } = req.body;
  await Card.findById(id)
    .then((r) => res.json(r))
    .catch((err) => res.json(err));
};
const updateCard = async (req, res, next) => {
  const { _id, base64, gender, title, price, type, brand, discription } =
    req.body;
  await Card.findByIdAndUpdate(_id, {
    base64: base64,
    title: title,
    type: type,
    price: price,
    brand: brand,
    discription: discription,
    gender: gender,
  })
    .then((r) => res.json(r))
    .catch((err) => res.json(err));
};
const addToCart = async (req, res, next) => {
  const { username, id } = req.body;
  await User.findOne({ username: username })
    .then((user) => {
      if (!user.cartitems.includes(id)) {
        (user.cartitems = [...user.cartitems, id]),
          user.save().then(() => res.json("Card added to Card"));
      } else {
        res.json("Item already in cart");
      }
    })
    .catch((err) => res.json(err));
};
const addToWishlist = async (req, res, next) => {
  const { username, id } = req.body;
  await User.findOne({ username: username })
    .then((user) => {
      if (!user.wishlistitems.includes(id)) {
        (user.wishlistitems = [...user.wishlistitems, id]),
          user.save().then(() => res.json("Card added to Wishlist"));
      } else {
        res.json("Item already in wishlist");
      }
    })

    .catch((err) => res.json(err));
};
//user
const signup = async (req, res, next) => {
  const { username, password } = req.body;
  await User.findOne({ username: username })
    .then((response) => {
      if (response) {
        res.status(409).json({
          message: "User already exists",
        });
      } else {
        bcrypt.hash(password, 10).then((hash) => {
          const user = new User({
            username: username,
            password: hash,
          });
          user
            .save()
            .then((response) => {
              res.status(201).json({
                message: "User created successfully",
                response,
              });
            })
            .catch((error) => {
              res.status(500).json({
                message: "Error in creating user",
                error,
              });
            });
        });
      }
    })
    .catch((err) => res.json(err));
};
const login = async (req, res, next) => {
  const { username, password } = req.body;
  await User.findOne({ username: username })
    .then((response) => {
      if (!response) {
        res.json({
          message: "User not found",
        });
      } else {
        const isMatch = bcrypt.compareSync(password, response.password);
        if (!isMatch) {
          res.json({
            message: "Invalid Credentials",
          });
        } else {
          const token = jwt.sign(
            {
              username: response.username,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );
          res.status(200).json({
            message: "Login Successful",
            token: token,
          });
        }
      }
    })
    .catch((err) => res.json(err));
};
const verify = async (req, res, next) => {
  const jwttoken = req.headers.authorization;
  const s = jwttoken.split(" ");
  const token = s[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    res.json(decoded);
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = {
  addCard,
  deleteCard,
  allCards,
  updateCard,
  signup,
  login,
  verify,
  getCards,
  getCard,
  addToWishlist,
  addToCart,
};
