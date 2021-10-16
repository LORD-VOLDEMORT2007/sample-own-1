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
        var playerCountRef= await database.ref('playerCount').once("value")
        if(playerCountRef.exists ()){
          playerCount=playerCountRef.val();
          player.getCount();
        }
        
        form = new Form()
        form.display();
      }
  
      Ron1=createSprite(200,200 , 20 , 20)
        //car1.addImage(car1Img)
      Ron2=createSprite(200,200 , 20 , 20)
      ronsGroup.add(Ron1)
      ronsGroup.add(Ron2)
      bg();    

      rons = [Ron1 , Ron2]
      //make rons in a for loop according to the player count 

      //make bullets in a for loop according to the number of rons

      ron1bullet = createSprite(200 , 200, 20 , 20)
      ron2bullet = createSprite(200 , 200, 20 , 20)

      bullets = [ron1bullet , ron2bullet]

      bulletGroup.add(ron1bullet)
      bulletGroup.add(ron2bullet)

    }
  
    play(){
      form.hideForm();
      drawSprites();

        
      //text ("GAME STARTED" , width/2 , height/2);
      Player.getPlayerInfo();
      player.getFinishedPlayers();
      
      if(allPlayers !== undefined){
        //background ("red")
        //image (trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
          var yPosition = 0
          var xPosition = 0
          var x = 0
          var test
          var bulletsX
          var bulletsY
          var velocityy
          index = 0
          
        for(var plr in allPlayers){
          index=index+1
          x=x+200;
        //y= displayHeight-allPlayers[plr].distance
            xPosition = x+allPlayers[plr].distanceX
            yPosition = -20+allPlayers[plr].distanceY
            bulletsY = allPlayers[plr].bulletX
            bulletsX = allPlayers[plr].bulletY
            velocityy = allPlayers[plr].bulletVelocity

            rons[index-1].x=xPosition;
            rons[index-1].y=yPosition;

            bullets[index-1].x = bulletsX
            bullets[index-1].y = bulletsY 

            bullets[index-1].veloityX = velocityy

            /*function velocity(){

              bullets[index-1].getSpeed(velocityy)

            }*/

          //ron1bullet.x = xPosition
         // ron1bullet.y = yPosition

        }
      }
  
      if (rons[player.index-1].isTouching(bgGroup) && dir === 180){
        test = true
        player.distanceX += 1
        player.update();
        console.log(dir)
      }
      else if (rons[player.index-1].isTouching(bgGroup) && dir === 0){
        test = true
        player.distanceX -= 1
        player.update();
        console.log(dir)
      }
      else if (rons[player.index-1].isTouching(bgGroup) && dir === -90){
        test = true
        player.distanceY += 1
        player.update();
        console.log(dir)
      }
      else if (rons[player.index-1].isTouching(bgGroup) && dir === 90){
        test = true
        player.distanceY -= 1
        player.update();
        console.log(dir)
      }
      else{
        test = false
        console.log(dir)
      }

      console.log(test)

      if(keyIsDown(LEFT_ARROW ) && test === false /*and it should not be colliding with the bg sprites*/){
        dir = 180        
        player.distanceX -= 1
        player.update();
    }
    else if(keyIsDown(RIGHT_ARROW)&& test === false){
      dir = 0
      player.distanceX += 1
        player.update();
    }
    else if(keyIsDown(UP_ARROW)&& test === false){
      dir = -90
      player.distanceY -= 1
        player.update();
    }
    else if(keyIsDown(DOWN_ARROW)&& test === false){
      dir = 90
      player.distanceY += 1
        player.update();
    }
    //player bullets
    if(keyWentDown(65)){
      player.bulletX = rons[player.index-1].x
      player.bulletY = rons[player.index-1].y
      player.bulletVelocity = 5
      player.update();
      

      //this.createBullet();
      //bullet.x -= 20
      //ron1bullet.x = rons[index-1].x
      //ron1bullet.y = rons[index-1].y
      //ron1bullet.setSpeed(3,dir);
      //player.update();
     // this.createBullet();
      
    }
  


    /*bulletGroup.overlap(Ron2 , function(bg , bu){
      bu.visible = false;
    })
    bulletGroup.overlap(Ron1 , function(bg , bu){
      bu.visible = false;
    })

    bgGroup.overlap(bulletGroup , function(bg , bu){
      bu.destroy();
      
    })*/

    
    
  }

createBullet(){

  
  /*velocity();*/
  //bullets[player.index-1].getDirection(dir);
  
  /*bullet = createSprite(rons[player.index-1].x , rons[player.index-1].y , 20 , 20) 
  bullet.shapeColor="red"
  //bullet.velocityX=3; 
  bullet.setSpeed(3,dir)
  
  bullet.lifetime = 300
  bulletGroup.add(bullet)*/

}


}
