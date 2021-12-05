
let userName = window.prompt("Enter user name");
while (userName == ""){
    userName = window.prompt("Enter user name");
}
document.querySelector(".user").textContent = userName;

let btn = document.querySelector("button");
if(userName != null){
    btn.disabled = false;
}

let player = document.querySelector("#numbers1");
let computer = document.querySelector("#numbers2");
let playerPoints = document.querySelector(".result1");
let computerPoints = document.querySelector(".result2");
let result = document.querySelector("#resultMessage");
let num1;
let num2;
let winP = 0;
let winC = 0;
let userPoints = 0;
let enemyPoints = 0;
playerPoints.textContent = "0";
computerPoints.textContent = "0";
////////////////////////////
var myPix = ["img/six.png", "img/seven.png", "img/eight.png", "img/nine.png", "img/ten.png", "img/valet.png", "img/dama.png", "img/king.png", "img/tuz.png"];

let play = () => { 
    
if(winP < 3 && winC < 3){
    
    num1 = Math.floor(Math.random() * myPix.length);
    num2 = Math.floor(Math.random() * myPix.length);
    
    setTimeout(() => {
        player.src = myPix[num1];
        computer.src = myPix[num2];
    }, 400);
    switch(num1){
        case 0:
            userPoints+=6;
            break;
        case 1:
            userPoints+=7;
            break;
        case 2:
            userPoints+=8;
            break;
        case 3:
            userPoints+=9;
            break;
        case 4:
            userPoints+=10;
            break;
        case 5:
            userPoints+=2;
            break;
        case 6:
            userPoints+=3;
            break;
        case 7:
            userPoints+=4;
            break;
        case 8:
            userPoints+=11;
            break;
    }
    switch(num2){
        case 0:
            enemyPoints+=6;
            break;
        case 1:
            enemyPoints+=7;
            break; 
        case 2:
            enemyPoints+=8;
            break;
        case 3:
            enemyPoints+=9;
            break;
        case 4:
            enemyPoints+=10;
            break;
        case 5:
            enemyPoints+=2;
            break;
        case 6:
            enemyPoints+=3;
            break;
        case 7:
            enemyPoints+=4;
            break;
        case 8:
            enemyPoints+=11;
            break;
    }
        if(userPoints > enemyPoints){
            winP++;
            computerPoints.classList.remove('showText');
            playerPoints.classList.remove('showText');
            setTimeout(() => {
                playerPoints.textContent = userPoints;
                computerPoints.textContent = enemyPoints;
                playerPoints.classList.add('showText');
            }, 800);
            
        }
        else if (userPoints < enemyPoints){
            winC++;
            playerPoints.classList.remove('showText');
            computerPoints.classList.remove('showText');
            setTimeout(() => {
                playerPoints.textContent = userPoints;
                computerPoints.textContent = enemyPoints;
                computerPoints.classList.add('showText');
            }, 800);
        }
        
        if (winP == 3){
            setTimeout(() => {
                result.textContent = "You won!";
                btn.textContent = "Again";
            }, 800);
        }
        else if (winC == 3){
            setTimeout(() => {
                result.textContent = "You lost...";
                btn.textContent = "Again";
            }, 800);
        }
    }
    else{
        winC = 0;
        winP = 0;
        num1 = 0;
        num2 = 0;
        userPoints = 0;
        enemyPoints = 0;
        playerPoints.textContent = "0";
        computerPoints.textContent = "0";
        playerPoints.classList.remove('showText');
        computerPoints.classList.remove('showText');
        result.textContent = "";
        btn.textContent = "Play";
        play();
        }
        
    }
btn.addEventListener('click', play);
