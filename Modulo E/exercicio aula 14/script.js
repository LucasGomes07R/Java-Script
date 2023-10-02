function contar(){
    let ini = document.getElementById('txti')
    let passo = document.getElementById ('txtp')
    let fim = document.getElementById ('txtf')
    let res = document.getElementById('res')

if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
   window.alert  ('[ERRO] faltam dados')}
 else {
    res.innerHTML = `Contando: `
    let i = Number(ini.value)
    let p = Number(passo.value)
    let f = Number(fim.value)
     
    for(let c = i ; c <= f ; c += p){
            res.innerHTML += `${c}`
        }
    }
}