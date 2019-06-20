window.onload = function (){
    startGame()
}
function update (){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    board.draw()
    board.move()
    playeruno.draw()
    playerdos.draw()
    
}
function startGame(){
    if(!interval)interval = setInterval(update,1000/60)
}