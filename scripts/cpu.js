//Loading audio
const x_sound = new Audio("audio/TicTacToe/x.mp3");
const o_sound = new Audio("audio/TicTacToe/o.mp3");

//Variables
let mark = ['X','O'];
let turn = 1, winner = 0 ,empty = 9 ,place = -1;

//Board lists
let empty_cell = [1,2,3,4,5,6,7,8,9];
let cell_data = [0,0,0,0,0,0,0,0,0];
let lock = [1,1,1,1,1,1,1,1,1];
let wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//Time variables
let fps = 30 ;
var then = Date.now();
let game_state = 1;

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



function game_on(){
    document.getElementById('game_over').style.display='None';
    document.getElementById('board').style.filter='blur(0px)';

    if(turn){
        idx = ran(0,empty-1);
        tmp = empty_cell[idx];
        cell_data[tmp-1] = 1;
        empty_cell.splice(idx,1);
        if(tmp == 1){
            document.getElementById('cell1').style.color="red";
            document.getElementById('cell1').innerHTML='X';
        }
        if(tmp == 2){
            document.getElementById('cell2').style.color="red";
            document.getElementById('cell2').innerHTML='X';
        }
        if(tmp == 3){
            document.getElementById('cell3').style.color="red";
            document.getElementById('cell3').innerHTML='X';
        }
        if(tmp == 4){
            document.getElementById('cell4').style.color="red";
            document.getElementById('cell4').innerHTML='X';
        }
        if(tmp == 5){
            document.getElementById('cell5').style.color="red";
            document.getElementById('cell5').innerHTML='X';
        }
        if(tmp == 6){
            document.getElementById('cell6').style.color="red";
            document.getElementById('cell6').innerHTML='X';
        }
        if(tmp == 7){
            document.getElementById('cell7').style.color="red";
            document.getElementById('cell7').innerHTML='X';
        }
        if(tmp == 8){
            document.getElementById('cell8').style.color="red";
            document.getElementById('cell8').innerHTML='X';
        }
        if(tmp == 9){
            document.getElementById('cell9').style.color="red";
            document.getElementById('cell9').innerHTML='X';
        }
        // x_sound.play();
        turn = 0;
        place = -1;
        empty -= 1;
        
    }
    else{
        if(place == 1 && empty_cell.includes(place)){
            document.getElementById('cell1').style.color="darkgreen";
            document.getElementById('cell1').innerHTML='O';
            o_sound.play();
            turn = 1;
            idx = empty_cell.indexOf(place);
            empty_cell.splice(idx,1);
            empty -= 1;
            cell_data[0] = -1;
        }
        if(place == 2 && empty_cell.includes(place)){
            document.getElementById('cell2').style.color="darkgreen";
            document.getElementById('cell2').innerHTML='O';
            o_sound.play();
            turn = 1;
            idx = empty_cell.indexOf(place);
            empty_cell.splice(idx,1);
            empty -= 1;
            cell_data[1] = -1;
        }
        if(place == 3 && empty_cell.includes(place)){
            document.getElementById('cell3').style.color="darkgreen";
            document.getElementById('cell3').innerHTML='O';
            o_sound.play();
            turn = 1;
            idx = empty_cell.indexOf(place);
            empty_cell.splice(idx,1);
            empty -= 1;
            cell_data[2] = -1;
        }
        if(place == 4 && empty_cell.includes(place)){
            document.getElementById('cell4').style.color="darkgreen";
            document.getElementById('cell4').innerHTML='O';
            o_sound.play();
            turn = 1;
            idx = empty_cell.indexOf(place);
            empty_cell.splice(idx,1);
            empty -= 1;
            cell_data[3] = -1;
        }
        if(place == 5 && empty_cell.includes(place)){
            document.getElementById('cell5').style.color="darkgreen";
            document.getElementById('cell5').innerHTML='O';
            o_sound.play();
            turn = 1;
            idx = empty_cell.indexOf(place);
            empty_cell.splice(idx,1);
            empty -= 1;
            cell_data[4] = -1;
        }
        if(place == 6 && empty_cell.includes(place)){
            document.getElementById('cell6').style.color="darkgreen";
            document.getElementById('cell6').innerHTML='O';
            o_sound.play();
            turn = 1;
            idx = empty_cell.indexOf(place);
            empty_cell.splice(idx,1);
            empty -= 1;
            cell_data[5] = -1;
        }
        if(place == 7 && empty_cell.includes(place)){
            document.getElementById('cell7').style.color="darkgreen";
            document.getElementById('cell7').innerHTML='O';
            o_sound.play();
            turn = 1;
            idx = empty_cell.indexOf(place);
            empty_cell.splice(idx,1);
            empty -= 1;
            cell_data[6] = -1;
        }
        if(place == 8 && empty_cell.includes(place)){
            document.getElementById('cell8').style.color="darkgreen";
            document.getElementById('cell8').innerHTML='O';
            o_sound.play();
            turn = 1;
            idx = empty_cell.indexOf(place);
            empty_cell.splice(idx,1);
            empty -= 1;
            cell_data[7] = -1;
        }
        if(place == 9 && empty_cell.includes(place)){
            document.getElementById('cell9').style.color="darkgreen";
            document.getElementById('cell9').innerHTML='O';
            o_sound.play();
            turn = 1;
            idx = empty_cell.indexOf(place);
            empty_cell.splice(idx,1);
            empty -= 1;
            cell_data[8] = -1;
        }
    }
    //Checking for winner
    check();
    //Checking for Draw
    if(empty == 0){
        game_state = 2;
    }

    
}//Ending game_on funtion


//Accepting input functions
function cell1(){
    place = 1
}
function cell2(){
    place = 2
}
function cell3(){
    place = 3
}
function cell4(){
    place = 4
}
function cell5(){
    place = 5
}
function cell6(){
    place = 6
}
function cell7(){
    place = 7
}
function cell8(){
    place = 8
}
function cell9(){
    place = 9
}//Ending all input accepting functions


//Randon number function
function ran(a,b){
    var c = Math.round(a + (b-a)* Math.random());
    return c;
}//Ending random number function


//Checking for winner
function check(){
    for(i = 0 ; i<8 ; i+=1){
        x = wins[i][0]
        y = wins[i][1]
        z = wins[i][2]
        if(cell_data[x] === cell_data[y] && cell_data[y] === cell_data[z]){
            if(cell_data[x] == 1){
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
        document.getElementById('over').innerHTML='CPU won game!';
    else
        document.getElementById('over').innerHTML='You won game!';
    
}//Ending game over function