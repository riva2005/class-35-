class Form{construcor(){}
display(){
    var title=createElement('h2');
    title.html("CAR RACING GAME");
    title.position(150,0);
    var input=createInput("name");
    var button=createButton("Play");
    var greeting=createElement('h3');
    input.position(150,100);
    button.position(250,200);
    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name=input.value();
        playerCount+=1;
        player.update(name);
        player.updateCount(playerCount);
        greeting.html("hello"+name);
        greeting.position(250,150);
    })
}






}