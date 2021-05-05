let selection = ["Rock", "Paper", "Scissors"]
function computerPlay(selection){
    let computerSelection = Math.floor(Math.random() * selection.length);
    return computerSelection;
}
console.log(computerPlay, selection[random]);