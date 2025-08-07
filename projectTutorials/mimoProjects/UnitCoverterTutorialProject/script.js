function convert(){

    const inputValue = document.getElementById("userInput").value;
    let unit = document.getElementById("unit").value;
    const milesToKm = "milesToKm";
    
    
    let result = 0;
    
    if(unit === milesToKm){
    result = inputValue * 1.60934;
    
    }else{
    result = inputValue / 1.60934;
    }
    
    const resultString = inputValue + " Miles are " + result + "KM"; 
    console.log(resultString);

    
    const resultElement = document.getElementById("resultElement");
    resultElement.innerHTML = resultString;
    
    }

 