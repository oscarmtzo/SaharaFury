addEventListener('keydown',(e) =>{
    switch (e.keyCode){
    case 39:
        playeruno.moveRight()
        
        break;
    case 37:
        playeruno.moveLeft()
        
        break;
    case 38:
        playeruno.moveUp()
        break;
    case 40:
        playeruno.moveDown()
        break;
    
    case 87:
        playerdos.moveUp()
        
        break;
    case 83:
        playerdos.moveDown()
        break;
    case 65:
        playerdos.moveLeft()
        break;
    case 68:
        playerdos.moveRight()
        break;
    case 32:
        clearInterval(interval)
        interval = 0
        break;
    }
})
audioButton.addEventListener('click', function (){
    if (!audioOn)playAudio()
    else stopAudio()
    audioOn = !audioOn
})

addEventListener('keyup', event =>{
    if(event.keyCode === 27){
        location.reload(true)
    }
})

