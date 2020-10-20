// Create map
const map = L.map('mapid').setView([-27.2205573,-49.6527781], 15)

// Create and add titlelayer 
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map)

// Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Gotas de Flor com amor <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>')


// Create and add marker
L
.marker([-27.2205573,-49.6527781], { icon }) //{ icon } ou  { icon: icon }
.addTo(map)
.bindPopup(popup)