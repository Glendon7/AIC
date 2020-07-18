
document.addEventListener("DOMContentLoaded", function(event) {
     



//Make the DIV element draggagle:
dragElement(document.getElementById("img1"));
dragElement(document.getElementById("img2"));
dragElement(document.getElementById("img3"));
dragElement(document.getElementById("img4"));
dragElement(document.getElementById("img5"));
dragElement(document.getElementById("img6"));
dragElement(document.getElementById("img7"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
    elmnt.ontouchmove=dragMouseDown;
   var a =String.fromCharCode(0x77,0x61,0x74,0x65,0x72);
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.ontouchend=closeDragElement;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    document.ontouchmove=mobdrag;
    elmnt.style.zIndex="19";
    elmnt.style.transform="rotate(0deg)";
    
  }

  function mobdrag(e){
    var touchLoc=e.targetTouches[0];

        elmnt.style.left=touchLoc.pageX-50+"px";
        elmnt.style.top=touchLoc.pageY-250+"px";
        event.preventDefault();
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.style.zIndex="9";
    document.ontouchend=null;
    document.ontouchmove=null;

  }
}
/*
var elmnt=document.getElementById("img1");

    

    elmnt.addEventListener('touchmove',function(e){
        var touchLoc=e.targetTouches[0];

        elmnt.style.left=touchLoc.pageX+"px";
        elmnt.style.top=touchLoc.pageY+"px";


   })*/
   var modal = document.getElementById("myModal");
   
var img = document.getElementById("cl");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display="block";
  modalImg.src=this.src;

}

var span=document.getElementsByClassName("close")[0];

span.onclick=function(){
  modal.style.display="none";
}
});
function chk(){
  
 ch=document.getElementById("check");
  //sol=document.q.q1.value.toLowerCase();
 sol = document.getElementById("check").value.toLowerCase();

if(a==sol)
{ch.style.background='#0be881';


//document.q.q1.style.background = '#0be881';
//document.q.q1.readOnly=true;
}
}
