// Variables

const airtableApiKey = "keyV7LgbJKWVZQMgS"

const airtableDatabaseUrl="https://api.airtable.com/v0/appxlRsv7Yylk9ufK/Illustrations"

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey



// References
const illustrationsContainerElement = document.querySelector('#illustrations')



// Application
console.log(authenticatedUrl)

const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()
})
jsonPromise.then((data) => {
    const records = data.records
    for (let index = 0; index < records.length; index++) {
        const name = records[index].fields.Name
        const imageUrl = records[index].fields.Attachments[0].url
        // Create Container
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
        illustrationsContainerElement.appendChild(containerElement)
        // Add Image elements to container elements
        containerElement.appendChild(imageElement)
        // Add  name elements
        containerElement.appendChild(nameElement)


    }
})

