

document.getElementById(txtNombre).value="Anita"

function sumar()
{
    let numero1=1;
    let numero2=500;
    let numero3= numero1 + numero2;
    alert("el resultado es:" + resultado);
}
function sumar2(numero1, numero2)
{
    let resultado= numero1 + numero2;
    alert("el resultado es:" + resultado);
}
function sumar3()
{
    let n=document.getElementById(txtNumero1).value;
    let m=document.getElementById(txtNumero2).value;
    let numero3= numero1 + numero2;
    alert("la suma es:" + (Number(n)+Number(m)));
}

function restar()
{
    let n=document.getElementById(txtNumero1).value;
    let m=document.getElementById(txtNumero2).value;
    alert("la resta es:" -(Number(n)-Number(m)));
}

window.onload= function(){
    document.getElementById(txtApellido).value="Fernandez";
}
