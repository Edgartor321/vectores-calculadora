function calcular(){
    var magnitud=parseFloat(document.getElementById("magnitud").value);
    var ang = parseFloat(document.getElementById("angulo").value);

    if(isNaN(magnitud)||isNaN(ang)){
        document.getElementById("resultado").innerHTML="Los valores ingresados no son validos"
        return;
    }

    var rad=(ang*Math.PI)/180;
    var x=magnitud*Math.cos(rad);
    var y=magnitud*Math.sin(rad);

    document.getElementById("resultado").innerHTML="Componenete en X: "+x+"<br>Componente en Y: "+y;
}