document.addEventListener("DOMContentLoaded", teste) 

//função 1
function teste(){
	const ol = document.createElement('ol')
	ol.id = 'sumário'
	document.body.prepend(ol)
	const secoes = document.querySelectorAll('h2')
	for(let i=0; i<secoes.length; i++) {
		const li = criarItem(`#sec${i+1}`, secoes[i].textContent)
		ol.appendChild(li) 
		alterarH2(secoes[i], i+1) 
	}
}

//função 2
function alterarH2(elem, secnum){ 
	inserirNumero(elem, secnum)
	elem.id = `sec${secnum}`
	const voltar = criarLink('#', 'voltar') 
	inserirDepois(elem, voltar)
}

//função 3
function criarItem(href, texto){
	const li = document.createElement('li')
	const linque = criarLink(href,texto)
	li.appendChild(linque)
	return li
}

//função 4
function inserirNumero(elem, numero) {
	elem.textContent = `${numero}. ${elem.textContent}`
}

//função 5
function criarLink(href, texto) {
	const linque = document.createElement('a') 
	linque.setAttribute('href', href) 
	linque.textContent = texto
	return linque 
}
	
//função 6
function inserirDepois(de, elem) {
	const proximoIrmao = de.nextElementSibling;
	de.parentElement.insertBefore(elem,proximoIrmao)
}
