var array=[];
var compound=["AgCl","PbCl2","Hg2Cl2","CuCl","AgBr","PbBr2","Hg2Br2","CuBr","AgI","PbI2","Hg2I2","CuI","CaSO4","SrSO4","BaSO4","PbSO4","CuS","Ag2S","NiS","ZnS",
"AlOH3","FeOH2","ZnOH2","CuOH2","FeOH3","BaCrO4","PbCrO4","Ag2CrO4","MgCO3","CaCO3","SrCO3","BaCO3","NiCO3","CuCO3"];
var colors=["white","white","white","white","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","white","white","white","white","black","black",
"black","white","white","white","white","blue","brown","yellow","yellow","firebrick","white","white","white","white","green","green"];
var url=["https://zh.wikipedia.org/wiki/%E6%B0%AF%E5%8C%96%E9%93%B6","https://zh.wikipedia.org/wiki/%E6%B0%AF%E5%8C%96%E9%89%9B","https://zh.wikipedia.org/wiki/%E6%B0%AF%E5%8C%96%E4%BA%9A%E6%B1%9E",
"https://zh.wikipedia.org/wiki/%E6%B0%AF%E5%8C%96%E4%BA%9A%E9%93%9C","https://zh.wikipedia.org/wiki/%E6%BA%B4%E5%8C%96%E9%8A%80","https://zh.wikipedia.org/zh-tw/%E6%BA%B4%E5%8C%96%E9%93%85",
"https://en.wikipedia.org/wiki/Mercury(I)_bromide","https://zh.wikipedia.org/wiki/%E6%BA%B4%E5%8C%96%E4%BA%9A%E9%93%9C","https://zh.wikipedia.org/wiki/%E7%A2%98%E5%8C%96%E9%93%B6",
"https://zh.wikipedia.org/wiki/%E7%A2%98%E5%8C%96%E9%89%9B","https://zh.wikipedia.org/wiki/%E7%A2%98%E5%8C%96%E6%B1%9E","https://zh.wikipedia.org/wiki/%E7%A2%98%E5%8C%96%E4%BA%9A%E9%93%9C",
"https://zh.wikipedia.org/wiki/%E7%A1%AB%E9%85%B8%E9%92%99","https://zh.wikipedia.org/wiki/%E7%A1%AB%E9%85%B8%E9%8D%B6","https://zh.wikipedia.org/wiki/%E7%A1%AB%E9%85%B8%E9%92%A1",
"https://zh.wikipedia.org/wiki/%E7%A1%AB%E9%85%B8%E9%93%85","https://zh.wikipedia.org/wiki/%E7%A1%AB%E5%8C%96%E9%8A%85","https://zh.wikipedia.org/wiki/%E7%A1%AB%E5%8C%96%E9%93%B6",
"https://zh.wikipedia.org/wiki/%E7%A1%AB%E5%8C%96%E9%95%8D","https://zh.wikipedia.org/wiki/%E7%A1%AB%E5%8C%96%E9%94%8C","https://zh.wikipedia.org/wiki/%E6%B0%A2%E6%B0%A7%E5%8C%96%E9%93%9D",
"https://zh.wikipedia.org/wiki/%E6%B0%A2%E6%B0%A7%E5%8C%96%E4%BA%9A%E9%93%81","https://zh.wikipedia.org/wiki/%E6%B0%AB%E6%B0%A7%E5%8C%96%E9%8B%85","https://zh.wikipedia.org/wiki/%E6%B0%A2%E6%B0%A7%E5%8C%96%E9%93%9C",
"https://zh.wikipedia.org/wiki/%E6%B0%A2%E6%B0%A7%E5%8C%96%E9%93%81","https://zh.wikipedia.org/wiki/%E9%93%AC%E9%85%B8%E9%92%A1","https://zh.wikipedia.org/wiki/%E9%89%BB%E9%85%B8%E9%89%9B",
"https://zh.wikipedia.org/wiki/%E9%93%AC%E9%85%B8%E9%93%B6","https://zh.wikipedia.org/wiki/%E7%A2%B3%E9%85%B8%E9%8E%82","https://zh.wikipedia.org/wiki/%E7%A2%B3%E9%85%B8%E9%88%A3",
"https://zh.wikipedia.org/wiki/%E7%A2%B3%E9%85%B8%E9%94%B6","https://zh.wikipedia.org/wiki/%E7%A2%B3%E9%85%B8%E9%92%A1","https://zh.wikipedia.org/wiki/%E7%A2%B3%E9%85%B8%E9%8E%B3",
"https://zh.wikipedia.org/wiki/%E7%A2%B3%E9%85%B8%E9%93%9C"];

function allowDrop(ev) {
    ev.preventDefault();
}
 
function drag(ev) {
    ev.dataTransfer.setData("canDrag", ev.target.id);
}
 
function drop(ev) {
    ev.preventDefault();
   //console.log(ev.target);
    if(document.getElementById(ev.target.id).innerHTML || (ev.target.id != "div1" && ev.target.id != "div2") ) {alert("重複擺放");return;}
    var data = ev.dataTransfer.getData("canDrag");
    ev.target.appendChild(document.getElementById(data));

    array.push(data);
}
function start(){
    if(document.getElementById("div1").innerHTML == "" || document.getElementById("div2").innerHTML == ""){alert("元素不可為空!");return;}
    document.writeln("<img src = \"tenor.gif\" alt = \"gif\" style = \"height: 100%; display: block;margin:auto;\">");
    setTimeout(function(){openwin();}, 4500);
}

function openwin()
{
    var len1=array[0].length;
    var len2=array[1].length;
    var num1="";
    var num2="";
    if(parseInt(array[0][len1-2]))
    {
        num1=parseInt(array[0][len1-2]);
        var elem1=array[0].substr(0,(len1-2));    
    }
    else
        var elem1=array[0].substr(0,(len1-1));
    console.log(array[0][len1-2]);
    if(parseInt(array[1][len2-2]))
    {
        num2=parseInt(array[1][len2-2]);
        var elem2=array[1].substr(0,(len2-2));    
    }
    else        
        var elem2=array[1].substr(0,(len2-1));
    console.log(array[1][len2-2]);
    if(num1==num2)
    {
        num1="";
        num2="";
    }
    var string=elem1+num2+elem2+num1;
    console.log(string);
    var color_mem="";
    var url_mem="";
    for(var i=0;i<compound.length;i++)
    {
        if(compound[i]==string)
        {
            color_mem=colors[i];
            url_mem=url[i];
        }
    }
    console.log(color_mem);
    if(color_mem=="")
    {
        window.alert("查無資料");
    }
    else
    {
        OpenWindow=window.open("", "newwin", "height=550, width=500,toolbar=no,scrollbars="+scroll+",menubar=no");
        OpenWindow.document.write("<TITLE>例子</TITLE>");
        OpenWindow.document.write("<BODY BGCOLOR=#ffffff>")
        OpenWindow.document.write("<h1>Hello!"+string+"</h1>");
        OpenWindow.document.write("<h1>"+string+" color is "+color_mem+"</h1>");
        OpenWindow.document.write("<a href='"+url_mem+"'><img src='compound/"+string+".jpg' width=300 height=300></a>");
        OpenWindow.document.write("</BODY>");
        OpenWindow.document.write("</HTML>");
        OpenWindow.document.close()
        array[0]="";
        array[1]="";
    }
    location.reload(); 

}