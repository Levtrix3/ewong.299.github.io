// Variables

const airtableApiKey = "keyV7LgbJKWVZQMgS"

const airtableDatabaseUrl1="https://api.airtable.com/v0/appr4ZwtYBwT8zgta/group1"

const airtableDatabaseUrl3="https://api.airtable.com/v0/appr4ZwtYBwT8zgta/group3"



const authenticatedUrl1 = airtableDatabaseUrl1 + "?api_key=" + airtableApiKey
const authenticatedUrl3 = airtableDatabaseUrl3 + "?api_key=" + airtableApiKey




// References
const group1ContainerElement = document.querySelector('#group1')
const group3ContainerElement = document.querySelector('#group3')


// Application

const fetchPromise1 = fetch(authenticatedUrl1)
const jsonPromise1 = fetchPromise1.then((response) => {
    return response.json()
})
jsonPromise1.then((data) => {
    const records = data.records
    for (let index = 0; index < records.length; index++) {
        const name = records[index].fields.Name
        const imageUrl = records[index].fields.Attachments[0].url
        // Create Container element
        const containerElement = document.createElement('div')
        containerElement.classList.add('container')
        // Create Image element
        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src', imageUrl)
        // Create  name Element
        const  nameElement = document.createElement('p')
         nameElement.classList.add('name')
         nameElement.innerHTML =  name
        // Add Container Element to DOM
        group1ContainerElement.appendChild(containerElement)
        // Add Image elements to container elements
        containerElement.appendChild(imageElement)
        // Add  name elements
        containerElement.appendChild(nameElement)


    }
})

const fetchPromise3 = fetch(authenticatedUrl3)
const jsonPromise3 = fetchPromise3.then((response) => {
    return response.json()
})
jsonPromise3.then((data) => {
    const records = data.records
    for (let index = 0; index < records.length; index++) {
        const name = records[index].fields.Name
        const imageUrl = records[index].fields.Attachments[0].url
        // Create Container element
        const containerElement = document.createElement('div')
        containerElement.classList.add('container')
        // Create Image element
        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src', imageUrl)
        // Create  name Element
        const  nameElement = document.createElement('p')
         nameElement.classList.add('name')
         nameElement.innerHTML =  name
        // Add Container Element to DOM
        group3ContainerElement.appendChild(containerElement)
        // Add Image elements to container elements
        containerElement.appendChild(imageElement)
        // Add  name elements
        containerElement.appendChild(nameElement)


    }
})

// Tabs
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
    
    // Remove the background color of all tablinks/buttons
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
      }
    
    // Show the specific tab content
      document.getElementById(pageName).style.display = "block";
    
    // Add the specific color to the button used to open the tab content
      elmnt.style.backgroundColor = color;
    }
    
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();


// Clock shit
function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
        var t = setTimeout(currentTime, 1000); /* setting timer */
    }

    function updateTime(k) { /* appending 0 before time elements if less than 10 */
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

currentTime();

// BIG BEN IMAGES ARE IN HTML

 