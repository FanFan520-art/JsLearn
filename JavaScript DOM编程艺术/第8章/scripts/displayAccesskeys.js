function displayAccessKey(){
    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    //取得文档中的所有链接
    var links = document.getElementsByTagName("a");
    //创建一个数组，保存访问键
    var akeys = new Array();
    //遍历链接
    for(var i=0; i<links.length; i++){
        var current_link = links[i];
        //每次都判断符合条件再执行核心代码，让代码看起来比较乱，可以直接判断不符合就推出
        if(!current_link.getAttribute("accesskey")) continue;
        //取得access的值
        var key = current_link.getAttribute("accesskey");
        //取得链接文本
        var text = current_link.lastChild.nodeValue;
        //添加到数组
        akeys[key] = text;
    };

    //创建列表
    var list = document.createElement("ul");
    //遍历访问键
    for(key in akeys){
        var text = akeys[key];
        //创建放到列表项中的字符串
        var str = key + ": " + text;
        //创建列表项
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        //把列表项添加到列表中
        list.appendChild(item);
    };

    var header = document.createElement("h3");
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}
addLoadEvent(displayAccessKey);