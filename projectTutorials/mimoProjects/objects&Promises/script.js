// Create an Object of a stock of cakes 

const storeOders = {
    cheeseCake: 10,
    PuffCakes: 8,
    spongeCake:0

};

function orderCakes(){
    return new Promise(function(resolve,reject){
        if(storeOders.cheeseCake > 0 ){
            resolve(" We have some Cheese Cakes In the Store");
        }else{
            reject("We are out of stoke ");
        }
    });
}
const makeYourOrders = orderCakes();
console.log(makeYourOrders);