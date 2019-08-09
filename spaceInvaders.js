//variables
let userPosX = 200
let userPosY = 435
let userSpeed = 5
// let enemyY = 150
let y;
let x;
//images
let spaceship;
let backDrop;


//bullet time-variables
let userbulletX = userPosX + userSpeed;
let userbulletY = userPosY;
let bulletArray = [];
//user variables
let userTop, userLeft, userRight;
let bulletTop;
//Cades Enemies class-variables


//Cades enemies
function setup(){
   
    createCanvas(500,500)
    backDrop = loadImage("unnamed.png")
    background(0);
   
    //visuals
    spaceship = loadImage("kisspng-galaga-galaxian-golden-age-of-arcade-video-games-a-space-invaders-5acb8857275e55.2119557215232881511613.png")
    
}
    //characters 
function draw(){
    background(0)
    fill(255)
    image(backDrop, 0,0,500,500)
    image(spaceship,userPosX, userPosY, 50, 50)

    
    //arrow movement
    if (keyIsDown(LEFT_ARROW)){
        userPosX -= userSpeed
        userbulletX -= userSpeed
    } 
    if (keyIsDown(RIGHT_ARROW)){
        userPosX += userSpeed
        userbulletX += userSpeed
    }
    //left and right boundaries
    if(userPosX > 450 ){
        userPosX = 450
    }
    if(userPosX < 0){
        userPosX = 0
    }
    //defining user hit box
   userLeft = userPosX - 50
   userRight = userPosX + 50
   userTop = userPosY - 50

   //defining enemy hit box
//    enemyLeft = intialx
//    enemyRight = intialx + 40
//    enemyBottom = intialy 
    
    
    //Anthony's bullet
    for(let i=0; i<bulletArray.length;i++){
        fill(255)
        rect(bulletArray[i].bulletX + 23,bulletArray[i].bulletY,bulletArray[i].width,bulletArray[i].length)
        bulletArray[i].bulletY -=3
    }
    
}

//even more bullet stuff
function keyPressed(){
if(keyCode == 32){
    bullet = new Bullet(userPosX,415,-1)
    bulletArray.push(bullet);
    console.log(bulletArray);
    
}
}
//even even more bullet stuff
class Bullet{
constructor(startX,Y,possesion){
    this.bulletX = startX
    this.bulletY = Y
    this.direction = possesion
    this.length = 10
    this.bulletTop = startX - length/2
    this.bulletBottom = startX + length/2
    this.width = 5
}
}

