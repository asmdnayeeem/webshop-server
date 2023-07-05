const express = require("express");
const router = express.Router();
const mainController = require("../controller/cont");

router.get('/allCards',mainController.allCards)
router.get('/verify',mainController.verify)
router.post('/getCard',mainController.getCard)
router.get('/allCards/:fill',mainController.getCards)
router.post('/addCard',mainController.addCard)
router.post('/deleteCard',mainController.deleteCard)
router.post('/updateCard',mainController.updateCard)
router.post('/signup',mainController.signup)
router.post('/login',mainController.login)
router.post('/addtocart',mainController.addToCart)
router.post('/addtowishlist',mainController.addToWishlist)
router.post('/viewCartItems',mainController.viewCartItems)
router.post('/viewWishItems',mainController.viewWishItems)
router.post('/moveToCart',mainController.moveToCart)
router.post('/cartAmount',mainController.cartAmount)


module.exports =router