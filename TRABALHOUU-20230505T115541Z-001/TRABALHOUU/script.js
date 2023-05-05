function calcularIMC() {
	var altura = document.getElementById("altura").value;
	var peso = document.getElementById("peso").value;

	if (altura == "" || peso == "") {
		alert("Por favor, preencha todos os campos!");
		return;
	}

	var imc = peso / (altura * altura);

	var resultado = document.getElementById("resultado");

	if (imc < 18.5) {
		resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + " (Abaixo do peso)";
		resultado.style.color = "#ff0000";
	} else if (imc >= 18.5 && imc <= 24.9) {
		resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + " (Peso normal)";
		resultado.style.color = "#00ff00";
	} else if (imc >= 25 && imc <= 29.9) {
		resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + " (Sobrepeso)";
		resultado.style.color = "#ffa500";
	} else if (imc >= 30 && imc <= 34.9) {
		resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + " (Obesidade grau I)";
		resultado.style.color = "#ff8c00";
	} else if (imc >= 35 && imc <= 39.9) {
		resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + " (Obesidade grau II)";
		resultado.style.color = "#ff4500";
	} else {
		resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + " (Obesidade grau III)";
		resultado.style.color = "#ff0000";
	}
}
