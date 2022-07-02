let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");


//Loading images
const spiky = new Image();
spiky.src = "img/Robot/spiky.png"
//Rest state 
const rstr = new Image();
rstr.src = "img/Robot/right.png";
const rstl = new Image();
rstl.src = "img/Robot/left.png";
restr = [rstr,rstr,rstr,rstr,rstr,rstr,rstr,rstr];
restl = [rstl,rstl,rstl,rstl,rstl,rstl,rstl,rstl];
const door = new Image();
door.src = "img/Robot/door.png";
let dr = {x: 740, y: 10, w:60, h:90}
//Coins image
const coin = new Image();
coin.src = "img/Robot/coin.png";
//Game over
const over = new Image();
over.src = "img/Robot/game_over.png";
//Blast 
const blast = new Image();
blast.src = "img/Robot/blast.png";


//Jumping
const jmpl = new Image();
jmpl.src = "img/Robot/Jump_left.png";
left_jump = [jmpl,jmpl,jmpl,jmpl,jmpl,jmpl,jmpl,jmpl]
const jmpr = new Image();
jmpr.src = "img/Robot/Jump_right.png";
right_jump = [jmpr,jmpr,jmpr,jmpr,jmpr,jmpr,jmpr,jmpr]

//Running left
const l1 = new Image();
l1.src = "img/Robot/Run (01).png";
const l2 = new Image();
l2.src = "img/Robot/Run (02).png";
const l3 = new Image();
l3.src = "img/Robot/Run (03).png";
const l4 = new Image();
l4.src = "img/Robot/Run (04).png";
const l5 = new Image();
l5.src = "img/Robot/Run (05).png";
const l6 = new Image();
l6.src = "img/Robot/Run (06).png";
const l7 = new Image();
l7.src = "img/Robot/Run (07).png";
const l8 = new Image();
l8.src = "img/Robot/Run (08).png";
left = [l1,l2,l3,l4,l5,l6,l7,l8];

//Running right
const r1 = new Image();
r1.src = "img/Robot/Run (1).png";
const r2 = new Image();
r2.src = "img/Robot/Run (2).png";
const r3 = new Image();
r3.src = "img/Robot/Run (3).png";
const r4 = new Image();
r4.src = "img/Robot/Run (4).png";
const r5 = new Image();
r5.src = "img/Robot/Run (5).png";
const r6 = new Image();
r6.src = "img/Robot/Run (6).png";
const r7 = new Image();
r7.src = "img/Robot/Run (7).png";
const r8 = new Image();
r8.src = "img/Robot/Run (8).png";
right = [r1,r2,r3,r4,r5,r6,r7,r8];
let state = [restr,left,right,left_jump,right_jump];

//Loading tiles
const t1= new Image();
t1.src = "img/Robot/1.png";
const t2= new Image();
t2.src = "img/Robot/2.png";
const t3= new Image();
t3.src = "img/Robot/3.png";
const t4= new Image();
t4.src = "img/Robot/4.png";
const soil1= new Image();
soil1.src = "img/Robot/6.png";
const soil2= new Image();
soil2.src = "img/Robot/7.png";
const soil3= new Image();
soil3.src = "img/Robot/8.png";
const soil4= new Image();
soil4.src = "img/Robot/9.png";


let map  = [[0,580,t2],[40,580,t2],[80,580,t2],[120,580,t2],[160,580,t3],[280,580,t4],[400,580,t1],[440,580,t2]
,[480,580,t2],[520,580,t2],[560,580,t2],[600,580,t2],[640,580,t2],[680,580,t2],[720,580,t2],[760,580,t2]
,[760,500,t1],[0,390,t2],[40,390,t3],[640,390,t3],[600,390,t2],[560,390,t2],[520,390,t2],[480,390,t2],[440,390,t2],[400,390,t1]
,[120,330,t4]/*This indexno. 26 is moving tile*/,[40,250,t3],[0,210,t4],[180,170,t1],[220,170,t2],[260,170,t2],[300,170,t2],[340,170,t2]
,[0,70,t2],[40,70,t3],[380,170,t3],[420,170,t4]/*This indexno. 37 is moving tile*/,/*lasttile*/[760,90,t2],[720,90,t1],];

