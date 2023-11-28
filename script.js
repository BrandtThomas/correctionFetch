fetch('https://api.api-onepiece.com/episodes')
.then(response => response.json())
.then(data => {
    for (let i = 0; i <= 300; i++) {
        console.log(data[i].id)
               
        const createCard = document.createElement('div');
        createCard.className = "card"

        const createId = document.createElement('p');
        createId.textContent = data[i].id

        const createTitle = document.createElement('h2');
        createTitle.textContent = data[i].title;

        const createDescription = document.createElement('p');
        createDescription.textContent = data[i].description

        document.body.appendChild(createCard)
        createCard.appendChild(createId)
        createCard.appendChild(createTitle)
        createCard.appendChild(createDescription)

    }
    
})

