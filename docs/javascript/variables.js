const canvas =  document.getElementById('saharaFury')
const ctx = canvas.getContext('2d')
let buttonStartGame = document.getElementById('startGame')
let audio = document.getElementById('audioPlayback')
let audioButton = document.getElementById('playAudio')
let interval
let frames = 0 
let audioOn = false
let arrObstaculosMoving = []
const board = new Board()
const playeruno = new PlayerUno()
const playerdos = new PlayerDos()

//let helicopter = new PlayerUno('/images/helicopter.png')

// let numeroIterador = 0
// let speedBoardScenario = 0 //velocidad inicial del escenario

//console.log(ctx)
//const board = new Board()