//Coin variable
let coinmap = [[760,460,1],[0,350,1],[40,350,1],[600,350,1],[520,350,1],[40,210,1],[0,170,1],[0,30,1],[40,30,1]];
let collected=0

//Loading sound 
const jump_sound = new Audio("audio/Robot/stomp.wav");
const over_sound = new Audio("audio/Robot/gameover.mp3");
const victory_sound = new Audio("audio/Robot/victory.wav");
const bump_sound = new Audio("audio/Robot/bump.wav");
const coin_sound = new Audio("audio/Robot/coin.wav");
const blast_sonud = new Audio("audio/Robot/blast.wav");
const door_sonud = new Audio("audio/Robot/door.mp3");
let lock=1;

//Time variables
let fps = 30 ;
var then = Date.now();
let game_state = 1;
let onplat = false;
let ob_speed = [3,3];
let kdn = true;

//Player variables
let robo = {x: 20 ,y: 500 ,w: 100 ,h: 90 ,dx: 0 ,dy: 0 ,gravity: 2 ,xspeed: 7 ,yspeed: -22 ,si: 0 ,imgi: 0};
let spiky_obj = {x: 350, y: 130, w: 60, h: 40 , speed: 2};

//Game loop
function game_loop() {
    now = Date.now();
    var diffrence = now - then;
    if (diffrence >= 1000 / fps) {
        switch (game_state) {
            case 0:
                victory();
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



//Game on function
function game_on(){
    //Drawing things
    ctx.fillStyle = "rgb(45,100,180)";
    ctx.fillRect(0, 0, 800, 650);
    if(collected==9){
        door.src="img/Robot/open.png";
    }
	ctx.drawImage(door,0,0,186,280,dr.x,dr.y,dr.w,dr.h)
    //Making collected 0;
	collected=0
    ctx.drawImage(state[robo.si][robo.imgi],0,0,567,556,robo.x,robo.y,robo.w,robo.h);
    ctx.drawImage(spiky,0,0,364,202,spiky_obj.x,spiky_obj.y,spiky_obj.w,spiky_obj.h)

    //Temporary variable
    var obs =0;
    map.forEach(lst => {
        ctx.drawImage(lst[2],0,0,256,256,lst[0],lst[1],40,40);
        if(is_collide(robo.x+robo.dx,robo.y-10,lst[0],lst[1])){
            robo.dx = 0
            if(robo.x > lst[0]+40){
                robo.x = lst[0]+40;
            }
        } 
        if(is_collide(robo.x,robo.y+robo.dy,lst[0],lst[1])){    
            if(robo.dy >= 0 && robo.y+60 < lst[1]){
                robo.y = lst[1] - robo.h;
                if(obs == 26)
                    robo.x += ob_speed[0];
                //Object speed
                if(obs == 37)
                    robo.x += ob_speed[1];   
      
            }
            else if(robo.dy < 0 && robo.y > lst[1]){
                robo.y = lst[1] + 27;
                bump_sound.play();
            }

            //Filling transparent space of image
            robo.y += 5;
            robo.dy = 0;
            robo.si = 0;
            onplat = true;
        }
        obs+=1
    });
    
    
    coinmap.forEach(lst=>{
        if(lst[2]){ 
            ctx.drawImage(coin,0,0,135,135,lst[0],lst[1],40,40);
            if(is_collide(robo.x,robo.y+robo.dy+10,lst[0],lst[1])){
                coin_sound.play();
                lst[2] = 0;
            }
        }
		else{
			collected +=1;
		}

    });

    if(lock && collected==9){
        lock =0;
        door_sonud.play();
        door.src = "img/Robot/open.png";
    }

    
    document.addEventListener("keydown", k =>{
        
        if(k.code === "ArrowLeft"){
            robo.dx = -robo.xspeed;
            state[0] = restl;
                   
        }
        if(k.code === "ArrowRight"){
            robo.dx = robo.xspeed;
            state[0] = restr;      
        }
        /*Here kdn variable is taken to ensure that action is taken only once.
        Player has to release and press space again in order to jump*/
        if(k.code === "Space" && kdn){
            if(onplat){
                robo.dy = robo.yspeed;
                onplat = false;
                kdn = false;
                jump_sound.play();
            }
        }
    });
    document.addEventListener("keyup", k => {
        if (k.code === "ArrowLeft") {
            robo.si = 0;
            robo.dx = 0;
        }
        if (k.code === "ArrowRight") {
            robo.si = 0;
            robo.dx = 0;
        }
        if(k.code === "Space"){
            kdn = true;
        }
    });
	
	//Keeping robo in the canvas screen
    if (robo.x < -30){
        robo.x= -30;
    }
    else if(robo.x > 730){
        robo.x= 730;
    }
    

    //Changing robo state depending on before jump
    if(robo.dx < 0){
        // robo.x += robo.dx;
        if(onplat)
             robo.si = 1;     
    }
    if(robo.dx > 0){
        // robo.x += robo.dx;
        if(onplat)
             robo.si = 2;     
    }
    robo.x += robo.dx;
   

    //Increasing gravity
    robo.dy += robo.gravity;
    robo.y += robo.dy;
        
    //When robo is jumping 
    if(robo.dy < 0){
        if(state[0] === restl){
            robo.si = 3;
        }
        else{
            robo.si = 4;
        }
    }

    //Iterating through images
    if(robo.imgi < 7){
        robo.imgi += 1
    }
    else{
        robo.imgi = 0
    }


    //Moving tiles
    map[26][0] += ob_speed[0]
    if(map[26][0] > 350){
        ob_speed[0] *= -1;
    }
    else if(map[26][0] <120){
        ob_speed[0] *= -1;
    }
    map[37][0] += ob_speed[1]
    if(map[37][0] > 640){
        ob_speed[1] *= -1;
    }
    else if(map[37][0] <420){
        ob_speed[1] *= -1;
    }//Ending moving tiles


    //Moving spiky monster
    spiky_obj.x += spiky_obj.speed;
    if(spiky_obj.x > 360){
        spiky_obj.speed *= -1;
    }
    else if(spiky_obj.x < 180){
        spiky_obj.speed *= -1;
    }
    //Detecting spiky collision
    if(is_bitten()){
        blast_sonud.play();
        ctx.drawImage(blast,0,0,900,800,robo.x,robo.y,100,100);
        game_state = 2;
        over_sound.play();
    }

    //Checking for victory
    if(is_victory()){
		if(collected==9){
			game_state=0;
			victory_sound.play();
		}
    }

    if(robo.y > 600){
        game_state = 2;
        over_sound.play();
    }

    
}

//Checking for victory
function is_victory(){
    if(robo.x+30 > dr.x+dr.w || robo.x+65 < dr.x ||
        robo.y > dr.y+dr.h || robo.y+robo.h < dr.y){
            return false
        }
    else
        return true
}

//Detecting spiky collision
function is_bitten(){
    //Detecting spiky collision
    if(robo.x+17 > spiky_obj.x+spiky_obj.w-10 || robo.x+65 < spiky_obj.x
        ||robo.y > spiky_obj.y+spiky_obj.h || robo.y+robo.h-10 < spiky_obj.y){
            return false
    }
    else{
        return true
    }

}

    

function is_collide(x1,y1,x2,y2){
    //Transparent pixels managing
    if(x1+30 > x2+40 || x1+65 < x2 ||
        y1+10 > y2+40 || y1+robo.h < y2){
            return false;
        }
    else
        return true
}

function game_over(){
    document.getElementById('playAgain').style.display="block";
    ctx.drawImage(over, 0, 0, 520, 281, 310, 120, 180, 100);
}

function victory(){
	document.getElementById("box").style.display="flex";
}

function play_again(){
	location.reload();
    document.getElementById('playAgain').style.display="none";
}