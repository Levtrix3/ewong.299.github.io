// SECTION 1: VARIABLES
// Our API Key for Airtable
const airtableApiKey = "keyV7LgbJKWVZQMgS";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/appAwnMBQDXHvuvvP/Words";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;


// SECTION 2: DOM References 
const bodyElement = document.querySelector('body')
const applicationElement = document.querySelector('#application')
const adjectiveElement = document.querySelector('#adjective')
const typeElement = document.querySelector('#type')
const nameElement = document.querySelector('#name')
const verbElement = document.querySelector('#verb')




// Get a 'Promise' Representing the Data that Will be Returned
fetch(authenticatedUrl)
  // When 'Promise' is 'Resolved', get the JSON data
  .then((res) => res.json())
  // Use the JSON Data
  .then((data) => {
    const words = data.records;
    const adjectives = words.filter((word) => {
        return word.fields.Type === 'adjective'
    })
    // Filter for Word Types 
    const names = words.filter((word) => {
        return word.fields.Type === 'name'
    })
     
    const verbs = words.filter((word) => {
        return word.fields.Type === 'verb'
    })

      const peoples = words.filter((word) => {
        return word.fields.Type === 'people'
    })

      const locationss = words.filter((word) => {
        return word.fields.Type === 'location'
    })
    
    // Set Values onto HTML Elements 
    adjectiveElement.innerHTML = adjectives[Math.floor(Math.random()*adjectives.length)].fields.Copy
    nameElement.innerHTML = names[Math.floor(Math.random()*names.length)].fields.Copy
    verbElement.innerHTML = verbs[Math.floor(Math.random()*verbs.length)].fields.Copy
    locationElement.innerHTML = locations[Math.floor(Math.random()*locations.length)].fields.Copy
    peopleElement.innerHTML = peoples[Math.floor(Math.random()*peoples.length)].fields.Copy
    applicationElement.classList.add('loaded')
  })
  .catch((error) => {
    console.log(error);
  });
