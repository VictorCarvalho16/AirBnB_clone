const placesList = document.querySelector('.places')

fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
.then(function(response) {
  return response.json()
})
.then(function(response) {
  response.forEach(place => {
      const placeLi = document.createElement('li')

      const placeImage = document.createElement('img')
      placeImage.src = place.photo

      const placeTypeP = document.createElement('p')
      placeTypeP.className = 'type'
      placeTypeP.innerHTML = place.property_type

      const placeNameP = document.createElement('p')
      placeNameP.className = 'name'
      placeNameP.innerHTML = place.name

      const placePriceP = document.createElement('p')
      placePriceP.className = 'price'
      placePriceP.innerHTML = `<strong>R$ ${place.price}</strong> /noite.`

      placeLi.appendChild(placeImage)
      placeLi.appendChild(placeTypeP)
      placeLi.appendChild(placeNameP)
      placeLi.appendChild(placePriceP)

      placesList.appendChild(placeLi)
  })
})