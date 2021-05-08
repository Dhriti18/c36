class Form{


    constructor(){


    }
    
    display(){

   var title = createElement('h2');
   title.position(130,0);
   title.html("Car Racing Game");

   var input = createInput("Name");
   input.position(130,160);
   var button=createButton("Play");
   button.position(250,200);
   
   button.mousePressed(function (){

button.hide();
input.hide();

playerCount++;

var name = input.value();
player.update(name);
player.updateCount(playerCount);

var greeting = createElement("h2")
greeting.html("Hello"+name)
greeting.position(130,160)   })
    }
}