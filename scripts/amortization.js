function getTotal(){
    var p=document.getElementById("initialPrincipal").value;
    var r=document.getElementById("interestRate").value * 0.01;
    var n=document.getElementById("years").value;
    var b=Math.pow((1+r), n);
    var a=p * ((r*b)/(b-1)); 

    document.getElementById("principalDisplay").innerHTML = p;
    document.getElementById("interestDisplay").innerHTML = r;
    document.getElementById("yearsDisplay").innerHTML = n;
    document.getElementById("paymentDisplay").innerHTML = a.toFixed(2);
}