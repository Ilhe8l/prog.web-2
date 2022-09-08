const tamanhocasas = 40;
let pecaId = 0;
document.body.append(criartabuleiro());

function criartabuleiro() {
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
            linha.append(casa);
        
            casa.style.width = `${tamanhocasas}px`;
            casa.style.height = `${tamanhocasas}px`;
            if (i % 2 == j % 2) {
                casa.style.backgroundColor = 'black';
                if (i * 8 + j <= 24) {
                    casa.append(criarpeca('black'));
                } else if (i * 8 + j >= 40) {
                    casa.append(criarpeca('red'));
                }
            } else {
                casa.style.backgroundColor = 'white';
            }
        }
    };
    return tabela;
    
function criarpeca(cor) {
    let imagem = document.createElement('img');
    imagem.setAttribute('src', `img/${cor}.png`);
    imagem.setAttribute('width', `${tamanhocasas-4}px`);
    imagem.setAttribute('height', `${tamanhocasas-4}px`);
    return imagem;
}
