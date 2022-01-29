var num = document.querySelector('input#num')
var lista = document.querySelector('select#lista')
var resultado = document.querySelector('div#resultado')
var valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n))  != -1){
        return true
    }else{
        return false
    }
    
}

function adicionar(){
    if(isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${tot} valores cadastrados</p>`
        resultado.innerHTML += `<p>O menor número digitado foi ${menor}</p>`
        resultado.innerHTML += `<p>O maior número digitado foi ${maior}</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(4)}</p>`
    }

}
