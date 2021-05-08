class Player{

constructor(){}

getCount(){ 
    var playerCountref= database.ref("playerCount");
    playerCountref.on("value",function (data){

        playerCount=data.val();
    })

}

updateCount(count){
    var ref=database.ref("/");
    ref.update({
        playerCount:count
    })
}

update(name1){
    var playerIndex = "player"+playerCount;
    database.ref(playerIndex).set({
        name:name1,
    })
}

}