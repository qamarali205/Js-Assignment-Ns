function host(){
  
    var url=document.getElementById("url").innerHTML;
    var name=document.getElementById("name").value;
    var year=document.getElementById("year").value;
     var str;
     if(name!="" && year=="")
     str=url+"?name="+name;
     else if(year!="" && name=="")
     str=url+"?year="+year;
     else if(name=="" && year=="")
     str=url;
     else
     str=url+"?name="+name+"&year="+year;
     document.getElementsByTagName("h3")[0].innerHTML=str
    

}