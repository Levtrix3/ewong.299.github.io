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

// BIG BEN IMAGES

var BNimages = [  // add path to directory if necessary
" Core_int_studio/Workshop/The_Archive/Final/img/image-00.jpg", 
// 12am-1am
" Core_int_studio/Workshop/The_Archive/Final/img/image-01.jpg", 
// 1am-2am
" Core_int_studio/Workshop/The_Archive/Final/img/image-02.jpg", 
// 2am-3am
" Core_int_studio/Workshop/The_Archive/Final/img/image-03.jpg", 
// 3am-4am
" Core_int_studio/Workshop/The_Archive/Final/img/image-04.jpg", 
// 4am-5am
" Core_int_studio/Workshop/The_Archive/Final/img/image-05.jpg", 
// 5am-6am
" Core_int_studio/Workshop/The_Archive/Final/img/image-06.jpg", 
// 6am-7am
" Core_int_studio/Workshop/The_Archive/Final/img/image-07.jpg", 
// 7am-8am
" Core_int_studio/Workshop/The_Archive/Final/img/image-08.jpg", 
// 8am-9am
" Core_int_studio/Workshop/The_Archive/Final/img/image-09.jpg", 
// 9am-10am
" Core_int_studio/Workshop/The_Archive/Final/img/image-10.jpg", 
// 10am-11am
" Core_int_studio/Workshop/The_Archive/Final/img/image-11.jpg", 
// 11am-12pm
" Core_int_studio/Workshop/The_Archive/Final/img/image-12.jpg", 
// 12pm-1pm
" Core_int_studio/Workshop/The_Archive/Final/img/image-13.jpg", 
// 1pm-2pm
" Core_int_studio/Workshop/The_Archive/Final/img/image-14.jpg", 
// 2pm-3pm
" Core_int_studio/Workshop/The_Archive/Final/img/image-15.jpg", 
// 3pm-4pm
" Core_int_studio/Workshop/The_Archive/Final/img/image-16.jpg", 
// 4pm-5pm
" Core_int_studio/Workshop/The_Archive/Final/img/image-17.jpg", 
// 5pm-6pm
" Core_int_studio/Workshop/The_Archive/Final/img/image-18.jpg", 
// 6pm-7pm
" Core_int_studio/Workshop/The_Archive/Final/img/image-19.jpg", 
// 7pm-8pm
" Core_int_studio/Workshop/The_Archive/Final/img/image-20.jpg", 
// 8pm-9pm
" Core_int_studio/Workshop/The_Archive/Final/img/image-21.jpg", 
// 9pm-10pm
" Core_int_studio/Workshop/The_Archive/Final/img/image-22.jpg",
// 10pm-11pm
" Core_int_studio/Workshop/The_Archive/Final/img/image-23.jpg"
// 11pm-12am // NOTE: no comma after last entry
];
function TODimage() {
  var now = new Date();
  hr = now.getHours();                               // alert(hr);  // for testing
  var BN = 0;                                               // midnight to  5:59 am
  if ((hr >= 1) && (hr < 2)) { BN = 1; }   // 12pm to 12:59pm
  if ((hr >= 2) && (hr < 3)) { BN = 2; } // 1pm to 1:59pm
  if ((hr >= 3) && (hr < 4)) { BN = 3; } // 2pm to 2:59pm
  if ((hr >= 4) && (hr < 5)) { BN = 4; } // 3pm to 3:59pm
  if ((hr >= 5) && (hr < 6)) { BN = 5; } // 4pm to 4:59pm
  if ((hr >= 6) && (hr < 7)) { BN = 6; } // 5pm to 5:59pm
  if ((hr >= 7) && (hr < 8)) { BN = 7; } // 6pm to 6:59pm
  if ((hr >= 8) && (hr < 9)) { BN = 8; } // 7pm to 7:59pm
  if ((hr >= 9) && (hr < 10)) { BN = 9; } // 8pm to 8:59pm
  if ((hr >= 10) && (hr < 11)) { BN = 10; } // 9pm to 9:59pm
  if ((hr >= 11) && (hr < 12)) { BN = 11; } // 10pm to 10:59pm
  if ((hr >= 12) && (hr < 13)) { BN =12; } // 11pm to 11:59pm
  if ((hr >= 13) && (hr < 14)) { BN = 13; } // 12am to 12:59am
  if ((hr >= 14) && (hr < 15)) { BN = 14; } // 13am to 13:59am
  if ((hr >= 15) && (hr < 16)) { BN = 15; } // 14am to 14:59am
  if ((hr >= 16) && (hr < 17)) { BN = 16; } // 15am to 15:59am
  if ((hr >= 17) && (hr < 18)) { BN = 17; } // 16am to 16:59am
  if ((hr >= 18) && (hr < 19)) { BN = 18; } // 17am to 17:59am
  if ((hr >= 19) && (hr < 20)) { BN = 19; } // 18am to 18:59am
  if ((hr >= 20) && (hr < 21)) { BN = 20; } // 19am to 19:59am
  if ((hr >= 21) && (hr < 22)) { BN = 21; } // 20am to 20:59am
  if ((hr >= 22) && (hr < 23)) { BN = 22; } // 21am to 21:59am
  if ((hr >= 23) && (hr < 0)) { BN = 23; } // 22am to 22:59am
  if ((hr >= 0) && (hr < 1)) { BN = 24; } // 23am to 23:59am
  
  document.getElementById('BNimage').src = BNimages[BNJ];
  
  
}