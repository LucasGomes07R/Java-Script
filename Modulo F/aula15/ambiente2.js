let valores = [0, 1, 7, 2, 4, 9]
/*
for(let pos = 0 ; pos < valores.length ; pos++){
    console.log(`A posiçao ${pos}  tem o valor ${valores[pos]}`)
}*/

for(let pos in valores) {
    console.log(`a posiçao ${pos} tem o valor ${valores[pos]}`)
}
