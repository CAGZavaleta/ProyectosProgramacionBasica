let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let mascotaSelecJugador
let mascotaSelectEnemigo

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador) 

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionBtnReiniciar = document.getElementById('reiniciar')
    sectionBtnReiniciar.style.display = 'none'
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonHierba= document.getElementById('boton-hierba')
    botonHierba.addEventListener('click', ataqueHierba)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'


    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
        mascotaSelecJugador = 'Hipodoge'
    } else if (inputCapipepo.checked) {
      spanMascotaJugador.innerHTML = 'Capipepo'
       mascotaSelecJugador = 'Capipepo'
    } else if(inputRatigueya.checked) {
       spanMascotaJugador.innerHTML = 'Ratigueya'
        mascotaSelecJugador = 'Ratigueya'
    } else if(inputLangostelvis.checked) {
       spanMascotaJugador.innerHTML = 'Langostelvis'
        mascotaSelecJugador = 'Langostelvis'
    } else if(inputTucapalma.checked) {
    spanMascotaJugador.innerHTML = 'Tucapalma'
     mascotaSelecJugador = 'Tucapalma'
    } else if(inputPydos.checked) {
        spanMascotaJugador.innerHTML = 'Pydos'
         mascotaSelecJugador = 'Pydos'
    } else {
        alert('Selecciona una mascota')
    }
    
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
        mascotaSelectEnemigo = 'Hipodoge'
    } else if(mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
        mascotaSelectEnemigo = 'Capipepo'
    }else if(mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
        mascotaSelectEnemigo = 'Ratigueya'
    }else if(mascotaAleatoria == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
        mascotaSelectEnemigo = 'Langostelvis'
    }else if(mascotaAleatoria == 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
        mascotaSelectEnemigo = 'Tucapalma'
    } else if(mascotaAleatoria == 6) {
        spanMascotaEnemigo.innerHTML = 'Pydos'
        mascotaSelectEnemigo = 'Pydos'
    }

}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    seleccionarAtaqueMascotaEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    seleccionarAtaqueMascotaEnemigo()
}

function ataqueHierba() {
    ataqueJugador = 'HIERBA'
    seleccionarAtaqueMascotaEnemigo()
}

function seleccionarAtaqueMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    } else if(ataqueHierba == 3) {
        ataqueEnemigo = 'HIERBA'
    }
    combate()
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', las mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeBatalla(resultadoBatalla) {
   
    let sectionMensajeBatalla = document.getElementById('mensajeBatalla')

    let parrafoBatalla = document.createElement('p')
    parrafoBatalla.innerHTML = resultadoBatalla

    sectionMensajeBatalla.appendChild(parrafoBatalla)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled= true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonHierba= document.getElementById('boton-hierba')
    botonHierba.disabled=true

       let sectionBtnReiniciar = document.getElementById('reiniciar')
       sectionBtnReiniciar.style.display = 'block'



}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE 🥲🥲🥲")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'HIERBA') {
        crearMensaje("GANASTE 🎉🎉🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML =vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE 🎉🎉🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML =vidasEnemigo
    } else if(ataqueJugador == 'HIERBA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE 🎉🎉🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML =vidasEnemigo
    } else {
        crearMensaje("PERDISTE ❌❌❌")
        vidasJugador--
        spanVidasJugador.innerHTML =vidasJugador
    }
    revisarVidas()
}

function revisarVidas(){

    if(vidasEnemigo == 0) {
        crearMensajeBatalla('La mascota ' + mascotaSelecJugador + ' vencio a la mascota ' + mascotaSelectEnemigo + ' GANASTE LA BATALLA')
    } else if(vidasJugador == 0) {
        crearMensajeBatalla('La mascota ' + mascotaSelecJugador + ' fue vencia por la mascota ' + mascotaSelectEnemigo + ' PERDISTE LA BATALLA')
    }
}

function reiniciarJuego(){
    location.reload()

}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

window.addEventListener('load', iniciarJuego)