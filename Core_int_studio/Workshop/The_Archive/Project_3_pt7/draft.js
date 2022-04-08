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


