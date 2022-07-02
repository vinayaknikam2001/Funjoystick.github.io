//Canvas variables
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

//Loading images
const platform = new Image();
platform.src = "img/Fall_Ball/spritesheet.png";
const bkg = new Image();
bkg.src = "img/Fall_Ball/bg.png";
const play_again = new Image();
play_again.src = "img/Fall_Ball/play_again.png";
const over = new Image();
over.src = "img/Fall_Ball/game_over.png";
const ball1 = new Image();
ball1.src = "img/Fall_Ball/ball1.png";
const ball2 = new Image();
ball2.src = "img/Fall_Ball/ball2.png";
const ball3 = new Image();
ball3.src = "img/Fall_Ball/ball3.png";
const ball4 = new Image();
ball4.src = "img/Fall_Ball/ball4.png";
const ball5 = new Image();
ball5.src = "img/Fall_Ball/ball5.png";
const ball6 = new Image();
ball6.src = "img/Fall_Ball/ball6.png";
let forward = [ball6,ball5,ball4,ball3,ball2,ball1];
let backward = [ball1,ball2,ball3,ball4,ball5,ball6];
let rest = [ball6,ball6,ball6,ball6,ball6,ball6];
ballstate = [rest,forward,backward];

//Loading bird 
//Blue bird right
const br1 = new Image();
br1.src = "img/Fall_Ball/blue_bird.png";
const br2 = new Image();
br2.src = "img/Fall_Ball/blue_bird2.png";
//Blue bird left
const bl1 = new Image();
bl1.src = "img/Fall_Ball/blue_bird_l.png";
const bl2 = new Image();
bl2.src = "img/Fall_Ball/blue_bird2_l.png";
blue = {left: [bl1,bl1,bl1,bl1,bl2,bl2,bl2,bl2] 
    ,right: [br1,br1,br1,br1,br2,br2,br2,br2] 
    ,x: -50 ,y: 100 ,dx: 2.5 ,dir: 0 ,w: 40 ,h: 33}
//Bird variables
let bi = 0;

//Green bird right
const gr1 = new Image();
gr1.src = "img/Fall_Ball/gb.png";
const gr2 = new Image();
gr2.src = "img/Fall_Ball/gb2.png";
//Blue bird left
const gl1 = new Image();
gl1.src = "img/Fall_Ball/gb_l.png";
const gl2 = new Image();
gl2.src = "img/Fall_Ball/gb2_l.png";
green = {left: [gl1,gl1,gl1,gl1,gl2,gl2,gl2,gl2] 
    ,right: [gr1,gr1,gr1,gr1,gr2,gr2,gr2,gr2] 
    ,x: 560 ,y: 300 ,dx: 2.5 ,dir: 1 ,w: 45 ,h: 45}

//Loading cloud images
const cloud1 = new Image();
cloud1.src = "img/Fall_Ball/cloud1.png";
const cloud2 = new Image();
cloud2.src = "img/Fall_Ball/cloud2.png";
const cloud3 = new Image();
cloud3.src = "img/Fall_Ball/cloud3.png";
cloud = [cloud1,cloud2,cloud3];
let c1 = {x: ran(-150,-100) ,y: ran(0,450) ,dx: 2};
let c2 = {x: ran(585,635) ,y: ran(0,450) ,dx: 2};
let r1= 1; r2 =2 ;


//Loading audio
const score_sound = new Audio("audio/Fall_Ball/bounce.wav")
const over_sound = new Audio("audio/Fall_Ball/gameover.mp3")
const victory_sound = new Audio("audio/Fall_Ball/victory.mp3")

//Time variables
let fps = 30 ;
var then = Date.now();
let game_state = 1;


//Platform variables
let plat_width = 240 , plat_height = 30 ,offset = 50 ,plat_speed = -5 ,size = 1 ,hole_w = 40;
let platforms = [{x: -5 ,y: 450} ,{x: -175 ,y: 550}] ;
let onplat = false ,old = -160 ,curnt = -160 ;
let a = -20
let b = -160;

//Ball variables
let ball = {x:200 ,y:0 ,h:30 ,w:30 ,dx:0 ,dy:0 ,gravity:3 ,rspeed: 5 ,lspeed: -5};
let leftpressed = rightpressed = false;
let si = 0 ,i = 0;




