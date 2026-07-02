let imagens = document.querySelectorAll('.slide');
let imagemAtual = 0;

function trocarImagem() {
  // Remove a classe ativa da imagem atual
  imagens[imagemAtual].classList.remove('ativo');

  // Passa para a próxima imagem (volta para a primeira se for a última)
  imagemAtual = (imagemAtual + 1) % imagens.length;

  // Adiciona a classe ativa na nova imagem
  imagens[imagemAtual].classList.add('ativo');
}

// Troca de imagem a cada 3000 milissegundos (3 segundos)
setInterval(trocarImagem, 3000);
