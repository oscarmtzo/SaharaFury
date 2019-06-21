class Board {
    constructor (){
        this.x = 0
        this.y = 0
        this.width = canvas.width
        this.height = canvas.height
        this.img = new Image ()
        this.img.src = 'images/War3.png'
        this.img.onload = () => {
          this.draw()
        }
        console.log(this.x)
    }
    move(){
        this.x-=2
        if(this.x < -canvas.width){return this.x=0}
    }
    draw(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.img, this.x + canvas.width, this.y, this.width, this.height)
    }
}
class PlayerUno{
    constructor(){
        this.x = 5
        this.y = 50
        this.width = 89
        this.height = 32
        this.img = new Image ()
        this.img.src = 'images/helicoptero.png'
        this.img.onload = () =>{
            this.draw()
        }
    }
    moveRight(){
        this.x+=20
        if (this.x > canvas.width - this.width) this.x = 0
        // console.log('movimiento a la derech fuera del marco' + this.x)
    }
    moveLeft(){
        this.x-=20
        
    }
    moveUp(){
        this.y-=15
        
    }
    moveDown(){
        this.y+=15
    }
    draw(){
        
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    isTouching(arrObstaculosMoving) {
        return (
            this.x < arrObstaculosMoving.x + arrObstaculosMoving.width &&
            this.x + this.width > arrObstaculosMoving.x &&
            this.y < arrObstaculosMoving.y + arrObstaculosMoving.height &&
            this.y + this.height > arrObstaculosMoving.y
    );}
}
class PlayerDos{
    constructor(){
        this.x = 20
        this.y = 100
        this.width = 175
        this.height = 86
        this.img = new Image ()
        this.img.src = 'images/aircraft.png'
        this.img.onload = () =>{
            this.draw()
        }
    }
    moveRight(){
        this.x+=20
        if (this.x > canvas.width - this.width) this.x = 0
    }
    moveLeft(){
        this.x-=20
        
        
    }
    moveUp(){
        this.y-=15
        
    }
    moveDown(){
        this.y+=15
    }
    draw(){
        
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    isTouching(arrObstaculosMoving) {
        return (
            this.x < arrObstaculosMoving.x + arrObstaculosMoving.width &&
            this.x + this.width > arrObstaculosMoving.x &&
            this.y < arrObstaculosMoving.y + arrObstaculosMoving.height &&
            this.y + this.height > arrObstaculosMoving.y
    )}
}

class Obstacle{
    constructor(){
        this.x= canvas.width
        this.y = Math.floor(Math.random() * 540)
        this.width = 63
        this.height = 58
        this.img = new Image()
        this.img.src = 'images/scrittlship.png'
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.img, this.x + 1000, this.y, this.width, this.height)
    }
    move(){
        this.x-=2
    }
}