//Game loop
function game_loop() {
    now = Date.now();
    var diffrence = now - then;
    if (diffrence >= 1000 / fps) {
        switch (game_state) {
            case 0:
                level2();
                break;
            case 1:
                game_on();
                break;
            case 2:
                game_over();
                break;
            default:
                break;
        }
        //Asigning new time value
        then = now;
    }
    requestAnimationFrame(game_loop);
}
game_loop();
 


function game_on(){
    //Erasing play again button
    document.getElementById("play_again").style.display="none";

    //Ading event listeners
    document.addEventListener("keydown", k => {
        if (k.code === "ArrowLeft") {
            leftpressed = true;
            si = 2
        }
        if (k.code === "ArrowRight") {
            rightpressed = true;
            si = 1
        }
    });
    document.addEventListener("keyup", k => {
        if (k.code === "ArrowLeft") {
            leftpressed = false;
            si = 0
        }
        if (k.code === "ArrowRight") {
            rightpressed = false;
            si = 0
        }
    });

    //If any key pressed
    if(leftpressed){
        ball.dx = ball.lspeed;
        ball.x += ball.dx;
    }
    else if(rightpressed){
        ball.dx = ball.rspeed;
        ball.x += ball.dx;
    }
    else{
        ball.dx = 0;
    }
    //Changing ball state
    if(ball.dx > 0){
       si = 1;
    }
    else if(ball.dx <0){
        si = 2;
    }
    else{
        si = 0;
    }
    //Iterating through images
    if(i<5){
        i += 1;
    }
    else{
        i = 0;
    }


    //Drawing images
    ctx.drawImage(bkg,0,0,380,492,0,0,380,550);

    //Drawing clouds
    ctx.drawImage(cloud[r1],0,0,280,175,c1.x,c1.y,100,62);
    ctx.drawImage(cloud[r2],0,0,280,175,c2.x,c2.y,100,62);
    if(c1.x > 550){
        c1.x = ran(-150,-100)
        c1.y = ran(0,450)
        r1 = ran(0,2)
    }
    if(c2.x < -70){
        c2.x = ran(585,635)
        c2.y = ran(0,450)
        r2 = ran(0,2)
    }
    //Moving clouds
    c1.x += c1.dx;
    c2.x -= c2.dx;



    


    //Drawing blue bird
    if(blue.dir){
        ctx.drawImage(blue.left[bi],0,0,858,710,blue.x,blue.y,blue.w,blue.h);
        blue.x -= blue.dx
        if(blue.x < -80){
            blue.dir = 0
            blue.y = ran(100,450)
            var bird_size = ran(0,1)
            if(bird_size){
                blue.w = 50
                blue.h = 41
            }
            else{
                blue.w = 40
                blue.h = 33
            }
        }
    }
    else{
        ctx.drawImage(blue.right[bi],0,0,858,710,blue.x,blue.y,blue.w,blue.h);
        blue.x += blue.dx
        if (blue.x >560){
            blue.dir = 1  
            blue.y = ran(100,450)
            var bird_size = ran(0,1)
            if(bird_size){
                blue.w = 50
                blue.h = 41
            }
            else{
                blue.w = 40
                blue.h = 33
            }
        }
    }

    //Drawing green bird
    if(green.dir){
        ctx.drawImage(green.left[bi],0,0,570,570,green.x,green.y,green.w,green.h)
        green.x -= green.dx
        if(green.x < -80){
            green.dir = 0
            green.y = ran(100,450)
            var bird_size = ran(0,1)
            if(bird_size){
                green.w = 50
                green.h = 50
            }
            else{
                green.w = 40
                green.h = 40
            } 
        }
    }
    else{
        ctx.drawImage(green.right[bi],0,0,570,570,green.x,green.y,green.w,green.h)
        green.x += green.dx
        if(green.x > 560){
            green.dir = 1
            green.y = ran(100,450)
            var bird_size = ran(0,1)
            if(bird_size){
                green.w = 50
                green.h = 50
            }
            else{
                green.w = 40
                green.h = 40
            } 
        }

    }
    
   //Bird itertor 
    bi += 1
    if(bi > 7){
        bi = 0;
    }

    //Displaying platforms
    platforms.forEach((lst,index) =>{
        //Drawing platforms
        ctx.drawImage(platform,0,0,768,105,lst.x,lst.y,plat_width,plat_height);
        ctx.drawImage(platform,0,0,768,105,lst.x+offset+plat_width,lst.y,plat_width,plat_height);
    
        //Detecting collision with left platform
        if(left_collide(ball,lst.x)) {
            if(y_collide(ball,lst)){
                ball.y = lst.y - ball.h; 
                ball.dy = plat_speed;  
            }
        }

        //Detecting collision with right platform
        if(right_collide(ball,lst.x+offset)) {
            if(y_collide(ball,lst)){
                ball.y = lst.y - ball.h; 
                ball.dy = plat_speed;
            }
        }
    
        //Detecting collision with hole
        if(hole_collide(ball,lst)){
            dx = 0;
        }
        
        //Playing audio
        if(ball.y >= lst.y && ball.y <= lst.y +5){
            score_sound.play();
        }


        //Moving platforms upwards
        lst.y += plat_speed;  
    });
    //Drawing background
    ctx.drawImage(ballstate[si][i],0,0,800,800,ball.x,ball.y,ball.w,ball.h);


    //Restricting ball in the screen
    if(ball.x <0){
        ball.x = 0;
    }
    if(ball.x >320){
        ball.x = 320;
    }

    //Generating new platforms
    if(platforms[size].y == 450){

        while(Math.abs(old-curnt) <= 25){
            curnt = ran(a,b)
        }    
        old = curnt
        var new_plat = {x: curnt, y: 550 ,hole: self.x+plat_width};
        
        platforms.push(new_plat);
        size += 1;
    }

    //Deleting out off screen platform
    if(platforms[0].y < -30){
        platforms.shift();
        size -= 1;
        // score += 1;
        //document.getElementById("scoreboard").innerHTML="Score : "+score; 
    }
     
    //Changing ball gravity
    ball.dy += ball.gravity;
    ball.y += ball.dy;

    if(ball.y <= -30){
        //Playing game over audio
        over_sound.play();
        game_state = 2;
    }
    else if(ball.y > 560){
        //Playing victory sound
        victory_sound.play();
        game_state = 0;
    }

}


