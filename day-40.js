async function submitOrder(user) {
  let shoppingCart = {};
  let zipCode = 0;
  let shippingRate = 0;
  let orderSuccessful = "";

  shoppingCart = await OrderAPI.getShoppingCartAsync(user);

  const profile = await CustomerAPI.getProfileAsync(user);
  zipCode = profile.zipCode;

  shippingRate = await calculateShipping(shoppingCart, zipCode);

  OrderAPI.placeOrderAsync(shoppingCart, shippingRate).then(function(success) {
    orderSuccessful = success;
  });

  console.log(
      `Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`
  );
}
