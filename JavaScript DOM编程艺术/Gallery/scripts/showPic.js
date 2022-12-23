//window.onload = showPic();
//window.onload = prepareGallery;
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);

function showPic(whichpic){
    if(!document.getElementById("placeholder")){
        return false;
    };
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
    if(document.getElementById("describe")){
        //检查是否存在title属性
        if(whichpic.getAttribute("title")){
            var text = whichpic.getAttribute("title");
        }else{
            var text = "";
        };
        var describe = document.getElementById("describe");
        if(describe.firstChild.nodeType == 3){
            describe.firstChild.nodeValue = text;
        };
    };
    return true;
};

/**
 * 2022年5月17日
 * author:范子申
 * 描述：这个函数实现了将事件与html文档分离，
 * 使行为层作用于结构层之上
 */
function prepareGallery(){
    /**
     * 做一些object检测，来检测这个浏览器能支持否
     */
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("imagegallery")) return false;
    var imgGallery = document.getElementById("imagegallery");
    var links = document.getElementsByTagName("a");
    for(var i=0; i<links.length; i++){
        links[i].onclick = function(){
            //showPic(this);
            /**
             * 这里是假设了showPic函数肯定会
             * 正常返回，所以用return false
             * 取消了onclick的默认点击事件
             */
            //return false;
            return showPic(this) ? false : true;
        };
    };
};

function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        };
    };
};

function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.png");
    placeholder.setAttribute("alt", "my image gallery");
    var describe = document.createElement("p");
    describe.setAttribute("id", "describe");
    var text = document.createTextNode("图片的描述");
    describe.appendChild(text);
    //（！！！重要）这里是为了实现，无论图片清单在文档中的什么位置，都可以让新创建的元素紧跟在它的后面
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(describe, placeholder);
};


/**
 * 
 * @param {*} newElement 
 * @param {*} targetElement 
 * 这个函数判断目标元素是不是parent元素的最后一个元素，
 * 如果是，直接将新元素append到目标元素后面，如果不是
 * 则用DOM提供的insertBefore()方法，将新元素添加到
 * 目标元素的下一个兄弟元素之前
 */
function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement, targetElement.nextSibling);
    };
};