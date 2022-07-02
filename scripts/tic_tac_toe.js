//Loading audio
const x_sound = new Audio("audio/TicTacToe/x.mp3");
const o_sound = new Audio("audio/TicTacToe/o.mp3");

//Variables
let mark = ['X','O'];
let turn = 1, winner = 0 ,empty = 9;

//Board lists
let cell_sign = [0,0,0,0,0,0,0,0,0];
let cell_data = [0,0,0,0,0,0,0,0,0];
let lock = [1,1,1,1,1,1,1,1,1];
let wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//Time variables
let fps = 30 ;
var then = Date.now();
let game_state = 0;

//Game loop
function game_loop() {
    now = Date.now();
    var diffrence = now - then;
    if (diffrence >= 1000 / fps) {
        switch (game_state) {
            case 0:
                get_ready();
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
}//Ending game loop
game_loop();//Callling game loop


//Game on funtion
function game_on(){
    //Erasing the start menu
    document.getElementById('start').style.display='None';
    document.getElementById('game_over').style.display='None';
    document.getElementById('board').style.filter='blur(0px)';
    //Checking cell 1
    if(cell_sign[0] != 0 && lock[0]){
        if(cell_sign[0] == 1){
            cell_data[0] = 1 
            document.getElementById('cell1').innerHTML='X';
            document.getElementById('cell1').style.color='red';
            x_sound.play();
        }
        else{
            cell_data[0] = -1
            document.getElementById('cell1').innerHTML='O';
            document.getElementById('cell1').style.color='darkgreen';
            o_sound.play();
        }
        lock[0] = 0;
        turn *= -1;
        empty -= 1;
    }
    //Checking cell 2
    if(cell_sign[1] != 0 && lock[1]){
        if(cell_sign[1] == 1){
            cell_data[1] = 1 
            document.getElementById('cell2').innerHTML='X';
            document.getElementById('cell2').style.color='red';
            x_sound.play();
        }
        else{
            cell_data[1] = -1
            document.getElementById('cell2').innerHTML='O';
            document.getElementById('cell2').style.color='darkgreen';
            o_sound.play();
        }
        lock[1] = 0;
        turn *= -1;
        empty -= 1;
    }
    //Checking cell 3
    if(cell_sign[2] != 0 && lock[2]){
        if(cell_sign[2] == 1){
            cell_data[2] = 1 
            document.getElementById('cell3').innerHTML='X';
            document.getElementById('cell3').style.color='red';
            x_sound.play();
        }
        else{
            cell_data[2] = -1
            document.getElementById('cell3').innerHTML='O';
            document.getElementById('cell3').style.color='darkgreen';
            o_sound.play();
        }
        lock[2] = 0;
        turn *= -1;
        empty -= 1;
    }
    //Checking cell 4
    if(cell_sign[3] != 0 && lock[3]){
        if(cell_sign[3] == 1){
            cell_data[3] = 1 
            document.getElementById('cell4').innerHTML='X';
            document.getElementById('cell4').style.color='red';
            x_sound.play();
        }
        else{
            cell_data[3] = -1
            document.getElementById('cell4').innerHTML='O';
            document.getElementById('cell4').style.color='darkgreen';
            o_sound.play();
        }
        lock[3] = 0;
        turn *= -1;
        empty -= 1;
    } 
    //Checking cell 5
    if(cell_sign[4] != 0 && lock[4]){
        if(cell_sign[4] == 1){
            cell_data[4] = 1 
            document.getElementById('cell5').innerHTML='X';
            document.getElementById('cell5').style.color='red';
            x_sound.play();
        }
        else{
            cell_data[4] = -1
            document.getElementById('cell5').innerHTML='O';
            document.getElementById('cell5').style.color='darkgreen';
            o_sound.play();
        }
        lock[4] = 0;
        turn *= -1;
        empty -= 1;
    }
    //Checking cell 6
    if(cell_sign[5] != 0 && lock[5]){
        if(cell_sign[5] == 1){
            cell_data[5] = 1 
            document.getElementById('cell6').innerHTML='X';
            document.getElementById('cell6').style.color='red';
            x_sound.play();
        }
        else{
            cell_data[5] = -1
            document.getElementById('cell6').innerHTML='O';
            document.getElementById('cell6').style.color='darkgreen';
            o_sound.play();
        }
        lock[5] = 0;
        turn *= -1;
        empty -= 1;
    }
    //Checking cell 7
    if(cell_sign[6] != 0 && lock[6]){
        if(cell_sign[6] == 1){
            cell_data[6] = 1 
            document.getElementById('cell7').innerHTML='X';
            document.getElementById('cell7').style.color='red';
            x_sound.play();
        }
        else{
            cell_data[6] = -1
            document.getElementById('cell7').innerHTML='O';
            document.getElementById('cell7').style.color='darkgreen';
            o_sound.play();
        }
        lock[6] = 0;
        turn *= -1;
        empty -= 1;
    }
    //Checking cell 8
    if(cell_sign[7] != 0 && lock[7]){
        if(cell_sign[7] == 1){
            cell_data[7] = 1 
            document.getElementById('cell8').innerHTML='X';
            document.getElementById('cell8').style.color='red';
            x_sound.play();
        }
        else{
            cell_data[7] = -1
            document.getElementById('cell8').innerHTML='O';
            document.getElementById('cell8').style.color='darkgreen';
            o_sound.play();
        }
        lock[7] = 0;
        turn *= -1;
        empty -= 1;
    }
    //Checking cell 9
    if(cell_sign[8] != 0 && lock[8]){
        if(cell_sign[8] == 1){
            cell_data[8] = 1 
            document.getElementById('cell9').innerHTML='X';
            document.getElementById('cell9').style.color='red';
            x_sound.play();
        }
        else{
            cell_data[8] = -1
            document.getElementById('cell9').innerHTML='O';
            document.getElementById('cell9').style.color='darkgreen';
            o_sound.play();
        }
        lock[8] = 0;
        turn *= -1;
        empty -= 1;
    }

    //Checking for winner
    check();
    //Checking for Draw
    if(empty == 0){
        game_state = 2;
    }
    
}//Ending game_on function



//Accepting input functions
function cell1(){
    cell_sign[0] = turn
}
function cell2(){
    cell_sign[1] = turn
}
function cell3(){
    cell_sign[2] = turn
}
function cell4(){
    cell_sign[3] = turn
}
function cell5(){
    cell_sign[4] = turn
}
function cell6(){
    cell_sign[5] = turn
}
function cell7(){
    cell_sign[6] = turn
}
function cell8(){
    cell_sign[7] = turn
}
function cell9(){
    cell_sign[8] = turn
}//Ending all input accepting functions



//Checking for winner
function check(){

    for(i = 0 ; i<8 ; i+=1){
        x = wins[i][0]
        y = wins[i][1]
        z = wins[i][2]
        if(cell_data[x] === cell_data[y] && cell_data[y] === cell_data[z]){
            if(cell_data[x] === 1){
                winner = 1;
                game_state = 2;
                
            }
            else if(cell_data[x] == -1){
                winner = 2;
                game_state = 2;
                
            }
        }
    }
}//Ending checking for winner function



//Game over function
function game_over(){
    //Displaying the start menu
    document.getElementById('game_over').style.display='flex';
    document.getElementById('board').style.filter='blur(3px)';

    //Displaying result of match
    if(winner === 0)
        document.getElementById('over').innerHTML='Draw!';
    else if(winner === 1)
        document.getElementById('over').innerHTML='Player x wins!';
    else
        document.getElementById('over').innerHTML='Player o wins!';
    
}//Ending game over function



//Function to play sound and change game state
function start(){
    x_sound.play();
    game_state = 1;
}
function play_again(){
    x_sound.play();
    game_state = 0;
}//Ending play sounds function



//Get ready function
function get_ready(){
    //Initializing game variables to default
    turn = 1, winner = 0 ,empty = 9;

    //Board lists
    cell_sign = [0,0,0,0,0,0,0,0,0];
    cell_data = [0,0,0,0,0,0,0,0,0];
    lock = [1,1,1,1,1,1,1,1,1];

    //Displaying the start menu
    document.getElementById('start').style.display='flex';
    document.getElementById('board').style.filter='blur(3px)';
    document.getElementById('game_over').style.display='None';

    //Erasing the game board
    document.getElementById('cell1').innerHTML='__';
    document.getElementById('cell2').innerHTML='__';
    document.getElementById('cell3').innerHTML='__';
    document.getElementById('cell4').innerHTML='__';
    document.getElementById('cell5').innerHTML='__';
    document.getElementById('cell6').innerHTML='__';
    document.getElementById('cell7').innerHTML='__';
    document.getElementById('cell8').innerHTML='__';
    document.getElementById('cell9').innerHTML='__';
    //Setting color to default
    document.getElementById('cell1').style.color='rgb(40, 5, 71)';
    document.getElementById('cell2').style.color='rgb(40, 5, 71)';
    document.getElementById('cell3').style.color='rgb(40, 5, 71)';
    document.getElementById('cell4').style.color='rgb(40, 5, 71)';
    document.getElementById('cell5').style.color='rgb(40, 5, 71)';
    document.getElementById('cell6').style.color='rgb(40, 5, 71)';
    document.getElementById('cell7').style.color='rgb(40, 5, 71)';
    document.getElementById('cell8').style.color='rgb(40, 5, 71)';
    document.getElementById('cell9').style.color='rgb(40, 5, 71)';
}//Ending get ready function