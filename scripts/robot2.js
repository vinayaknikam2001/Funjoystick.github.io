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
restr = [rstr, rstr, rstr, rstr, rstr, rstr, rstr, rstr];
restl = [rstl, rstl, rstl, rstl, rstl, rstl, rstl, rstl];
let dr = { x: 740, y: 20, w: 60, h: 90 }
//Coins image
const coin = new Image();
coin.src = "img/Robot/coin.png";
//Game over
const over = new Image();
over.src = "img/Robot/game_over.png";
//Barrel & box
const barrel = new Image();
barrel.src = "img/Robot/Barrel (1).png";
const box = new Image();
box.src = "img/Robot/Box.png";
//Doors
const doorOpen = new Image();
doorOpen.src = "img/Robot/DoorOpen.png";
const door = new Image();
door.src = "img/Robot/door_lv2.png";
// Acid
const acid = new Image();
acid.src = "img/Robot/acid.png"
//Blast 
const blast = new Image();
blast.src = "img/Robot/blast.png";


//Jumping
const jmpl = new Image();
jmpl.src = "img/Robot/Jump_left.png";
left_jump = [jmpl, jmpl, jmpl, jmpl, jmpl, jmpl, jmpl, jmpl]
const jmpr = new Image();
jmpr.src = "img/Robot/Jump_right.png";
right_jump = [jmpr, jmpr, jmpr, jmpr, jmpr, jmpr, jmpr, jmpr]

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
left = [l1, l2, l3, l4, l5, l6, l7, l8];

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
right = [r1, r2, r3, r4, r5, r6, r7, r8];
let state = [restr, left, right, left_jump, right_jump];

//Loading tiles
const t1 = new Image();
t1.src = "img/Robot/Tile (12).png";
const t2 = new Image();
t2.src = "img/Robot/Tile (13).png";
const t3 = new Image();
t3.src = "img/Robot/Tile (14).png";
const t4 = new Image();
t4.src = "img/Robot/Tile (15).png";
const soil1 = new Image();
soil1.src = "img/Robot/Tile (4).png";
const soil2 = new Image();
soil2.src = "img/Robot/Tile (5).png";
const soil3 = new Image();
soil3.src = "img/Robot/Tile (6).png";
const soil4 = new Image();
soil4.src = "img/Robot/Tile (16).png";

//Saw images
const saw1 = new Image();
saw1.src = "img/Robot/Saw1.png";
const saw2 = new Image();
saw2.src = "img/Robot/Saw2.png";
const saw3 = new Image();
saw3.src = "img/Robot/Saw3.png";
const saw4 = new Image();
saw4.src = "img/Robot/Saw4.png";
const saw5 = new Image();
saw5.src = "img/Robot/Saw5.png";
const saw6 = new Image();
saw6.src = "img/Robot/Saw6.png";
const saw7 = new Image();
saw7.src = "img/Robot/Saw7.png";
const saw8 = new Image();
saw8.src = "img/Robot/Saw8.png";
let saw = [saw1, saw2, saw3, saw4, saw5, saw6, saw7, saw8];


//Loading sound 
const jump_sound = new Audio("audio/Robot/stomp.wav");
const over_sound = new Audio("audio/Robot/gameover.mp3");
const victory_sound = new Audio("audio/Robot/victory.wav");
const bump_sound = new Audio("audio/Robot/bump.wav");
const coin_sound = new Audio("audio/Robot/coin.wav");
const blast_sonud = new Audio("audio/Robot/blast.wav");
const door_sonud = new Audio("audio/Robot/door2.mp3");
lock=1


