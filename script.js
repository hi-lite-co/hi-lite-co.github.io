/*$( document ).ready(function() {
  
});*/

document.addEventListener("DOMContentLoaded", function(event) {
  var colorPick = Math.floor((Math.random() * 6) + 1);
      var body=document.getElementsByTagName('body')[0];
      var ss = document.styleSheets[0];

      console.log(colorPick);
      highlightHex = '';

      var yellow = '#F7F647';
      var green = '#7CFB6D';
      var blue = '#72D3FD';
      var pink = '#FF8EC9';
      var purple = '#B25AFF';
      var orange = '#FEB751';

    switch(colorPick){
      case 1:
        highlightHex = yellow;
        highlightColor = "yellow";
        break;
      case 2:
        highlightHex = green;
        highlightColor = "green";
        break;
      case 3:
        highlightHex = blue;
        highlightColor = "blue";
        break;
      case 4:
        highlightHex = pink;
        highlightColor = "pink";
        break;
      case 5:
        highlightHex = purple;
        highlightColor = "purple";
        break;
      case 6:
        highlightHex = orange;
        highlightColor = "orange";
         break;
      default:
        highlightHex = blue;
        highlightColor = "blue";
    }
    document.getElementById("logoPic").style.backgroundImage="url('./images/logos/"+highlightColor+"@2x.png')";
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      ss.insertRule('body { letter-spacing: -1px;}', 0);
      ss.insertRule('.coloredText { background: '+highlightHex+' !important; }', 0);
      ss.insertRule('#flexContainer { height: 100%; }', 0);
      ss.insertRule('#dragDown { visibility: hidden; }', 0);
      ss.insertRule('a { cursor: url(./images/cursors/'+highlightColor+'_icon.png) 0 68, auto;}', 0);
      

   
    
  }else{
    document.getElementById('logoPic').ondragstart = function() { return false; };
    document.body.style.cursor = 'url(./images/cursors/'+highlightColor+'_icon.png) 0 68, auto';
    ss.insertRule('.coloredText::selection { background: '+highlightHex+'; }', 0);
    ss.insertRule('a { cursor: url(./images/cursors/'+highlightColor+'_icon.png) 0 68, auto; }', 0);
    
}
});