// Criar a lista de imagens

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
// Lógica para exibir as imagens a cada 4 Segundos
setInterval(function() {
    exibirImagem()
    indiceAtualListaImagens++

    //verifica se chegou ao fim da imagem e reinicia 
    if(indiceAtualListaImagens > 2) {
        indiceAtualListaImagens = 0
    }
}, 4000);

    exibirImagem()
    indiceAtualListaImagens++