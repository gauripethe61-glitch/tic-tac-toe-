let Boxs=document.querySelectorAll(".Box");
let reset=document.querySelector("#Reset-Game");
let newGameButton =document.querySelector("#New-Button");
let msgContainer =document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO = true;
const winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
const resetGame =() => {
    turnO=true;
    enabledBoxes ();
    msgContainer.classList.add("hide");

}
Boxs.forEach((Box) => {
    Box.addEventListener("click",() => {
        
    if(turnO){
        Box.innerText ="O";
        turnO=false;
    } else {
        Box.innerText="X";
        turnO = true;


    }
    Box.disabled=true;

    checkWinner();
    });
});
const disabledBoxes =() =>{
    for (let Box of Boxs) {
        Box.disabled =true ;

    }
};
const enabledBoxes =() =>{
    for (let Box of Boxs) {
        Box.disabled =false;
        Box.innerText="";

    }
};
 const showWinner=(winner) => {
    msg.innerText=`congratulaions,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes ();

 };
const checkWinner = () => {
    for(let pattern of winPatterns){
        let posVal1=Boxs[pattern[0]].innerText;
        let posVal2=Boxs[pattern[1]].innerText;
        let posVal3=Boxs[pattern[2]].innerText;
        if(posVal1 != "" && posVal2 !="" && posVal3 !=""){
            if(posVal1===posVal2 &&posVal2===posVal3){
                console.log("Winner",posVal1);11
                showWinner(posVal1);
               
                
            }
        }

    }
};
newGameButton.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

 