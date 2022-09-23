let titulo
let tamanho = 6;

for(let i = 1; i < 7; i++) {
    titulo = document.querySelector(`h${i}`)
    if(titulo != null){
        criarbotao()
        break
    }
}

function criarbotao() {
    const botao = document.createElement('div')

    const btn = document.createElement('button')
    btn.innerText = "+"
    btn.id = 'btn1'
    
    const botao2 = document.createElement('button')
    btn2.innerText = "-"
    btn2.id = 'btn2'

    botao.append(btn)
    botao.append(btn2)

    titulo.parentNode.insertBefore(botao, titulo.nextSibling)
    event()
}
function event(){
    const botao1 = document.querySelector('#btn1')
    botao1.addEventListener('click', ()=>{
        if(tamanho <= 8){
            tamanho += 1
        }
        titulo.style.fontSize = `${tamanho}em`
    })
    const botao2 = document.querySelector('#btn2')
    botao2.addEventListener('click',  ()=>{
        if(tamanho > 1){
            tamanho -= 1
        }
        titulo.style.fontSize = `${tamanho}em`
    })
}
