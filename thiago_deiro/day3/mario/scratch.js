let kitchen = {};

kitchen.appliances = ['fridge', 'microwave', 'kettle'];
kitchen.pantry = ['green tea', 'coffee', 'cookies'];
kitchen.freshFood = ['milk'];
kitchen.hasWindowns = true;
kitchen.orientation ='north';

console.log(kitchen);

function decorate(anykitchen){
  console.log(`I am decoraring you: ${anykitchen}`);
  console.log(`I am placing the ${anykitchen.appliances[1]} on the shelf`)
  console.log(`the kitchen is oriented ${anykitchen.orientation}`)

}

decorate(kitchen);