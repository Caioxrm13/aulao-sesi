function calcular(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var res = document.getElementById("res");

    // console.log(num1, num2,2)
    // console.log(typeof num1, typeof num2,2)
   if(isNaN(num1) && isNaN(num2)){
        alert("Digite números válidos")
        return;
   }
   res.innerHTML = num1 + num2
   // res.textContent = num1 + num2

}

function media(){
    var n1 = document.getElementById("nota1").valueAsNumber;
    var n2 = document.getElementById("nota2").valueAsNumber;
    var n3 = document.getElementById("nota2").valueAsNumber;
    var mediaTexto = document.getElementById("resposta");
    var res = (n1 + n2 + n3) / 3;

    if(res >= 7){
        mediaTexto.textContent = res.toFixed(1);
        mediaTexto.style.color = "green";

    }else{
        mediaTexto.textContent = res.toFixed(1);
        mediaTexto.style.color = "red";
    }
    
}

function contar(){
    const num = parseInt($("#numeroInput").val());
    // console.log(num1)
    if(isNaN(num)){
        $("#result").text("Por favor, informe um número válido");
        return;
    }
}
