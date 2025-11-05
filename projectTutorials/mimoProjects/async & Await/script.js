// let beverages = ['tea', 'coffee', 'apple cider'];

// function pickRandomBeverage() {
//  return new Promise(function(resolve, reject) {
//   let randomIndex = Math.floor(Math.random() * beverages.length);
//   let selectedBeverage = beverages[randomIndex];
//   setTimeout(function() {
//    console.log(`${selectedBeverage} selected`);
//    resolve(selectedBeverage);
//   }, 1000);
//  });
// }

// function checkIfHotWaterIsReady(isBeverageSelected) {
//  return new Promise(function(resolve, reject) {
//   setTimeout(function() {
//    if (isBeverageSelected) {
//     console.log("Preparing...");
//     resolve(isBeverageSelected);
//    } else {
//     reject("No beverage has been picked up.");
//    }
//   }, 1000);
//  });
// }

// function prepareDrink(selectedBeverage) {
//  return new Promise(function(resolve, reject) {
//   setTimeout(function() {
//    if (selectedBeverage) {
//     console.log(`Enjoy your ${selectedBeverage} !`);
//     resolve(true);
//    } else {
//     reject("Drink not ready yet...");
//    }
//   }, 1000);
//  });
// }

// function nativePromiseHandling() {
//  const pickedDrink = pickRandomBeverage();
//  const handleWaterReadyCheck = function(selectedBeverage) {
//   return checkIfHotWaterIsReady(selectedBeverage);
//  };
//  const handlePrepareDrink = function(isBeverageSelected) {
//   return prepareDrink(isBeverageSelected);
//  };
//  pickedDrink
//   .then(
// handlePrepareDrink
// )
//   .then(
// handleWaterReadyCheck
// );
// }
// nativePromiseHandling();

// ABOVE OLD WAY PRACTICE CODE 


// BELOW SHORTENED CODE 
// let beverages = ['tea', 'coffee', 'apple cider'];

// function pickRandomBeverage() {
//  return new Promise(function(resolve, reject) {
//   let randomIndex = Math.floor(Math.random() * beverages.length);
//   let selectedBeverage = beverages[randomIndex];
//   setTimeout(function() {
//    console.log(`${selectedBeverage} selected`);
//    resolve(selectedBeverage);
//   }, 1000);
//  });
// }

// function checkIfHotWaterIsReady(isBeverageSelected) {
//  return new Promise(function(resolve, reject) {
//   setTimeout(function() {
//    if (isBeverageSelected) {
//     console.log("Preparing...");
//     resolve(isBeverageSelected);
//    } else {
//     reject("No beverage has been picked up.");
//    }
//   }, 1000);
//  });
// }

// function prepareDrink(selectedBeverage) {
//  return new Promise(function(resolve, reject) {
//   setTimeout(function() {
//    if (selectedBeverage) {
//     console.log(`Enjoy your ${selectedBeverage} !`);
//     resolve(true);
//    } else {
//     reject("Drink not ready yet...");
//    }
//   }, 1000);
//  });
// }

// async
//  function asyncAwaitPromiseHandling() {
//  const pickedDrink = 
// await
//  pickRandomBeverage();
//  const isHotWaterReady = 
// await
//  checkIfHotWaterIsReady(pickedDrink);
//  const isDrinkPrepared = 
// await
//  prepareDrink(isHotWaterReady);
//  return isDrinkPrepared;
// }

// asyncAwaitPromiseHandling();


// EXAMPLE 2
const stock = {
 sunglasses: {quantity: 0, price: 29.99},
 bags: {quantity: 2, price: 109.99}
};

const purchasePromise = new Promise(function(resolve, reject) {
 if (stock.sunglasses.quantity > 0) {
  resolve("Sunglasses are available. Proceeding with order now.");
 } else {
  reject("Sunglasses are out of stock. Canceling Order.");
 }
});

async function orderSunglasses() {
 
try
 {
  let result = await purchasePromise;
  console.log(result);
 } 
catch
(error) {
  console.log(error);
 }
}

orderSunglasses();

// EXAMPLE 3
function goToTheMall() {
 return new Promise(function(resolve, reject) {
  setTimeout(function() {
   resolve("I went to the shopping mall to buy a new shirt.");
  }, 1000);
 });
}
function selectShirt() {
 return new Promise(function(resolve, reject) {
  setTimeout(function() {
   resolve("I like the black shirt. I will buy this one.");
  }, 500);
 });
}
function purchaseShirt() {
 return new Promise(function(resolve, reject) {
  setTimeout(function() {
   resolve(
    "Bought!");
  }, 500);
 });
}

async function handlePromise() {
 const promise1Handler = 
await
 goToTheMall();
 const promise2Handler = 
await
 selectShirt();
 const promise3Handler = 
await
 purchaseShirt();
 console.log(promise1Handler);
 console.log(promise2Handler);
 console.log(promise3Handler);
}
handlePromise();


// EXAMPLE 4
const fullTankGasCost = 100;
const budget = 150;
const checkGasCost = new Promise(function(resolve, reject) {
 if (fullTankGasCost < budget) {
  resolve("Refueling the car to the full.");
 } else {
  reject(
   "I don't have enough money to fully refuel the tank. Maybe I will fill half of it"
   );
 }
});
async function refuelCar() {
 
try
 {
  let result = 
await
 
checkGasCost
;
  console.log(
result
);
 } 
catch
 (
error
) {
  console.log(error);
 }
}
refuelCar();
