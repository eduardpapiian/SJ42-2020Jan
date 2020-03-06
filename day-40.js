// Promises Made me Broken https://www.codewars.com/kata/587593285448632b8d000143
async function submitOrder(user) {
  var shoppingCart, zipCode, shippingRate, orderSuccessful;

  // Get the current user's shopping cart
  shoppingCart = await OrderAPI.getShoppingCartAsync(user)

  // Also look up the ZIP code from their profile
  const profile = await CustomerAPI.getProfileAsync(user)
  zipCode = profile.zipCode;


  shippingRate = await calculateShipping(shoppingCart, zipCode);

  // Submit the order
  OrderAPI.placeOrderAsync(shoppingCart, shippingRate).then(function(success) {
    orderSuccessful = success;
  });

  console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}
