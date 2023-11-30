alert("Вы вошли в калькулятор");
let n1 = parseInt(prompt("Введите число"));
let n2 = parseInt(prompt("Введите ещё число"));
all();
function all(){
	alert(`Результаты: ${n1+n2}, ${n1-n2}, ${n1*n2}, ${n1/n2}`);
}