const btn = document.querySelector('#btn')

function calculationPrice() {
  lengthGreenhouse = parseInt(prompt('Введите длину теплицы от 10 до 10+м кратную 2м:'))
  coefficient = (lengthGreenhouse - 10) / 2
  
  length_10m = parseInt(prompt('Введи цену теплицы 10м?'))
  length_8m = parseInt(prompt('Введи цену теплицы 8м?'))
  lengthTotal = length_10m + (length_10m - length_8m) * coefficient

  alert(`Теплица длиной ${lengthGreenhouse}м стоит: ${lengthTotal}р.`)
}

btn.addEventListener('click', calculationPrice)