map = [[0 ,580 , 256, 128, 40, 20, t2],[40 ,580 , 256, 128, 40, 20, t2],[80 ,580 , 256, 128, 40, 20, t2],[120 ,580 , 256, 128, 40, 20, t2]
,[160 ,580 , 256, 128, 40, 20, t2],[200 ,580 , 256, 128, 40, 20, t2],[240 ,580 , 256, 128, 40, 20, t2],[280 ,580 , 256, 128, 40, 20, t2],[320 ,580 , 256, 128, 40, 20, t2]
,[360 ,580 , 256, 128, 40, 20, t2],[400 ,580 , 256, 128, 40, 20, t2],[440 ,580 , 256, 128, 40, 20, t2],[480 ,580 , 256, 128, 40, 20, t2],[520 ,580 , 256, 128, 40, 20, t2]
,[560 ,580 , 256, 128, 40, 20, t2],[580 ,580 , 256, 128, 40, 20, t2],[620 ,580 , 256, 128, 40, 20, t2],[660 ,580 , 256, 128, 40, 20, t2],[700 ,580 , 256, 128, 40, 20, t2]
,[740 ,580 , 256, 128, 40, 20, t2],[780 ,580 , 256, 128, 40, 20, t2],[0 ,410 , 256, 128, 40, 20, t2],[40 ,410 , 256, 128, 40, 20, t2],[80 ,410 , 256, 128, 40, 20, t2]
,[120 ,410 , 256, 128, 40, 20, t2],[160 ,410 , 256, 128, 40, 20, t2],[200 ,410 , 256, 128, 40, 20, t2],/*Moving tile no 27 & 28 */[240 ,410 , 256, 128, 40, 20, t1],[280 ,410 , 256, 128, 40, 20, t3]
/*moving tile index no 29 */,[760 ,480 , 256, 128, 40, 20, t4],[720 ,540 , 256, 128, 40, 40, t4],[660 ,240 , 256, 128, 40, 40, t3],[660 ,280 , 256, 256, 40, 40, soil3],[660 ,320 , 256, 128, 40, 20, soil3]
,[620 ,320 , 256, 128, 40, 20, soil2],[580 ,320 , 256, 128, 40, 20, soil2],[540 ,320 , 256, 128, 40, 20, soil2],[500 ,320 , 256, 128, 40, 20, soil2],[460 ,320 , 256, 128, 40, 20, soil2]
,[420 ,320 , 256, 128, 40, 20, soil1],[420 ,280 , 256, 256, 40, 40, soil1],[420 ,240 , 256, 128, 40, 40, t1],[540 ,240 , 256, 128, 40, 40, t4],[600 ,100 , 256, 128, 40, 20, t4],[480 ,100 , 256, 128, 40, 20, t4]
,[160 ,370 , 256, 256, 40, 40, box],[0 ,150 , 256, 128, 40, 20, t2],[40 ,150 , 256, 128, 40, 20, t2],[80 ,150 , 256, 128, 40, 20, t3],[420 ,480 , 256, 128, 40, 20, t4],[540 ,480 , 256, 128, 40, 20, t4],
[660 ,480 , 256, 128, 40, 20, t4]


]


//Coinmap
let coinmap = [[720, 500, 1], [660, 200, 1], [600, 60, 1], [480, 60, 1], [420, 200, 1], [120, 370, 1], [80, 370, 1], [40, 370, 1],[420,440,1],[540,440,1],[660,440,1]];
let collected=0;

//Time variables
let fps = 30;
var then = Date.now();
let game_state = 1;
let onplat = false;
let ob_speed = [3, 3];
let kdn = true;
let saw_i = 0

