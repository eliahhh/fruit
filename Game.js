class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    player1 = createSprite(200,500);
    player1.addImage("basket2", player1)

    player2 = createSprite(800,500);
    player2.addImage("basket2", player2);
    players = [player1,player2];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
      //var display_position = 100;
      image(jungle,0,0,1000,800);
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 100;
      var y = 200;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = 500 - allPlayers[plr].distance;
        //use data form the database to display the cars in y direction
        y = 500;
        players[index-1].x = x;
        players[index-1].y = y;

        if (index === player.index){
          stroke(10);
          fill("red");
          
        textSize(15);
        text(allPlayers[plr].name,x-25,y+25);
      }
      textSize(25);
      text("Player 1:"+ allPlayers.player1.score,50,50);
      text("Player 2:"+ allPlayers.player2.score,50,100);
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
    }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
 
    if(frameCount % 20 === 0)
    {

      fruit = createSprite(random(100,1000),0,100,100);
      fruit.velocityY = 6;
      var rand = Math.round(random(1,5));
      switch(rand){

        case 1: fruit.addImage("a",apple);
        break;

        case 2: fruit.addImage("b",melon);
        break;
        
        case 3: fruit.addImage("c",pineapple);
        break;
        
        case 4: fruit.addImage("d",banana);
        break;

        case 5: fruit.addImage("e",orange);
        break;
        
      }

      fruitGroup.add(fruit);

    }
      if(player.index !== null)
      {
        for (var i = 0; i < fruitGroup.length; i++)
         { 
           if (fruitGroup.get(i).isTouching(players)) 
           { 
             fruitGroup.get(i).destroy();
              player.score =player.score+1;
               player.update(); 
              }
              }
      }

    
  }
  end(){

    console.log("gameEnded");
    
  }
}
