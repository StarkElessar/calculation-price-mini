// {const btn = document.querySelector('#btn')

// function calculationPrice() {
//   lengthGreenhouse = parseInt(prompt('Введите длину теплицы от 10 до 10+м кратную 2м:'))
//   coefficient = (lengthGreenhouse - 10) / 2
  
//   length_10m = parseInt(prompt('Введи цену теплицы 10м?'))
//   length_8m = parseInt(prompt('Введи цену теплицы 8м?'))
//   lengthTotal = length_10m + (length_10m - length_8m) * coefficient

//   alert(`Теплица длиной ${lengthGreenhouse}м стоит: ${lengthTotal}р.`)
// }

// btn.addEventListener('click', calculationPrice)}

window.onload = () => {
  const btn = document.querySelector('#btn')
  const numberInputs = document.querySelectorAll('input[type="tel"]')

  const getInputNumbersValue = (input) => input.value.replace(/\D/g, '')

  const onNumberPaste = (event) => {
    const input = event.target
    const inputNumbersValue = getInputNumbersValue(input)
    const pasted = event.clipboardData || window.clipboardData

    if (pasted) {
      const pastedText = pasted.getData('Text')

      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue
        return
      }
    }
  }

  const onNumberInput = (event) => {
    const input = event.target
    const inputNumbersValue = getInputNumbersValue(input)
    const selectionStart = input.selectionStart

    if (!inputNumbersValue) {
      return input.value = ''
    }

    if (input.value.length != selectionStart) {
      if (event.data && /\D/g.test(event.data)) {
        input.value = inputNumbersValue
      }
      return
    }
  }

  numberInputs.forEach((input) => {
    input.addEventListener('input', onNumberInput, false)
    input.addEventListener('input', onNumberPaste, false)
    input.addEventListener('input', () => {
      btn.classList.remove('btn--disabled')
      input.classList.remove('input--disabled')
    })
  })




  btn.onclick = () => {
    const length_10m = document.querySelector('input[name="length_10m"]').value
    const length_8m = document.querySelector('input[name="length_8m"]').value
    const lengthMore = document.querySelector('input[name="length_more"]').value
    const lengthTotal = document.querySelector('.length-total')
    const priceTotal = document.querySelector('.price-total')

    if (!length_10m && !length_8m && !lengthMore) {
      btn.classList.add('btn--disabled')
      numberInputs.forEach((input) => {
        input.classList.add('input--disabled')
      })
      console.log('Строки пустые..')
    } else {
      btn.classList.remove('btn--disabled')
      lengthTotal.innerHTML = lengthMore
      price = parseInt(length_10m) + ((parseInt(length_10m) - parseInt(length_8m)) * ((parseInt(lengthMore) - 10) / 2))
      console.log(price);
      priceTotal.innerHTML = price

      numberInputs.forEach((input) => input.value = '')
    }

    
  }
}