//Player variables
let robo = {x: 0, y: 480, w: 100, h: 90, dx: 0, dy: 0, gravity: 2, xspeed: 7, yspeed: -22, si: 0, imgi: 0 };
let spiky_obj = {x: 350, y: 130, w: 60, h: 40, speed: 2 };
let saw_obj = {x: 500, y: 550, h: 60, w: 60, speed: 3};

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
function game_on() {

    //Drawing things
    ctx.fillStyle = "rgb(20,20,20)";
    ctx.fillRect(0, 0, 800, 650);
    ctx.drawImage(doorOpen, 0,0 ,281,464, 0,480, 50,100);
    ctx.drawImage(door, 0,0 ,281, 464, 0,50, 50,100);
    ctx.drawImage(acid, 0,0 ,256, 52, 460, 270, 200,50);
    ctx.drawImage(state[robo.si][robo.imgi], 0, 0, 567, 556, robo.x, robo.y, robo.w, robo.h);
    ctx.drawImage(saw[robo.imgi], 0, 0, 357, 361, saw_obj.x, saw_obj.y, saw_obj.h, saw_obj.w);
    ctx.drawImage(barrel, 0,0, 177, 238, 200, 360, 40, 70);
    ctx.drawImage(barrel, 0,0, 177, 238, 760, 530, 40, 70);

    //Making collected 0
    collected=0;

    //Temporary variable
    var obs = 0;
    map.forEach(lst => {
        ctx.drawImage(lst[6], 0, 0, lst[2], lst[3], lst[0], lst[1], lst[4], lst[5]);
        if (is_collide(robo.x + robo.dx, robo.y - 10, lst[0], lst[1], lst[4], lst[5])) {
            robo.dx = 0
            if (robo.x > lst[0] + 40) {
                robo.x = lst[0] + 40;
            }
        }
        if (is_collide(robo.x, robo.y + robo.dy, lst[0], lst[1], lst[4], lst[5])) {
            if (robo.dy >= 0 && robo.y + 60 < lst[1]) {
                robo.y = lst[1] - robo.h;
                if (obs == 29)
                    robo.y += ob_speed[0];
                
                if (obs == 27 || obs == 28)
                    robo.y += ob_speed[1];

            }
            else if (robo.dy < 0 && robo.y > lst[1]) {
                robo.y = lst[1] + 27;
                bump_sound.play();
            }

            //Filling transparent space of image
            robo.y += 5;
            robo.dy = 0;
            robo.si = 0;
            onplat = true;
        }
        obs += 1
    });

   
    coinmap.forEach(lst=>{
        if(lst[2]){ 
            ctx.drawImage(coin,0,0,135,135,lst[0],lst[1],40,40);
            if(is_collide(robo.x,robo.y,lst[0],lst[1],40,40)){
                coin_sound.play();
                lst[2] = 0;
            }
        } 
        else{
            collected+=1;
        }
    
    });

    //Opening door
    if(lock && collected==11){
        lock=0;
        door.src="img/Robot/DoorOpen.png";
        door_sonud.play();
    }


    document.addEventListener("keydown", k => {

        if (k.code === "ArrowLeft") {
            robo.dx = -robo.xspeed;
            state[0] = restl;

        }
        if (k.code === "ArrowRight") {
            robo.dx = robo.xspeed;
            state[0] = restr;
        }
        /*Here kdn variable is taken to ensure that action is taken only once.
        Player has to release and press space again in order to jump*/
        if (k.code === "Space" && kdn) {
            if (onplat) {
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
        if (k.code === "Space") {
            kdn = true;
        }
    });


    //Changing robo state depending on before jump
    if (robo.dx < 0) {
        // robo.x += robo.dx;
        if (onplat)
            robo.si = 1;
    }
    if (robo.dx > 0) {
        // robo.x += robo.dx;
        if (onplat)
            robo.si = 2;
    }
    robo.x += robo.dx;


    //Increasing gravity
    robo.dy += robo.gravity;
    robo.y += robo.dy;

    //When robo is jumping 
    if (robo.dy < 0) {
        if (state[0] === restl) {
            robo.si = 3;
        }
        else {
            robo.si = 4;
        }
    }

    //Iterating through images
    if (robo.imgi < 7) {
        robo.imgi += 1
    }
    else {
        robo.imgi = 0
    }


    // //Moving tiles
    map[29][1] += ob_speed[0]
    if (map[29][1] < 100) {
        ob_speed[0] *= -1;
    }
    else if (map[29][1] > 480) {
        ob_speed[0] *= -1;
    }
    map[27][1] += ob_speed[1];
    map[28][1] += ob_speed[1];
    if (map[27][1] > 410) {
        ob_speed[1] *= -1;
    }
    else if (map[27][1] < 200) {
        ob_speed[1] *= -1;
    }//Ending moving tiles


	//Keeping robo in the canvas screen
    if (robo.x < -30){
        robo.x= -30;
    }
    else if(robo.x > 730){
        robo.x= 730;
    }

    if(saw_obj.x >660){
        saw_obj.speed *= -1;
    }
    else if(saw_obj.x < 250){
        saw_obj.speed *= -1;
    }
    saw_obj.x += saw_obj.speed;

    // Checking for game over event
    if(is_collide(robo.x, robo.y, saw_obj.x, saw_obj.y+20, saw_obj.w, saw_obj.h)){
        blast_sonud.play();
        ctx.drawImage(blast,0,0,900,800,robo.x,robo.y,100,100);
        game_state =2;
        over_sound.play();
    }
    else if(is_collide(robo.x, robo.y, 460, 290 ,200, 50)){
        blast_sonud.play();
        ctx.drawImage(blast,0,0,900,800,robo.x,robo.y,100,100);
        game_state =2;
        over_sound.play();
    }
    else if(is_collide(robo.x, robo.y, 760, 545, 40, 70)){
        blast_sonud.play();
        ctx.drawImage(blast,0,0,900,800,robo.x,robo.y,100,100);
        game_state =2;
        over_sound.play();
    }
    else if(is_collide(robo.x, robo.y, 200, 375, 40, 60)){
        blast_sonud.play();
        ctx.drawImage(blast,0,0,900,800,robo.x,robo.y,100,100);
        game_state =2;
        over_sound.play();
    }
    if(is_collide(robo.x, robo.y, 0, 50, 50, 100)){
        if(collected==11){
            victory_sound.play();
            game_state=0;
        }
    }

}


function is_collide(x1, y1, x2, y2, w, h) {
    //Transparent pixels managing
    if (x1 + 30 > x2 + w || x1 + 60 < x2 ||
        y1 + 10 > y2 + h || y1 + robo.h < y2) {
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
    document.getElementById('playAgain').style.display="block";
}

function play_again(){
	location.reload();
    document.getElementById('playAgain').style.display="none";
}