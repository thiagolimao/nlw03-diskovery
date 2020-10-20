const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollwheelZoom: false,
    zoomControl: false
}

// Create map
const map = L.map('mapid', options).setView([-27.2205573,-49.6527781], 15)

// Create and add titlelayer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

// Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


// Create and add marker
L
.marker([-27.2205573,-49.6527781], { icon }) //{ icon } ou  { icon: icon }
.addTo(map)

// Image gallery
function selectImage(event){
    const button = event.currentTarget
    
    // remover todas as classes .actives
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    //  selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //  atualizar o container de imagem 
    imageContainer.src = image.src

    // adicionar a classe .active para o botao clicado
    button.classList.add('active')

}