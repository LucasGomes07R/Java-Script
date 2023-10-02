let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#numad')
let res =  document.querySelector('div#res')
let valores = []

function isNumero(n){
if(Number(n) >=1 && Number(n) <= 100) {
    return true
} else {
  return false
  }
}

function inLista(n, l) {
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}

function add(){
  if(isNumero(num.value) && !inLista(num.value, valores)) {
      valores.push(Number(num.value))
      let item = document.createElement('option')
      item.text = `Valor ${num.value} adcionado`
      lista.appendChild(item)
      res.innerHTML = ''
  }else {
    window.alert('valor invalido ou ja encontrado na lista')
  }
num.value = ''
num.focus()
}

function fim() {
  if (valores.length == 0 ){
    alert('Adicione valores antes de finalizar !')
  }else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    for(let pos in valores ){
      if (valores[pos] > maior)
        maior = valores[pos]
      if (valores[pos] < menor)
        menor = valores[pos]
    }
    res.innerHTML = ''
    res.innerHTML +=`<p> Ao todo temos ${tot} numeros cadastrados </p> `
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
  }
}