const Card = require("../models/Cards");

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
    .then((res) => res.json(res))
    .catch((err) => err.json(err));
};
const deleteCard = async (req, res, next) => {
  const { id } = req.body;
  await Card.findByIdAndDelete(id)
    .then((res) => res.json(res))
    .catch((err) => err.json(err));
};
const allCards = async (req, res, next) => {
  await Card.find()
    .then((res) => res.json(res))
    .catch((err) => err.json(err));
};
const updateCard = async (req, res, next) => {
  const { id, base64, gender, title, price, type, brand, discription } =
    req.params;
  await Card.findByIdAndUpdate(id, {
    base64: base64,
    title: title,
    type: type,
    price: price,
    brand: brand,
    discription: discription,
    gender: gender,
  })
    .then((res) => res.json(res))
    .catch((err) => err.json(err));
};
module.exports = { addCard, deleteCard, allCards, updateCard };