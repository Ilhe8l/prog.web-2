const tamanhocasa = 40;
let pecaid = 0;
let localat = 80;
let localfut = 81;
let classe = '';
document.body.append(criartabu());

function criartabu() {
    const tamanho = 8;
    let tabela = document.createElement('table');

    tabela.style.borderStyle = 'solid';
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    for (let i = 0; i < tamanho; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha);
        for (let j = 0; j < tamanho; j++) {
            let casa = document.createElement('td');
			casa.setAttribute('id',i + 99);
            linha.append(casa);
            casa.style.width = `${tamanhocasa}px`;
            casa.style.height = `${tamanhocasa}px`;
			pecaid += 1;
            if (i % 2 == j % 2) {
                casa.style.backgroundColor = 'black';
				casa.setAttribute("class","droptarget");
                if (i * 8 + j <= 24) {
                    casa.append(criarpeca('black',pecaid));
                } else if (i * 8 + j >= 40) {
                    casa.append(criarpeca('red',pecaid));
                }
            } else {
                casa.style.backgroundColor = 'white';
            }
        }
    };
	
    return tabela;	
}

function criarpeca(cor,ide) {
		let imagem = document.createElement('img');
		imagem.setAttribute('src', `img/${cor}.png`);
		imagem.setAttribute('width', `${tamanhocasa-4}px`);
		imagem.setAttribute('height', `${tamanhocasa-4}px`);
		imagem.setAttribute('draggable','true');
		imagem.setAttribute('id', ide);
		imagem.setAttribute('class', cor);
		
    return imagem;
}

function dragstart(){
	document.addEventListener("dragstart", function(event) {
	  event.dataTransfer.setData("Text", event.target.id);
	  localat = event.path[1].id;
	  classe = (event.path[0].className);
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
		localfut = event.target.id;
		if(t == '0' && localat != localfut){
			if(classe == 'red' && localat > localfut && localat - localfut == 1|| classe == 'black' && localat < localfut && localfut - localat == 1) {
				event.target.appendChild(document.getElementById(data));
			}
		}
	}
	});
}
dragstart();
dragend();
dragover();
drop();
