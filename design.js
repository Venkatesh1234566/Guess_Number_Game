var count=0;
var b=Math.floor(Math.random()*100+1);
document.getElementById("click").onclick=function()
{
    var a =parseInt(document.getElementById("n1").value);
    if(a<b)
    {
        count++;
        document.getElementById("re").textContent=(count+" Number is small Try with large number");
    }
    else if(a>b){
        count++;
        document.getElementById("re").textContent=(count+" Number is large Try with small number");
    }
    else{
        document.getElementById("re").textContent=("Congratulations you got the number in "+count+" tries");
    }
   
}
document.getElementById("reset").onclick=function()
{
    window.location.reload();
}