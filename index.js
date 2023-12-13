let zipCode = document.getElementById("zipCode")
let range = document.getElementById("range")
let petPhoto = document.getElementById("pet-photo")
let animal = document.getElementById('animal')


// add event listener for search button on click 
document.getElementById('search-button').addEventListener('click', function(e) {
  e.preventDefault();
  fetch(`https://api-staging.adoptapet.com/search/pet_search?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&=3&output=json&species=${animal.value}&city_or_zip=${zipCode.value}&geo_range=${range.value}`) // first api call to get basic details of pets based on user input
  .then(response => response.json())
    .then(result => {
      
     
    for(i=0;i<result.pets.length;i++) { // loop through results 
      let img = document.createElement('img')

      let sex_text = '';
      if (result.pets[i].sex == 'm') { // display sex of pet as either "male" or "female" instead of "m" or "f"
         sex_text = "male"
      }
      else if (result.pets[i].sex == 'f') {
        sex_text = "female"
     }
     else {
      sex_text = "unkown"
     };
     
      // store pet details in variables
      let pet_name = result.pets[i].pet_name;
      let breed = result.pets[i].primary_breed
      let age = result.pets[i].age
      let city = result.pets[i].addr_city
      let state = result.pets[i].addr_state_code
      img.src = result.pets[i].large_results_photo_url

        
       let newInfo = document.createElement('p')

    
    fetch(`https://api-staging.adoptapet.com/search/limited_pet_details?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&output=json&pet_id=${result.pets[i].pet_id}`) // second api call to get adoptapet.com url link for each pet using pet_id generated in first api call
    .then(response => response.json())
    .then(result => {
      // using information from both api calls create information to display to the user
      newInfo.innerHTML = `<a href=${result.pet.pet_details_url} target="_blank"><div><img src=${img.src}></img><span style="color:black;"><h2>${pet_name}</h2>${breed}<br>${sex_text}, ${age}<br>${city}, ${state}</div></a></span>`
      // append above information to make it visisble to the user 
      petPhoto.appendChild(newInfo)
      // create classes for elements to edit styles in style.css
      img.classList.add('img-class')
      newInfo.classList.add('location-class') 
       })
    }
   
    })

})
// create class for styling purposes 
petPhoto.classList.add("index-body")
