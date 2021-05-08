class Game{
    constructor(){

    }

    getState(){
        var gameStateref=database.ref("gameState");
        gameStateref.on("value",function(data){
            gameState=data.val();

        })
    }

    update(state){
        database.ref("/").update({// we are updating in root node so "/"
            gameState : state,
        
        })
    }

    start(){
        if(gameState===0){
         player = new Player();
         player.getCount();

         form = new Form();
         form.display(); 
        }
    }
}