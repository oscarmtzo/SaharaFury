window.onload = function (){
    addEventListener("click", function(){
        startGame();
      })
}
function update (){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    board.draw()
    board.move()
    playeruno.draw()
    playerdos.draw()
    drawObs()
    moveObstacles()
    frames++
    checkCollition()
}
function startGame(){
    if(!interval)interval = setInterval(update,1000/60)
}