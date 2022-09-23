let titulo
let tamanho = 6;

for(let i = 1; i < 7; i++) {
    titulo = document.querySelector(`h${i}`)
    if(titulo != null){
        criabotao()
        break
    }
}

function criabotao() {
    const botoes = document.createElement('div')

    const btn = document.createElement('button')
    btn.innerText = "+"
    btn.id = 'btn1'
    
    const btn2 = document.createElement('button')
    btn2.innerText = "-"
    btn2.id = 'btn2'

    botoes.append(btn)
    botoes.append(btn2)

    titulo.parentNode.insertBefore(botoes, titulo.nextSibling)
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
