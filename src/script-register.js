// Validação
const inputName = document.querySelector('input#name')

inputName.onfocus = function () {
  error.classList.remove('show')
}

inputName.addEventListener('invalid', function (event) {
  event.preventDefault()

  !event.target.validity.valueMissing
    ? null
    : (error.innerText = 'Preencha os Campos'),
    error.classList.add('show')

  !event.target.validity.tooShort
    ? null
    : (error.innerText =
        'O seu nome de Usuário deve ter no mínimo 4 Caracteres'),
    error.classList.add('show')
})
