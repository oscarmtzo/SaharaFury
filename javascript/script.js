
window.onload = function (){
    document.getElementById("startGame").onclick = function(){
        startGame()
    }
    function update(){
       board.draw()
    }
    function startGame(){
        if (interval){return interval = setInterval(1000/60)}
    }
    
}
/**/ 