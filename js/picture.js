
var myimage = document.getElementById("img3");   
if (myimage.addEventListener) {   
    // IE9, Chrome, Safari, Opera   
    myimage.addEventListener("mousewheel", MouseWheelHandler, false);  
    // Firefox   
    myimage.addEventListener("DOMMouseScroll", MouseWheelHandler, false); 
  
}   
// IE 6/7/8   
else myimage.attachEvent("onmousewheel", MouseWheelHandler);  


function MouseWheelHandler(e) {   
    e.preventDefault();
    var e = window.event || e;
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))); 
if(document.body.clientWidth > 1200) {
    myimage.style.width = Math.max(300, Math.min(570, myimage.width + (30 * delta))) + "px";  
}else if(document.body.clientWidth > 800){
    myimage.style.width = Math.max(250, Math.min(400, myimage.width + (30 * delta))) + "px";  
}else if(document.body.clientWidth > 600){
    myimage.style.width = Math.max(250, Math.min(420, myimage.width + (30 * delta))) + "px";
}else if(document.body.clientWidth > 450){
    myimage.style.width = Math.max(200, Math.min(450, myimage.width + (30 * delta))) + "px";
}else {
    myimage.style.width = Math.max(200, Math.min(350, myimage.width + (30 * delta))) + "px";
}
}

