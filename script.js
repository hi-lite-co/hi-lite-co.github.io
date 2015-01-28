/*$( document ).ready(function() {
  
});*/

document.addEventListener("DOMContentLoaded", function(event) {
  var colorPick = Math.floor((Math.random() * 6) + 1);
      var body=document.getElementsByTagName('body')[0];
      var ss = document.styleSheets[0];
      console.log(colorPick);
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      if(colorPick==1){
    console.log("hey!");
    
    document.body.style.cursor = "url(./images/cursors/yellow_icon.png) 0 68, auto";
    ss.insertRule('.coloredText { background: #E4FF00; }', 0);
    ss.insertRule('a { cursor: url(./images/cursors/yellow_icon.png) 0 68, auto; }', 0);
    document.getElementById("logoPic").src = "./images/logos/yellow@2x.png";

  }
  if(colorPick==2){
    document.body.style.cursor = "url(./images/cursors/green_icon.png) 0 68, auto";
    ss.insertRule('.coloredText { background: #7CFB6D; }', 0);
    ss.insertRule('a { cursor: url(./images/cursors/green_icon.png) 0 68, auto; }', 0);
    document.getElementById("logoPic").src = "./images/logos/green@2x.png";
  }
  if(colorPick==3){
    document.body.style.cursor = "url(./images/cursors/blue_icon.png) 0 68, auto";
    ss.insertRule('.coloredText { background: #4CC5F9; }', 0);
    ss.insertRule('a { cursor: url(./images/cursors/blue_icon.png) 0 68, auto; }', 0);
    document.getElementById("logoPic").src = "./images/logos/blue@2x.png";
  }
  if(colorPick==4){
    document.body.style.cursor = "url(./images/cursors/pink_icon.png) 0 68, auto";
    ss.insertRule('.coloredText { background: #FA609B; }', 0);
    ss.insertRule('a { cursor: url(./images/cursors/pink_icon.png) 0 68, auto; }', 0);
    document.getElementById("logoPic").src = "./images/logos/pink@2x.png";
  }
  if(colorPick==5){
    document.body.style.cursor = "url(./images/cursors/purple_icon.png) 0 68, auto";
    ss.insertRule('.coloredText { background: #A44EF0; }', 0);
    ss.insertRule('a { cursor: url(./images/cursors/purple_icon.png) 0 68, auto; }', 0);
    document.getElementById("logoPic").src = "./images/logos/purple@2x.png";
  }
  if(colorPick==6){
    document.body.style.cursor = "url(./images/cursors/orange_icon.png) 0 68, auto";
    ss.insertRule('.coloredText { background: #FDAB36; }', 0);
    ss.insertRule('a { cursor: url(./images/cursors/orange_icon.png) 0 68, auto; }', 0);
    document.getElementById("logoPic").src = "./images/logos/orange@2x.png";
  }
  }else{
  console.log(colorPick);
  if(colorPick==1){
    console.log("hey!");
    
    document.body.style.cursor = "url(./images/cursors/yellow_icon.png) 0 68, auto";
    ss.insertRule('.coloredText::selection { background: #E4FF00; }', 0);
    ss.insertRule('a { cursor: url(./images/cursors/yellow_icon.png) 0 68, auto; }', 0);
    document.getElementById("logoPic").src = "./images/logos/yellow@2x.png";

  }
  if(colorPick==2){
    document.body.style.cursor = "url(./images/cursors/green_icon.png) 0 68, auto";
    ss.insertRule('.coloredText::selection { background: #7CFB6D; }', 0);
    ss.insertRule('a { cursor: url(./images/cursors/green_icon.png) 0 68, auto; }', 0);
    document.getElementById("logoPic").src = "./images/logos/green@2x.png";
  }
  if(colorPick==3){
    document.body.style.cursor = "url(./images/cursors/blue_icon.png) 0 68, auto";
    ss.insertRule('.coloredText::selection { background: #4CC5F9; }', 0);
    ss.insertRule('a { cursor: url(./images/cursors/blue_icon.png) 0 68, auto; }', 0);
    document.getElementById("logoPic").src = "./images/logos/blue@2x.png";
  }
  if(colorPick==4){
    document.body.style.cursor = "url(./images/cursors/pink_icon.png) 0 68, auto";
    ss.insertRule('.coloredText::selection { background: #FA609B; }', 0);
    ss.insertRule('a { cursor: url(./images/cursors/pink_icon.png) 0 68, auto; }', 0);
    document.getElementById("logoPic").src = "./images/logos/pink@2x.png";
  }
  if(colorPick==5){
    document.body.style.cursor = "url(./images/cursors/purple_icon.png) 0 68, auto";
    ss.insertRule('.coloredText::selection { background: #A44EF0; }', 0);
    ss.insertRule('a { cursor: url(./images/cursors/purple_icon.png) 0 68, auto; }', 0);
    document.getElementById("logoPic").src = "./images/logos/purple@2x.png";
  }
  if(colorPick==6){
    document.body.style.cursor = "url(./images/cursors/orange_icon.png) 0 68, auto";
    ss.insertRule('.coloredText::selection { background: #FDAB36; }', 0);
    ss.insertRule('a { cursor: url(./images/cursors/orange_icon.png) 0 68, auto; }', 0);
    document.getElementById("logoPic").src = "./images/logos/orange@2x.png";
  }
}
});