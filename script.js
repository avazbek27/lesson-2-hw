function buy() {
  // спрашиваем у клиента число
  let count = prompt("Вам сколько надо?");
  
  // переводим в число
  count = Number(count);

  // проверяем что ввёл именно число
  if (!isNaN(count) && count > 0) {
    let result = count * 25000;
    alert("Спасибо за покупку! Итоговая сумма: " + result + " сум.");
  } else {
    alert("Пожалуйста, введите правильное число!");
  }
}