//Game over
function game_over(){
    //Displaying play again button
    document.getElementById("play_again").style.display="block";
    //Drawing images
    ctx.drawImage(play_again, 0, 0, 338, 146, 100, 380, 150, 50);
    ctx.drawImage(over, 0, 0, 520, 281, 85, 120, 180, 100);

}





function start_state(){
    game_state = 1;
    plat_width = 240 , plat_height = 30 ,offset = 50 ,plat_speed = -5 ,size = 1 ,hole_w = 40;
    platforms = [{x: -5 ,y: 450} ,{x: -175 ,y: 550}] ;
    onplat = false ,old = -160 ,curnt = -160 ;
    ball = {x:200 ,y:0 ,h:30 ,w:30 ,dx:0 ,dy:0 ,gravity:3 ,rspeed: 5 ,lspeed: -5};
    leftpressed = rightpressed = false;
    si = 0 ,i = 0;

}

//Checking y collision for platform
function y_collide(ball,lst){

    if(ball.y > lst.y+plat_height  || ball.y+ball.h+ball.dy < lst.y){
        return false;
    }
    else{
        return true;
    }
}

//Checking left platform collision
function left_collide(ball,x) {
    if (ball.x+7 > x+plat_width) {
        return false;
    }
    else{
        return true;
    }
    
}

//Checking right platform collision
function right_collide(ball,x) {
    if (ball.x+ball.w-7 < x+plat_width){
        return false;
    }
    else{
        return true;
    }
    
}

//Checking collision with hole
function hole_collide(ball,lst){
    if( ball.x > lst.x+offset+plat_width || 
        ball.x+ball.w < lst.x+plat_width || 
        ball.y > lst.y+ plat_height || 
        ball.y+ball.h < lst.y ) {
        return false;
    }
    else{
        return true;
    }
}

//Touch control functions
function move_left(){
    leftpressed = true;
} 
function move_right(){
    rightpressed = true;    
}
function stop_left(){
    leftpressed = false;
    si = 0;
}
function stop_right() {
    rightpressed = false;
    si = 0;
}


function ran(a,b){
    var c = Math.round(a + (b-a)* Math.random());
    return c;
}

function level2(){
    
    ctx.drawImage(bkg,0,0,380,492,0,0,380,550);
    ctx.drawImage(ball1,0,0,800,800,115,200,100,100);  
    ctx.font = "35px Arial Rounded";
    ctx.fillText("Victory!",110,100);
    //Displaying play again button
    document.getElementById("play_again").style.display="block";
    //Drawing images
    ctx.drawImage(play_again, 0, 0, 338, 146, 100, 380, 150, 50);
}