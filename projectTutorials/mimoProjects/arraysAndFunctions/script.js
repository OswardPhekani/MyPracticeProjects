// COMPARE 2 NUMBERS IN AN ARRAY USING 1 FACTION 

const one = [91, 66, 77, 84, 68];
const two = [81, 66, 78, 88, 98];

function compareArrays(one, two){
// Loops over the array one 
    for(let i = 0; i < one.length; i++){

        if(one[i] === two[i]){
            console.log ( "Common Element : ", one[i]);
        }
    }
    return false; 
}
compareArrays(one, two);
/* console.log("hie"); */

/* ADDING A DICOUNT TO AN ARRAY OF PRICES USING A LOOP  */

const prices = [114, 99, 20, 50 ];
const discounts = 0.9;

function applyDiscount(prices, discounts){
    for( let i = 0; i < prices.length; i++){

        /* add the multiplied discount prices to a valiable to use for output */
        let AddDiscount = prices[i] * discounts;
        console.log("----------------------------------------");
        console.log("| Your Discount is: " + AddDiscount + " |");
        console.log("----------------------------------------");
        /* console.log("-------------------------"); */
        
    }
}
/* Call the function and pass the parameters */
 applyDiscount(prices, discounts);

// applying Multiple discounts 

const ourPrices = [99, 129, 149];
const ourDiscounts = [0.1, 0.2, 0.25];

function applyNewDiscount(ourPrices, ourDiscounts){
    const AddNewDiscount= [];
    for( let i = 0; i < ourPrices.length; i++){
        /* Using the empty array to assingn the array variables with the discunts array  */
         AddNewDiscount[i] = ourPrices[i] * ourDiscounts[i];
        /* console.log("-------------------------"); */   
    }
    console.log("----------------------------------------");
        console.log("| Your Discounts are: " + AddNewDiscount + " |");
        console.log("----------------------------------------");
}
/* Call the function */
applyNewDiscount(ourPrices, ourDiscounts);

