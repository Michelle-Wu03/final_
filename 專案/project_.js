var array=[];
var compound=["AgCl","PbCl2","Hg2Cl2","CuCl","AgBr","PbBr2","Hg2Br2","CuBr","AgI","PbI2","Hg2I2","CuI","CaSO4","SrSO4","BaSO4","PbSO4","CuS","Ag2S","NiS","ZnS",
"AlOH3","FeOH2","ZnOH2","CuOH2","FeOH3","BaCrO4","PbCrO4","Ag2CrO4","MgCO3","CaCO3","SrCO3","BaCO3","NiCO3","CuCO3"];
var colors=["white","white","white","white","yellow","yellow","yellow","yellow","yellow","yellow","yellow, red","yellow","white","white","white","white","black","black",
"black","white","white","white","white","blue","brown","yellow","yellow","firebrick","white","white","white","white","green","green"];
var url=["氯化銀","氯化鉛","氯化亚汞",
"氯化亚铜","溴化銀","溴化铅",
"溴化亚汞","溴化亚铜","碘化银",
"碘化鉛","碘化汞","碘化亚铜",
"硫酸钙","硫酸鍶","硫酸钡",
"硫酸铅","硫化銅","硫化银",
"硫化镍","硫化锌","氢氧化铝",
"氢氧化亚铁","氫氧化鋅","氢氧化铜",
"氢氧化铁","铬酸钡","鉻酸鉛",
"铬酸银","碳酸鎂","碳酸鈣",
"碳酸锶","碳酸钡","碳酸鎳",
"碳酸铜"];
var formu= ["2 Ag + 2 HCl → 2 AgCl + H2", "PbCO3 + 2 HCl(aq) → PbCl2(s) + CO2(g) + H2O <br> Pb(CH3COO)2(aq) + HCl(aq)→ PbCl2(s) + 2CH3COOH(aq)", "2 HgCl2 + SO2 + 2 H2O → Hg2Cl2↓ + 2 HCl + H2SO4<br> HgCl2 + Hg → Hg2Cl2 <br> 2HCl + Hg2(NO3)2 → Hg2Cl2↓ + 2HNO3",
"HgCl2 + 2 Cu → 2 CuCl + Hg", "MBr + AgNO3 → AgBr↓ + MNO3 (M = H、鹼金屬)", "2 NaBr + Pb(NO3)2 → 2 NaNO3 + PbBr2↓"
, "", "2 CuBr2 + H2O + SO32− → 2 CuBr + SO42− + 2 HBr<br>2 HBr + 2 Cu → 2 CuBr + H2", "", 
"Pb(NO3)2 + 2 KI → PbI2 ↓ + 2 KNO3<br>Pb + 2 HI → PbI2 ↓ + H2 ↑", "HgCl2 + 2 KI → HgI2 + 2 KCl<br>Hg + I2 → HgI2","2 Cu2+ + 4 I− → 2 CuI + I2",
"．通常硫酸鈣由天然礦物中提取<br>H2SO4 + Ca(OH)2 → CaSO4 + 2 H2O<br>H2SO4 + CaCO3 → CaSO4 + CO2 + H2O<br>H2SO4 + Ca → CaSO4 + H2", "H2SO4 + BaCl2 → 2 HCl + BaSO4↓",
"Pb(NO3)2 + Na2SO4 → PbSO4↓ + 2NaNO3<br>PbO + H2SO4 → PbSO4↓ + H2O<br>Pb + H2SO4 → PbSO4↓ + H2↑<br>PbS + 4 H2O2 → PbSO4↓ + 4 H2O", "", "",
"Ni2+ + H2S → NiS↓ + 2 H+", "Zn2+ + H2S → ZnS↓ + 2 H+<br>Zn + S → ZnS", "Zn2+ + H2S → ZnS↓ + 2 H+<br>Zn + S → ZnS", "Al3+ + 3NH3·H2O → Al(OH)3↓ + 3NH4+<br>[Al(OH)4]− + H+ → H2O + Al(OH)3",
"4 Fe(OH)2 + O2 + 2 H2O → 4 Fe(OH)3", "", "2 Cu(s) + H2O(g) + CO2(g) + O2(g) → Cu(OH)2·CuCO3(s)",
"Fe3+ + 3 OH− → Fe(OH)3<br>4Fe(OH)2 + O2 + 2H2O → 4Fe(OH)3", "","Pb2+ + CrO42− → PbCrO4",
"K2CrO4 + 2 AgNO3 → Ag2CrO4 + 2 KNO3", "Mg(OH)2 + 2 CO2 → Mg(HCO3)2 得到可溶的碳酸氫鎂，接著將混合液過濾，<br>濾液在真空乾燥下得到含有碳酸鎂的水溶液 Mg2+ + 2 HCO3- → MgCO3 + CO2 + H2O","Na2CO3(aq) + CaCl2(aq) → CaCO3(s)↓ + 2NaCl(aq)",
"Sr(NO3)2 (aq) + Na2CO3 (aq) → SrCO3 (s) + 2 NaNO3 (aq)", "鋇是重金屬，碳酸鋇能與胃液中的鹽酸反應，釋放出鋇離子，引起中毒反應。因此碳酸鋇是劇毒品!要小心!", "4 Ni2+ + Na2CO3 + 6 OH- + 4 H2O → Ni4CO3(OH)6(H2O)4 + 2 Na+",
"2Cu(s) + H2O(g) + CO2 + O2 → Cu(OH)2 + CuCO3(s)"]
var  obj = {}
for (i = 0; i < compound.length; i++){
    obj[compound[i]] = [colors[i], url[i], formu[i]];
    //console.log(obj[compound[i]]);
}

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
    //console.log(array)
    var len1=array[0].length;
    var len2=array[1].length;
    if (array[0][len1-1] == "-"){
        var t = array[0];
        array[0] = array[1];
        array[1] = t;
    }
    //console.log(array)
    var num1="";
    var num2="";
    len1=array[0].length;
    len2=array[1].length;
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
    //console.log(string);
    //console.log(Object.keys(obj))
    if (Object.keys(obj).indexOf(string) < 0) {
            $().animation();
            return;
    }
    else
    {
        OpenWindow=window.open("", "newwin", "height=550, width=500,toolbar=no,scrollbars="+scroll+",menubar=no");
        OpenWindow.document.write("<TITLE>例子</TITLE>");
        OpenWindow.document.write("<BODY BGCOLOR=#ffffff>")
        OpenWindow.document.write("<h1>Hello!"+string+"</h1>");
        OpenWindow.document.write("<h1>"+string+" color is <em style = 'color: "+ obj[string][0]+"; -webkit-text-stroke: 2px gray;'>"+obj[string][0]+"</em></h1>");
        OpenWindow.document.write("<p><em>For more information, please click on the image ↓</em></p>");
        OpenWindow.document.write("<a href='https://zh.wikipedia.org/wiki/"+obj[string][1]+"', target = '_blank'><img src='compound/"+string+".jpg' width=300 height=300></a>");
        OpenWindow.document.write("<p>" + obj[string][2] +"</p>");
        OpenWindow.document.write("<img src='magic.jpg' width=300 height=300 style = 'position: fixed; right: 0;bottom:0; height: 30%; width: 30%; z-index: -1;'>");
        OpenWindow.document.write("</BODY>");
        OpenWindow.document.write("</HTML>");
        OpenWindow.document.close()
        array[0]="";
        array[1]="";
    }
    location.reload(); 

}