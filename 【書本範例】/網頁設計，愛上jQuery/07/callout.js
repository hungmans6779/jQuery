 function processStateChange(){
  var echo;
    if (req.readyState == 4){
    echo = "COMPLETE"; 
    echo = req.responseText; 
    }
}
 
 req = new ActiveXObject("Msxml2.XMLHTTP");
if (req) {
    //req.onreadystatechange = processStateChange;
    req.open("GET", "http://whirlpool.net.au", true);
    req.send();
}
