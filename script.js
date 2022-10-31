function calcular(){
    let txtn1 = document.querySelector('input#txtn1')   
    let txtn2 = document.querySelector('input#txtn2')
    let nop = document.querySelector('input#txtnop')
    let res = document.querySelector('div#res')


if (txtn1.value.length == 0 || txtn2.value.length == 0 || nop.value.length == 0){
    window.alert('ERRO-Preencha todos os campos')
}else {
    n1 = Number(txtn1.value)
    n2 = Number(txtn2.value)
    nop = String(nop.value)

    switch(nop){
        case '1':
            res.innerHTML = `A soma dos dois valores é: ${n1 + n2}`
            break       
        case '2':
            res.innerHTML = `A subtração dos dois valores é: ${n1 - n2}`
            break                 
        case '3':
            res.innerHTML = `A divisão dos dois valores é: ${n1 / n2}`
            break
        case '4':
            res.innerHTML = `A multiplicação dos dois valores é: ${n1 * n2}`
            break
        case '5':
            res.innerHTML = `${n1} elevado à ${n2} é: ${n1 ** n2}`
            break    
    }
    }
}