function positionMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    if(!document.getElementById("message2")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    moveElement("message", 600, 450, 1);
    var elem = document.getElementById("message2");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "50px";
    moveElement("message2", 400, 350, 5);
}