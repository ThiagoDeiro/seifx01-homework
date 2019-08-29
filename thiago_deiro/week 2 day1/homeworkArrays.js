
let shoppingCart = [
  {
  itemName:'potato',
  itemPrice: 3
  },
  {
  itemName:'tomato',
  itemPrice: 5
  },
  {
  itemName: 'onions',
  itemPrice: 4
  },
  {
  itemName:'lettuce',
  itemPrice: 7
  },
];
var total = 0;
for(bill of shoppingCart){
  console.log(`${bill.itemName} cost ${bill.itemPrice}`)
  
};

for (let i = 0; i<shoppingCart.length; i++){
  total = total + shoppingCart[i].itemPrice;
    

}

console.log('The bill total is '  + total);