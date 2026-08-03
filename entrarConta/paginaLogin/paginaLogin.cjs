document
  .getElementById('loginForm')
  .addEventListener('submit', function (event) {
    // Impede o envio do formulário padrão
    event.preventDefault();

    // Obtém os valores dos campos de login e senha
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Captura os elemetos de mensagem
    let errorMessage = document.getElementById('error_message');
    let successMessage = document.getElementById('success_message');

    // Limpa as mensagens anteriores
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    // Validação 1: Verifica se os campos estão vazios
    if (!email || !password) {
      errorMessage.textContent =
        'Por favor, preencha todos os campos obrigatórios.';
      errorMessage.style.display = 'block';
      return;
    }

    // Credenciais de teste simulaas
    const emailValido = 'email@example.com';
    const senhaValida = 'senha123';

    (fetch('./paginaLogin.cjs'),
      {
        method: 'POST',
        body: JSON.stringify({
          emailValido,
          senhaValida,
        }),
      });

    // Validação 2: Verifica se o email e senha correspondem às credenciais válidas
    if (email === emailValido && password === senhaValida) {
      // Login bem-sucedido
      successMessage.textContent = 'Credenciais válidas!';
      successMessage.style.display = 'block';

      // Redireciona para a página "minhaConta.html" após 2 segundos
      setTimeout(() => {
        alert((successMessage.textContent = 'Login bem-sucedido!'));
        window.location.href =
          '/entrarConta/paginaLogin/minhaConta/minhaConta.html';
      }, 1000);

      // Armazena as credenciais válidas
    } else {
      // Login falhou
      errorMessage.textContent = 'Email ou senha inválidos.';
      errorMessage.style.display = 'block';
    }
  });
