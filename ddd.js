document.querySelector("#ddd").addEventListener("change", buscarAPI);
cidades = new Array();
function buscarAPI(acao){
    fetch(`https://brasilapi.com.br/api/ddd/v1/${acao.target.value}`)
	  .then(res => res.json())
	  .then(dados => {
	      cidades = dados.cities;
	     	listaCidades()
    });
}
function listaCidades(){
    lista = document.querySelector('ol');
    lista.textContent = '';
   	 cidades.forEach(cidade =>{
   	     item = document.createElement('li');
        item.textContent = cidade;
		     lista.append(item);
    });
}	     
