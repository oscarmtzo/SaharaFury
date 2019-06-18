
class Board {
    constructor(){
        this.x = 0
        this.y = 0
        this.width = canvas.width
        this.height = canvas.height
        this.img = new Image()
        this.img.src = '/images/War3.png'
    }
    draw(){
        ctx.drawImage(this.x, this.y, this.width, this, this.height)
    }
}