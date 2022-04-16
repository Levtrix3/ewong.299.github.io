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
const movieElement = document.querySelector('#movie')
const ratingElement = document.querySelector('#rating')
const aboutElement = document.querySelector('#about')
const statusElement = document.querySelector('#status')


// Get a 'Promise' Representing the Data that Will be Returned
fetch(authenticatedUrl)
  // When 'Promise' is 'Resolved', get the JSON data
  .then((res) => res.json())
  // Use the JSON Data
  .then((data) => {
    const words = data.records;

    

    const movie = words.filter((word) => {
        return word.fields.Type === 'movie'
    })
    // Filter for Word Types 
    const rating = words.filter((word) => {
        return word.fields.Type === 'rating'
    })
    const about = words.filter((word) => {
        return word.fields.Type === 'about'
    })    
    const status = words.filter((word) => {
        return word.fields.Type === 'status'
    })
    
    // Set Values onto HTML Elements 
    movieElement.innerHTML = movie[Math.floor(Math.random()*movie.length)].fields.movie
    ratingElement.innerHTML = rating[Math.floor(Math.random()*rating.length)].fields.rating
    aboutElement.innerHTML = about[Math.floor(Math.random()*about.length)].fields.about
    statusElement.innerHTML = status[Math.floor(Math.random()*status.length)].fields.status
    
    applicationElement.classList.add('loaded')
  })
  .catch((error) => {
    console.log(error);
  });