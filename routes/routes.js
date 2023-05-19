const express = require("express");
const router = express.Router();
const mainController = require("../controller/cont");


router.get('/allCards',mainController.allCards)
router.post('/addCard',mainController.addCard)
router.post('/deleteCard',mainController.deleteCard)
router.post('/updateCard',mainController.updateCard)

module.exports =router