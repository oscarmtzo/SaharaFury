function generateObstacles(){
    arrObstaculosMoving.push(new Obstacle())
}
function drawObs(){
    if(frames%100===0){generateObstacles()}
    arrObstaculosMoving.forEach((e) =>{
        e.draw()
    })
}
function moveObstacles (){
    arrObstaculosMoving.forEach((e) =>{
        e.move()
    })
}
function gameOver(){
    clearInterval(interval)
    interval=0
    
}
function ctxGanadorUno(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle='black'
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = 'red'
    ctx.font = '30px Karmatic_Arcade'
    ctx.fillText('Game Over!', 70,280)
    ctx.fillStyle = 'white'
    ctx.fillText('Player1 Wins!', 70,320)
}
function ctxGanadorDos(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle='black'
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = 'red'
    ctx.font = '30px Karmatic_Arcade'
    ctx.fillText('Game Over!', 70,280)
    ctx.fillStyle = 'white'
    ctx.fillText('Player2 Wins!', 70,320)
}
function checkCollition (){
    arrObstaculosMoving.forEach(arrObstaculosMoving => {
        if(playeruno.isTouching(arrObstaculosMoving)) {return ctxGanadorDos(), gameOver()
    }else if(playerdos.isTouching(arrObstaculosMoving)){return ctxGanadorUno(),gameOver()}})
}
