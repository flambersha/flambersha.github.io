let userName = window.prompt("Enter user name");
while (userName == ""){
    userName = window.prompt("Enter user name");
}
document.querySelector(".user").textContent = userName;

let btn = document.querySelector("button");
if(userName != null){
    btn.disabled = false;
}

let player = document.querySelector(".numbers1");
let computer = document.querySelector(".numbers2");
let playerPoints = document.querySelector(".result1");
let computerPoints = document.querySelector(".result2");
let result = document.querySelector("#resultMessage");
let num1;
let num2;
let winP = 0;
let winC = 0;
playerPoints.textContent = "0";
computerPoints.textContent = "0";
////////////////////////////

let play = () => {
    
if(winP < 3 && winC < 3){
    
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);
        setTimeout(() => {
            player.textContent = num1;
            computer.textContent = num2;
        }, 500);

        if(num1 > num2){
            winP++;
            computerPoints.classList.remove('showText');
            playerPoints.classList.remove('showText');
            setTimeout(() => {
                playerPoints.textContent = winP;
                playerPoints.classList.add('showText');
            }, 500);
            
        }
        else if (num1 < num2){
            winC++;
            playerPoints.classList.remove('showText');
            computerPoints.classList.remove('showText');
            setTimeout(() => {
                computerPoints.textContent = winC;
                computerPoints.classList.add('showText');
            }, 500);
        }
        
        if (winP == 3){
            setTimeout(() => {
                result.textContent = "You won!";
                btn.textContent = "Again";
            }, 500);
        }
        else if (winC == 3){
            setTimeout(() => {
                result.textContent = "You lost...";
                btn.textContent = "Again";
            }, 500);
        }
    }
    else {
        winC = 0;
        winP = 0;
        num1 = 0;
        num2 = 0;
        player.textContent = "";
        computer.textContent = "";
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
