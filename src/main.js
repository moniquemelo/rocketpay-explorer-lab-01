import './css/index.css'

const ccGgColor01 = document.querySelector('.cc-bg svg > g g:nth-child(1) path')
const ccGgColor02 = document.querySelector('.cc-bg svg > g g:nth-child(2) path')
const ccLogo = document.querySelector('.cc-logo span:nth-child(2) img')

// Função para mudar a cor do cartão de acordo com a bandeira
function setCardType(type) {
  const colors = {
    visa: ['#436D99', '#2D57F2'],
    mastercard: ['#DF6F29', '#C69347'],
    default: ['black', 'gray']
  }

  ccGgColor01.setAttribute('fill', colors[type][0])
  ccGgColor02.setAttribute('fill', colors[type][1])
  ccLogo.setAttribute('src', `cc-${type}.svg`)
}

//setCardType('mastercard')

globalThis.setCardType = setCardType
