function moveMessage(){
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    //elem.style.left = "200px";
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if(xpos == 200 && ypos == 300) return true;
    if(xpos < 200){
        xpos++;
    }
    if(xpos > 200){
        xpos--;
    }
    if(ypos < 300){
        ypos++;
    }
    if(ypos > 300){
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    //movement是一个全局变量，在positionMessage文件里声明时没有用var，意味着可以在这个函数之外被使用
    movement = setTimeout("moveMessage()", 10);
}