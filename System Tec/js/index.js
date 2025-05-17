// Script para salvar e atualizar o perfil do usuário
function salvarUsuario() {
    const nome = document.getElementById('nomeUsuario').value.trim();
   
  
    if (!nome) {
      alert("Preencha todos os campos.");
      return;
    }
  
    const usuario = { nome };
    localStorage.setItem('usuarioFinanSys', JSON.stringify(usuario));
    document.getElementById('modalUsuario').style.display = 'none';
    atualizarPerfilUsuario();
  }
  function atualizarPerfilUsuario() {
    const dados = JSON.parse(localStorage.getItem('usuarioFinanSys'));
    if (dados) {
      document.getElementById('nomeSaudacao').textContent = `Olá, ${dados.nome}`;
     
      }
    }
  
  
  // Carrega dados do usuário ao iniciar
  window.onload = () => {
    const dados = localStorage.getItem('usuarioFinanSys');
    if (!dados) {
      document.getElementById('modalUsuario').style.display = 'flex';
    } else {
      atualizarPerfilUsuario();
      renderizarTabela();
    }
  }
   <script>
    let ordemCrescente = true;

  function ordenarPorValor() 
    // Ordena o array de transações com base no valor
    transacoes.sort((a, b) = ordemCrescente ? a.valor - b.valor : b.valor - a.valor);
  
    // Alterna a ordem para a próxima vez que o botão for clicado
    ordemCrescente = !ordemCrescente;
  
    // Atualiza o texto do botão com base na ordem atual
    const botao = document.querySelector('button[onclick="ordenarPorValor()"]');
    botao.textContent = ordemCrescente 
      ? "🔼 Ordenar por Valor (Crescente)" 
      : "🔽 Ordenar por Valor (Decrescente)";
  
    // Re-renderiza a tabela
    renderizarTabela();
  
  </script>