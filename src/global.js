// dark mode
const buttonTheme = document.querySelector('#dark-mode-button')
const colors = document.querySelector(':root')

buttonTheme.onclick = function () {
  colors.classList.toggle('dark')
  buttonTheme.firstElementChild.classList.toggle('fa-sun')
  buttonTheme.firstElementChild.classList.toggle('fa-moon')
}

// See Pass Button
const seePass = document.querySelector("input[type='checkbox']")
const inputPassword = document.querySelector('input#password')

seePass.onclick = function () {
  seePass.checked
    ? inputPassword.setAttribute('type', 'text')
    : inputPassword.setAttribute('type', 'password')
}

// Não enviar o Form
const form = document.querySelector('form')

form.onsubmit = function (submit) {
  submit.preventDefault()
}

// Validação

const inputEmail = document.querySelector('input#email')
const error = document.querySelector('.error')

inputEmail.onfocus = function () {
  error.classList.remove('show')
}

inputPassword.onfocus = function () {
  error.classList.remove('show')
}

inputEmail.addEventListener('invalid', function (event) {
  event.preventDefault()

  !event.target.validity.valueMissing
    ? null
    : (error.innerText = 'Preencha os Campos'),
    error.classList.add('show')

  event.target.validity.valid
    ? null
    : (error.innerText = 'Coloque um email válido'),
    error.classList.add('show')
})

inputPassword.addEventListener('invalid', function (event) {
  event.preventDefault()

  !event.target.validity.tooShort
    ? null
    : (error.innerText = 'A senha deve ter no mínimo 6 Caracteres'),
    error.classList.add('show')

  !event.target.validity.valueMissing
    ? null
    : (error.innerText = 'Preencha os Campos'),
    error.classList.add('show')
})
