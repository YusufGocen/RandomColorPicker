
const input1=document.querySelector("#input1");
const input2=document.querySelector("#input2");
const random=document.querySelector(".random")
const body=document.querySelector("body")
const message=document.querySelector(".message")
const hexCodes=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f",]

input1.addEventListener("input" , () => {
    let firstColor=input1.value;
    body.style.background=`linear-gradient(90deg,${firstColor},${input2.value})`
    ColorMessage();
})
input2.addEventListener("input", () => {
    let secondColor=input2.value;
    body.style.background=`linear-gradient(90deg,${input1.value},${secondColor})`
    ColorMessage();
})

function ColorMessage()  {
    message.innerText=`background:linear-gradient(90deg,${input1.value},${input2.value})`
}

function GetRandomColor(){
    let randomColor="#";

    while(randomColor.length <7){
        randomColor=randomColor+hexCodes[Math.floor(Math.random()*hexCodes.length)]
    }
    return randomColor;
}

random.addEventListener("click",() => {
    let firstRandom=GetRandomColor();
    let secondRandom=GetRandomColor();
    body.style.background=`linear-gradient(90deg,${firstRandom},${secondRandom})`
    input1.value=firstRandom;
    input2.value=secondRandom;
    ColorMessage();
})

