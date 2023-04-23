
let gameaudio= new Audio("Bhoomi.mp3");
let turnaudio= new Audio("Click.mp3");


let turn = "X";
let win=false;

const changeTurn = ()=>{
    return turn==="X"?"O" : "X"
}
let a=0;
const checkWin=()=>{
    let itext = document.getElementsByClassName("text");
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-8,15,90],
        [1,4,7,3,15,90],
        [2,5,8,13,15,90],
        [0,4,8,4,16,45],
        [2,4,6,4,14,135],
    ]
    wins.forEach(e=>{
        
        if(itext[e[0]].innerText===itext[e[1]].innerText && itext[e[1]].innerText===itext[e[2]].innerText &&itext[e[0]].innerText!==''){
            document.querySelector(".content").innerText = itext[e[0]].innerText+" Won";
            win=true;
            document.querySelector(".line").style.width = "25vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
       else{
        a++;
       }
    })
    if(a==72){
    document.querySelector(".content").innerText = " Game Draw";
    win=true;
}
}

let box=document.getElementsByClassName("second");
let a1=Array.from(box);
a1.forEach(ele=>{
    let boxtext = ele.querySelector(".text");
    ele.addEventListener('click', ()=>{
        gameaudio.play();
        if(boxtext.innerText === '' && !win){
            turnaudio.play();
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();
           if(!win){
            document.getElementsByClassName("content")[0].innerText="Turn for " + turn;
           }
        }
    })
})

let reset = document.getElementById("reset");
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll(".text");
    Array.from(boxtext).forEach(ele=>{
        ele.innerText="";
    })
    turn ="X";
    a=0;
    win=false;
    gameaudio.play();
    document.getElementsByClassName("content")[0].innerText="Turn for " + turn;
    document.querySelector(".line").style.width = "0px"
})



