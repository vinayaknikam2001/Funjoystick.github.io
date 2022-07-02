//Game constants
let direction = {x:1 , y:0};

//Loading audio files
const food_sound = new Audio("audio/Snake_Mania/food.mp3");
const die_sound = new Audio("audio/Snake_Mania/die.wav");


//Loading game variables
let speed = 6; 
let pretime = 0;
let snake = [{x:3 ,y:3}]; 
let food = {x:10 , y:12};
let score = 0
let startingx , startingy , movingx , movingy ,game_state=0;


//Function names
function main(ctime){
    window.requestAnimationFrame(main);
    //console.log(ctime)
    if((ctime - pretime)/1000 <(1/speed)){
        return;
    }
   
    if (game_state === 0){
        get_ready();
    }
    else if(game_state === 1){
        game_on();
    }
    else if(game_state === 2){
        game_over();
    }
    pretime = ctime;
}
 
function game_on(){ 
    //Erasing message box 
    document.getElementById("msg").style.display="none";
    document.getElementById("gameover").style.display="none";
    //Enabling touchscreen event listeners if device if small screen
    if(screen.width < 900){
        document.getElementById("controls").style.display="flex";
    }

    if(is_collide(snake)){
        // gameover_sound.play();
        die_sound.play();
        direction = {x:1 ,y:0};
        snake = [{x:2 ,y:3}]; 
        score = 0;

        //To show clearly snake is collided
        var past = Date.now();
        var present = past;
        while(present-past < 2000){
            present = Date.now();
        } 
        game_state = 2;
        

    } 

    if(snake[0].x === food.x && snake[0].y === food.y){
        food_sound.play()
        snake.unshift({x: snake[0].x + direction.x ,y: snake[0].y + direction.y})
        let a = 2;
        let b = 24;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())};
        score += 1
    }   
    for (let i =  snake.length -2 ; i>=0 ; i--){
        /*This "..." operator called spread syntax used to make shallow copy of object
        https://codeburst.io/what-are-three-dots-in-javascript-6f09476b03e1  */
        snake[i+1] = {...snake[i]};
    }  
    
    snake[0].x += direction.x;
    snake[0].y += direction.y;

    score_board.innerHTML = "Score :"+score;
    game_board.innerHTML = "";

    food_item = document.createElement("div");
    food_item.style.gridRowStart = food.y;
    food_item.style.gridColumnStart = food.x;
    food_item.classList.add("food");
    game_board.appendChild(food_item);

    snake.forEach((lst,index)=>{
        snake_item = document.createElement("div");
        snake_item.style.gridRowStart = lst.y;
        snake_item.style.gridColumnStart = lst.x;
        if(index === 0){
            snake_item.classList.add("head")
        }
        else{
            snake_item.classList.add("body")
        }   
        game_board.appendChild(snake_item);
    });
    
}

function is_collide(snake){
    for(let i = 1 ; i<snake.length ; i++){
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    if(snake[0].x >=26 || snake[0].x<=1 || snake[0].y>=26 || snake[0].y<=1){
        return true;
    }
    return false;
}
 
window.requestAnimationFrame(main);
window.addEventListener("keydown",k =>{
    direction = {x:0 ,y:1};
    switch (k.key) {
        case "ArrowUp":
            direction.x = 0;
            direction.y = -1;
            break;
        case "ArrowDown":
            direction.x = 0;
            direction.y = 1;
            break;  
        case "ArrowLeft":
            direction.x = -1; 
            direction.y = 0;
            break;
        case "ArrowRight":
            direction.x = 1;
            direction.y = 0;
            break;
    
        default:
            break;
    }
});
function up() {
    
    direction.x = 0;
    direction.y = -1;  
}
function down() {
    
    direction.x = 0;
    direction.y = 1;  
}
function left() {
    
    direction.x = -1;
    direction.y = 0;  
}
function right() {
    
    direction.x = 1;
    direction.y = 0;  
}

//Get ready to play
function get_ready(){
    //Disabling other touch screen event listners
    document.getElementById("msg").style.display="block";
    document.getElementById("gameover").style.display="none";
    document.getElementById("controls").style.display="none";
    window.addEventListener("click",k =>{
        game_state = 1;

    });
}

//Game over 
function game_over(){
    //Disabling other screen event listners
    document.getElementById("gameover").style.display="block";
    document.getElementById("msg").style.display="none";
    document.getElementById("controls").style.display="none";
    window.addEventListener("click",k =>{
        game_state = 0;
    });
}

