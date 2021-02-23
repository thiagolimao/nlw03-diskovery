// Create map
const map = L.map('mapid').setView([-27.2205573,-49.6527781], 15)

// Create and add titlelayer 
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map)

// Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// create and add marker
map.on('click', function (event) {
    // console.log(event)
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remover icon
    marker && map.removeLayer(marker)

    // add icon Layer
    marker = L.marker([lat,lng], {icon})
    .addTo(map)
})

// Adicionar campo de fotos
function addPhotoField(){
    // pegar o container de Fotos  #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-upload 
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    // verificar se o campo esta vazio, se sim, não duplicar
    const input = newFieldContainer.children[0]
    
    if (input.value == "") {
        return 
    }

    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
    // console.log("Está funcionando")
}

function deleteField() {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1){
        //  limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //  deletar o campo
    span.parentNode.remove()

    // console.log("cheguei aqui")
}

// selecionar do sim e nao
function toggleSelect(event){

    // limpar classe active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach(function (button){
        button.classList.remove('active')
    })
    // adicionar a classe active no botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o input hidden com o valor selecionado 
    const input = document.querySelector('[name = "open_on_weekends"]')
    // console.log(input)

    input.value = button.dataset.value
}

function validateForm(event) {
    // validar se lat e lng estao preenchidos
    if(document.querySelector('[name = "lat"]').value == "") {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
}