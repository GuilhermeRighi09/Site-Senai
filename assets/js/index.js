

let imagens = [
    'assets/img/img1.jpg',
    'assets/img/img2.jpg',
    'assets/img/img3.jpg'
]

let indiceAtualListaImagens = 0

function exibirImagem() {
    let imagemCarrossel = document.getElementById('img-carrossel')
    imagemCarrossel.src = imagens[indiceAtualListaImagens]
}

setInterval(function() {
    exibirImagem()
    indiceAtualListaImagens++

    
    if(indiceAtualListaImagens > 2) {
        indiceAtualListaImagens = 0
    }
}, 4000);

    exibirImagem()
    indiceAtualListaImagens++