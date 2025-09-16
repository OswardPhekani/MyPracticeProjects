//Create a JSON DATA STRUCTURE OF CHARACTERS
/*
const data = {
"characters": [{
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"

    },
    {
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    }
]
};
**/
// console.log(data);

//refference the HTML Tag character-container in javascript 
//use forEach function to access the data in the JSON FILE
//Add a new DIV (card) to container 
//add class to card 
//appemd card to Character-container via characterContainer variable 

// Add the data to card HTML FILE DYNAMICALLY 

//reference HTML
 const characterContainer =document.getElementById("characters-container");

// Call the DATA DYNAMICALY USING JSON API 

// USING THE FERTCH FUNCTION

fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
          if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
    }).then( (data) => {

   console.log(data.results);
   
  //Access data
data.results.forEach((character) => {
// Create Card DIV
const card = document.createElement("div");
card.className = "card";
characterContainer.appendChild(card);

// Add Data to card HTML File 
card.innerHTML = 
`
<img src="${character.image}" alt="${character.name}" class ="character-image">
        <p class="character-details" >
                <span class="attribute"> Name: </span>
                     ${character.name}
                </p> 
            <p class="character-details" >
                  <span class="attribute"> Status: </span>
                     ${character.status}
                    </p> 
                 <p class="character-details" >
                    <span class="attribute"> Species: </span>
                      ${character.species}
                     </p> 
`;
});
  });


// Calling data from an API / JSON  SERVER
// fetch("https://rickandmortyapi.com/api/character")
//   .then((Response) => Response.json())
//   .then((data) => {}); 

/*
//Access data
data.result.forEach((character) => {
// Create Card DIV
const card = document.createElement("div");
card.className = "card";
characterContainer.appendChild(card);

// Add Data to card HTML File 
card.innerHTML = 
`
<img src="${character.image}" alt="${character.name}" class ="character-image">
        <p class="character-details" >
                <span class="attribute"> Name: </span>
                     ${character.name}
                </p> 
            <p class="character-details" >
                  <span class="attribute"> Status: </span>
                     ${character.status}
                    </p> 
                 <p class="character-details" >
                    <span class="attribute"> Species: </span>
                      ${character.species}
                     </p> 
`;
});
**/