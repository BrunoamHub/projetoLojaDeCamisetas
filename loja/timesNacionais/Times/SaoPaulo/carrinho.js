const carrinho = document.querySelector('.carrinho-compras');
const btnClose = document.querySelector('.btn-close');
const sidebar = document.querySelector('.sidebar-container');

carrinho.addEventListener('mouseover', () => {
  const msgCarrinho = document.createElement('p');
  msgCarrinho.appendChild(document.createTextNode('Carrinho de compras'));
  carrinho.appendChild(msgCarrinho);
  msgCarrinho.style.color = 'white';
  msgCarrinho.style.fontSize = '12px';
  msgCarrinho.style.fontWeight = 'bold';
  msgCarrinho.style.position = 'absolute';
  msgCarrinho.style.top = '120%';
  msgCarrinho.style.left = '50%';
  msgCarrinho.style.transform = 'translateX(-50%)';
  msgCarrinho.style.backgroundColor = '#434343';
  msgCarrinho.style.padding = '5px 10px';
  msgCarrinho.style.borderRadius = '4px';
  msgCarrinho.style.whiteSpace = 'wrap';
  msgCarrinho.style.width = '90px';
  msgCarrinho.style.textAlign = 'center';
  msgCarrinho.style.border = '1px solid #caa343';
});

carrinho.addEventListener('mouseout', () => {
  const msgCarrinho = document.querySelector('.carrinho-compras p');
  if (msgCarrinho) {
    carrinho.removeChild(msgCarrinho);
  }
});

carrinho.addEventListener('click', () => {
  sidebar.classList.add('open');
});

btnClose.addEventListener('click', () => {
  sidebar.classList.remove('open');
  sidebar.classList.add('transition') = "transform 0.5s ease-in-out";
});
