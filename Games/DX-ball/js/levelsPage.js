//to always set level in the local storage
if (localStorage.getItem("level") === null)
    window.localStorage.setItem("level", 1);
//set all the buttons with these styles
document.getElementById('btn' + parseInt(localStorage.getItem("level"))).style.borderColor = "rgb(199, 21, 36)";
document.getElementById('btn' + parseInt(localStorage.getItem("level"))).style.backgroundColor = "rgb(199, 21, 36)";
document.getElementById('btn' + parseInt(localStorage.getItem("level"))).style.transform = "scale(1.1)";

//while excuting this function it will set the selected level in the local storage
// and change the styles of the holded button 
function levelChoose(levelNum) {
    window.localStorage.setItem("level", levelNum);
    game.gameState = GAME_STATE.MENU;
    game.start(1);
    var allButns = document.getElementById("allButtons").querySelectorAll("button");
    for (var i = 0; i < allButns.length;++i) {
        allButns[i].style.borderColor = 'rgb(189, 58, 171)';
        allButns[i].style.backgroundColor = '#41e189';
        allButns[i].style.transform = "scale(1,1)";
        //allButns[i].style.transform = "translate(10px)";
        //allButns[i].style.transform = "translate(-10px)";
        
    }

    var btn = document.getElementById('btn' + levelNum);
    btn.style.borderColor = "rgb(199, 21, 36)";
    btn.style.backgroundColor = "rgb(199, 21, 36)";
    btn.style.transform = "scale(1.1)";

}