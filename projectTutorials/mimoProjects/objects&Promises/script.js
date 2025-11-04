// Create an Object of a stock of cakes 
// Object that checks Ordes stoke
const storeOders = {
    cheeseCake: {
        inStockamount: 0,
        price: 5,
    },
    PuffCakes: {
        inStockamount:8,
        price: 5
    },
    spongeCake:{
        inStockamount: 0,
        price: 0 
    }
}
const budget = 10;
// function that checks if the order are available using a promise 
function isAvailable(){
    return new Promise(function(resolve,reject){
        if(storeOders.cheeseCake.inStockamount > 0 ){
            resolve(true);
        }else{
            reject("Cake Out of order Cancleling order ");
        }
    });
}
// Methode that check if the available price matches the budjet 
function checkBudgetPrice(productAvailable){
    return new Promise(function(resolve,reject){
        if(productAvailable && storeOders.cheeseCake.price <= budget){
            resolve("this is a good Price Purchase...");
        }else{
            reject ("Not Good Cancle Order ");
        }
    });
}
function handleAvailableStock (isAvailable){
    //call the check price to execute here 
    return checkBudgetPrice(isAvailable);
}
function handleCheckBudget(successvalue){
    console.log(successvalue);
}

function catchFailedErrors(failerErrorValue){
console.log(failerErrorValue);
}
// Call the function to make order
const makeYourOrders = isAvailable();
// Checks if the value is available & Within budget, the second .then depends on the 1st's results 
makeYourOrders
.then(handleAvailableStock)
.then(handleCheckBudget)
.catch(catchFailedErrors);




// Example 2 Ticket checking system 

const ticketObject = {
type: "return",
planeName: "Air Kenya Ways",
seatType: "commercial",
price: 900,
airlineDep: {dapartment : "CIA", codeName:"JFK"}
};

function checkTickets(){
    return new Promise (function(resolve, reject){
        if(ticketObject.type && ticketObject.seatType && ticketObject.price < 800){
            resolve(" This is a suitable for a commercial Flight  ");
        }else {
            reject(" Too Expensive for commerical flight ");
        }
    });
}
// first code 
// const orderFlight = checkTickets();
// console.log(orderFlight);

// Using the .then Method we handle the data after the promise is no longer in the pending state. 
// orderFlight.then(function(successvalue){
// console.log(successvalue);
// });

// Imploved
// Simplisity of code Make a function to handle the returned promise and call it in the .then method 

function handleSuccess (successvalue){
    console.log(successvalue);
}

// No to handle ERROA we use the .CATCH method ("same create a function to handle Errors")
function handleFailers(failerValue){
    console.log(failerValue);
}
const orderFlight = checkTickets();
// include the .catch method after the .then success value 
orderFlight.then(handleSuccess).catch(handleFailers);