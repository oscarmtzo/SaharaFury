addEventListener('keydown',(e) =>{
    switch (e.keyCode){
    case 39:
        playeruno.moveRight()
        console.log(e.keyCode)
        break;
    case 37:
        playeruno.moveLeft()
        console.log(e.keyCode)
        break;
    case 38:
        playeruno.moveUp()
        break;
    case 40:
        playeruno.moveDown()
        break;
    
    case 87:
        playerdos.moveUp()
        console.log(e.keyCode)
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
    }
})