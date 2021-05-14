var ball;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    db = firebase.database()
    pos = db.ref('ball/position')
    pos.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }

    drawSprites();
}
 function readPosition(data){
  posi = data.val()   
  console.log(posi)
  ball.x = posi.x
  ball.y = posi.y
 }
 function showError(){

 }
 
function changePosition(x,y){
    db.ref('ball/position').set({
      'x':posi.x+x,
      'y':posi.y+y 
    })
}
