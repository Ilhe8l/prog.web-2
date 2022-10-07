const tamanhoCelula = 40;
let pecaId = 0;
let localAtual = 80;  
let localFuturo = 81;
let classe ='';
let localDecaptura = '';    
let jogada = 0;
document.body.append(criaTabuleiro());

function criaTabuleiro() {
    const tamanho = 8;
    let tabela = document.createElement('table');

    tabela.style.borderStyle = 'solid';
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    for (let i = 0; i < tamanho; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha);
        for (let j = 0; j < tamanho; j++) {
            let celula = document.createElement('td');
			celula.setAttribute('id',`${j}` + '-' + `${i}`);
            linha.append(celula);
            celula.style.width = `${tamanhoCelula}px`;
            celula.style.height = `${tamanhoCelula}px`;
			pecaId += 1;
	
            if (i % 2 == j % 2) {
                celula.style.backgroundColor = 'black';
				celula.setAttribute("class","droptarget");
                if (i * 8 + j <= 24) {
                    celula.append(criaPeca('black',pecaId));
                } else if (i * 8 + j >= 40) {
                    celula.append(criaPeca('red',pecaId));
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
        }
    };
	
    return tabela;	
}

function criaPeca(cor,ide) {
		let imagem = document.createElement('img');
		imagem.setAttribute('src', `img/${cor}.png`);
		imagem.setAttribute('width', `${tamanhoCelula-4}px`);
		imagem.setAttribute('height', `${tamanhoCelula-4}px`);
		imagem.setAttribute('draggable','true');
		imagem.setAttribute('id', ide);
		imagem.setAttribute('class', cor);
		
    return imagem;
}

function dragstart(){
	document.addEventListener("dragstart", function(event) {
	  event.dataTransfer.setData("Text", event.target.id);
	  localAtual = event.path[1].id.toString();
	  classe = event.path[0].className;
	});
}

function dragend() {
	document.addEventListener("dragend", function(event) {
	});
}

function dragover() {
	document.addEventListener("dragover", function(event) {
	  event.preventDefault();
	});
}

function drop(){
	document.addEventListener("drop", function(event) {
	event.preventDefault();
	if ( event.target.className == "droptarget") {
		const data = event.dataTransfer.getData("Text");
		let c = event.path[0];
		let t = c.childElementCount;
		localFuturo = event.target.id.toString();
		let ab = localAtual.substring(0,1);   
		let cb = localAtual.substring(2,3);  
		let df = localFuturo.substring(0,1);  
		let ef = localFuturo.substring(2,3);  
		
		if(classe == 'black' && df < ab) {
			localDecaptura = (parseInt(ab) - 1).toString() + "-" + (parseInt(cb) + 1).toString();
		} else if(classe == 'black' && df > ab) {
			localDecaptura = (parseInt(ab) + 1).toString() + "-" + (parseInt(cb) + 1).toString();
		} else if(classe == 'red' && df > ab){
			localDecaptura = (parseInt(ab) + 1).toString() + "-" + (parseInt(cb) - 1).toString();
		} else if(classe == 'red' && df < ab){
			localDecaptura = (parseInt(ab) - 1).toString() + "-" + (parseInt(cb) - 1).toString();
		}
		captura = document.getElementById(localDecaptura);
		if(captura.childElementCount == '1'){
			classeCapturada = captura.firstElementChild.className;
			pecaCapturada = captura.firstElementChild;
		}
		if (t == '0' && cb != ef){
			if (classe == 'red' && cb > ef && cb - ef == 1 && jogada % 2 == 0 || cb - ef == 2 && classeCapturada == "black" && jogada % 2 == 0 || classe == 'black' && cb < ef && cb - ef == -1 && jogada % 2 == 1 || cb - ef == -2 && classeCapturada == "red" && jogada % 2 == 1) {
				event.target.appendChild(document.getElementById(data));
				if (classe == 'red' && ef == '0' || classe == 'black' && ef == '7'){
					pecaRainha(classe,ef,df);
				}
				jogada += 1;
				if(cb - ef == 2 || cb - ef == -2) {
					pecaCapturada.remove();
					pecaCapturada = '';
					lasseCapturada = '';
				}
			}
		}
		
	}
	});
}
function pecaRainha(classe, ef, df){
	local = df + '-' + ef;
	sub = document.getElementById(local);
	pe = sub.firstElementChild;
	addId = pe.id;
	addClass = pe.className;
	let imagem = document.createElement('img');
	if (classe == "red") {
		imagem.setAttribute('src', 'img/redKing.jpeg');
	} else {
		imagem.setAttribute('src', 'img/blackKing.jpeg');
	}
	imagem.setAttribute('width', `${tamanhoCelula-4}px`);
	imagem.setAttribute('height', `${tamanhoCelula-4}px`);
	imagem.setAttribute('draggable','true');
	imagem.setAttribute('id', addId);
	imagem.setAttribute('class', `${addClass}King`);
	pe.remove();
	sub.append(imagem);
}
dragstart();
dragend();
dragover();
drop();
