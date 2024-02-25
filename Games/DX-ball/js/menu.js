var playButton = document.getElementById("play_button");
var levelSelection = document.getElementById("levelselection_button");
var options = document.getElementById("options_button");
var about = document.getElementById("about_button");

//function to change the scene
function sceneChange(newId){
  var gameScene = document.getElementById("gameScene");
  //gameScene.style.display="none";
  var menu = document.getElementById("menu");
  menu.style.display="none";
  var levels = document.getElementById("levels");
  levels.style.display="none";
  var settings = document.getElementById("settings");
  settings.style.display="none";

  var clicked = document.getElementById(newId);
  clicked.style.display="block";
}

//on click on play button it will start new game
playButton.onclick = function(){
    
}

//on click on levelSelection button it will open level selection scene
levelSelection.onclick = function(){
    sceneChange('levels');
}