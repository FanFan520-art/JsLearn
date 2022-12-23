addLoadEvent(displayAbbreviations);

function displayAbbreviations(){
    /**
     * 兼容性问题
     */
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;

    //获取文档里的缩略词
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length < 1) return false;

    /**
     * 自己做个实验，不保存到数组，直接创建元素看行不行
     * 代码如下：
     * 
    var dlist = document.createElement("dl");
    for(var i=0;i<abbreviations.length;i++){
        var current_abbr = abbreviations[i];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(current_abbr.lastChild.nodeValue);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_test = document.createTextNode(current_abbr.getAttribute("title"));
        ddesc.appendChild(ddesc_test);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
     */
    
    var defs = new Array();
    //遍历这些缩略词，保存在defs数组中
    for(var i=0;i<abbreviations.length;i++){
        var current_abbr = abbreviations[i];
        if(current_abbr.childNodes.length < 1) continue;
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    };

    //创建一个dl列表来展示前面保存在defs数组里的title和abbr标签里的文本内容
    var dlist = document.createElement("dl");
    for(key in defs){
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    };
    if(dlist.childNodes.length < 1) return false;

    /**
     * 创建一个描述性标题来显的不那么突兀
     */
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);

    //添加到给定文档的body标签里，这里用的是HTML-DOM
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}