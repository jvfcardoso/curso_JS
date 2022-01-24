function tabuada(){
    let num = document.querySelector('#txtnum')
    let res = document.querySelector('#seltab')
    res.innerHTML = ''
    if(num.value.length == 0){
        alert('Campo vazio, favor inserir um número')
    }else{
        let val = Number(num.value)
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${val} x ${c} = ${c * val}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }
}