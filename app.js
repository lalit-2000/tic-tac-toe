let boxes = document.querySelectorAll(".box");
let msgcontainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let newgamebtn = document.querySelector("#newgame");
let resetbtn = document.querySelector("#resetgame");
let trunO = true;
let count = 0;

const winPattern =[
    [0,3,6],
    [0,1,2],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [6,4,2]
];
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(trunO){
            trunO = false;
            box.innerText = "O";
            box.style.color = "#c1121f"

        }else{
            trunO = true;
            box.innerText = "X";
            box.style.color = "#fdf0d5"
        }
        box.disabled = true;
        count++;
        let isWinner = foundWinner();
        if(count === 9 && !isWinner){
            draw();
        }

    })
});
const foundWinner = () =>{
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWInner(pos1);
            }
        }
    }
};
const showWInner = (pos1) =>{
   msgcontainer.classList.remove("hide");
   msg.innerText = `Congrats ${pos1} won the Game :)`;
   msg.style.backgroundColor = "green"
   disablebox();
};

 const disablebox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enablebox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {
    msgcontainer.classList.add("hide");
    enablebox();
    trunO = true;
    count = 0;

};
const draw = () => {
    msgcontainer.classList.remove("hide");
    msg.innerText = "Game was draw please start new game:|";
    msg.style.backgroundColor = "#003049";
}

resetbtn.addEventListener("click",resetGame);
newgamebtn.addEventListener("click",resetGame);
 
