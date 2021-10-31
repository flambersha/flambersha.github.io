
let block = document.createElement('div');
let title = document.createElement('h1');
let txt = document.createElement('span');
let input = document.createElement('input');
input.setAttribute('type','text');
let btn = document.createElement('button');

document.body.appendChild(block);
block.appendChild(title);
title.textContent = "Ask a question!";
block.appendChild(txt);
txt.textContent = "Ask a question, say it loud or write it here and click on the ball";
block.appendChild(input);
block.appendChild(btn);
btn.textContent = "Get the answer!";

const answers = ["Yes!", "No...", "Totally", "Why not?", "For sure!", "Another time", "Not really", "Maybe", "Never.", "Not today", "Of course!"];

btn.addEventListener('click', () => {
    btn.classList.add('click');
    btn.textContent = "";
    let getAnswer = answers[Math.floor(Math.random() * answers.length)];
    
    setTimeout(() => {
        btn.classList.add('showText');
        btn.textContent = getAnswer;
    }, 500);
    
    btn.addEventListener('animationend', () => {
        btn.classList.remove('click');
        btn.classList.remove('showText');
    });
});
