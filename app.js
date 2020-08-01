// Section Blue
const   secBlue=document.getElementById("main");

function format(a){
    a.style.backgroundColor="Blue";
    a.style.padding="0px";
    a.style.margin="0px";
    a.style.display="flex"
}
format(secBlue);
 function welcome(){
     var h2=document.createElement("h2");
     var p=document.createElement("p");
    var h2Text=document.createTextNode("Welcome to Javascript Training BootCamp");
    h2.appendChild(h2Text);
    var p2Text=document.createTextNode("Lux Tech Academy is a free online training BootCamp which have crash and advance coding classes")
    p.appendChild(p2Text);
    document.getElementById("lux").append(h2,p)

     console.log(h2 , p);
 }


 