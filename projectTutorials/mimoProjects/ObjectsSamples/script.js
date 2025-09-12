const microwave = {
    brand: "Samsung",
    on : true,
    //add methode to return if the microwave is on 
    isOn: function(){
        return this.on;
    }
}
microwave.isOn();

console.log(microwave.isOn());
console.log(microwave.brand);

// CREATING JSON FILES

// const flower = '{"name": "Tulipi", "petals": 30, "city": "Amsterdam" }';

// // Convert JSON TO OBJECT

// const parsedFlower = JSON.parse(flower); //Coverts JSON TO Object

// console.log(parsedFlower.name);  //Prints out the flower name from the parsed Flower JSON
// console.log(parsedFlower); //prints out full Parsed Flower Object 

//CONVERT AN ARRAY OBJECT TO A JSON 

const ghosts = [{

    firstName: "Casper",
    color: "white",
    scareFactor: 2
},{
    firstName: "Boo",
    color: "transparent",
    scareFactor: 3
}];

const ghotsToJSON = JSON.stringify(ghosts);

console.log(" CONVERTED ARRAY TO JSON");
console.log(ghotsToJSON);

//CONVERT EXCERSISE 
// The flower shop has asked us to mend an error in their database. 
// They mistakenly wrote they have blue roses, but they only have red ones. 
// They have the data in a JSON format and we can't do much. 
// Change the format to a JS object, make the amendment, and then convert it back to JSON. 

const flower = '{"name": "Rose", "color": "blue", "price": 2.5, "season": "spring"}';

console.log("Current Flower JSON FILE ");
console.log(flower);
//1st convert the JSON to Objects 
const flowerObject = JSON.parse(flower);

// make the change in the flowerObject

flowerObject.color = "Red";
// print the current updated object
console.log("UPdated Flower Object ");
console.log(flowerObject);

// Convert the flowerObject back to a JSON File

const flowerObjectToJSON = JSON.stringify(flowerObject);
console.log("UPdated JSON FILE ");
console.log(flowerObjectToJSON);