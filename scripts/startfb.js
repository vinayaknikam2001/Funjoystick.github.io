//Canvas variables
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");


//Loading images
const ball = new Image();
ball.src = "img/Fall_Ball/ball0.png";
const btn = new Image();
btn.src = "img/Fall_Ball/play.png";
const bkg = new Image();
bkg.src = "img/Fall_Ball/bg.png";


function disp(){

    //Drawing Images
    ctx.drawImage(bkg,0,0,380,492,0,0,380,550);
    ctx.drawImage(ball,0,0,800,800,30,100,100,100);  
    ctx.drawImage(btn,0,0,407,256,128,400,100,63);
    ctx.font = "50px Arial Rounded";
    ctx.fillText("Fall Ball",135,170)
    requestAnimationFrame(disp);
}

disp();