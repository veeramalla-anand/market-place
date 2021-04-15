var express  = require('express');
var router = express.Router();

const {createCart,getItemsForCart,removeItemsFromCart} = require ("./../controllers/cart_controller");

router.post('/:userid/cart',isSignedIn,isAuthenticated,createCart);
router.post('/:userid/getcart',isSignedIn,isAuthenticated,getItemsFromCart),
router.delete('/:userid/removefromcart',isSignedIn,isAuthenticated,removeItemsFromCart);
module.exports = router;