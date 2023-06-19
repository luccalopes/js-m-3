const velocimetro = document.querySelector('#velocimetro')
const velocidade = document.querySelector('#velocidade')

let watchID = null
const option = {enableHighAccuracy: true}

velocimetro.addEventListener('click', () => {
    console.log(watchID)
    if (!watchID) {
        watchID = navigator.geolocation.watchPosition (
            updatePosition, handleError, option
        )
    } else {
        navigator.geolocation.clearWatch(watchID)
        watchID = null
        velocidade.textContent = 0
    }
})

function updatePosition(position) {
    if (position.coords.speed === null)
    return 
    
    velocidade.textContent = (position.coords.speed * 3.6).toFixed(1)
}

function handleError(error) {
    console.log(error.message)
}