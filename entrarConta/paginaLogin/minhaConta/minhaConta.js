// Painel de Controle
const painelControleBtn = document.getElementById('painelControleBtn');
const msgLogin = document.getElementById('msgLogin');

painelControleBtn.addEventListener('click', () => {
  msgLogin.classList.toggle('hidden');
});

// Pedidos
const pedidosBtn = document.getElementById('PedidosBtn');
const msgPedidos = document.getElementById('msgPedidos');

pedidosBtn.addEventListener('click', () => {
  msgPedidos.classList.toggle('hidden');
});

// Endereços
const enderecosBtn = document.getElementById('EnderecosBtn');
const msgEnderecos = document.getElementById('msgEnderecos');

enderecosBtn.addEventListener('click', () => {
  msgEnderecos.classList.toggle('hidden');
});

// Detalhes da Conta
const detalhesContaBtn = document.getElementById('DetalhesContaBtn');
const msgDetalhesConta = document.getElementById('msgDetalhesConta');

detalhesContaBtn.addEventListener('click', () => {
  msgDetalhesConta.classList.toggle('hidden');
});
