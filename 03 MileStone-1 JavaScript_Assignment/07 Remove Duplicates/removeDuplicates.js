/***
 * In an online shopping application, customers can add multiple items to their cart. ;owever, sometimes
 * customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
 * duplicate items not only make it difficult for the customer to track the items they want to purchase but also
 * affect the accuracy of the purchase order.
 */

const shoopingCart = [];

function addTocart(cart, item) {
  if (isItemInCart(cart, item)) {
    cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.quantity += item.quantity;
      }
    });
  } else {
    cart.push(item);
  }
}

function isItemInCart(cart, item) {
  return cart.some((cartItem) => cartItem.id === item.id);
}

const item1 = { id: 1, name: "shirt", quantity: 1 };
addTocart(shoopingCart, item1);

const item2 = { id: 2, name: "watch", quantity: 2 };
addTocart(shoopingCart, item2);

const item3 = { id: 1, name: "shirt", quantity: 5 };
addTocart(shoopingCart, item3);

console.log(shoopingCart);
