function getShippingMessage(country,  price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return`Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMessage("Австралія", 120, 50)); 
console.log(getShippingMessage("Німеччина", 80, 20)); 
console.log(getShippingMessage("Швеція", 100, 20)); 
