document.getElementById('formConfirmacao').addEventListener('submit', function(event) {
  event.preventDefault();

  var nome = document.getElementById('nome').value.trim();
  var telefone = document.getElementById('telefone').value.trim();
  var mensagem = document.getElementById('mensagemConfirmacao');

  if (nome === '' || telefone.length < 10) {
    mensagem.textContent = 'Por favor, preencha todos os campos corretamente.';
    mensagem.style.color = 'red';
    return;
  }

  // Confirmação simulada
  mensagem.textContent = 'Presença confirmada com sucesso! 🎉';

  // Redireciona após alguns segundos para uma página personalizada
  setTimeout(function() {
    window.location.href = 'confirmado.html';
  }, 3000);
});

document.getElementById("formConfirmacao").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const botao = document.querySelector("button");

  if (localStorage.getItem("confirmado_" + telefone)) {
    document.getElementById("mensagemConfirmacao").innerText = "Você já confirmou presença. Obrigado!";
    return;
  }

  const msg = `Olá! Eu confirmo minha presença no casamento de Alcides e Andreza. Meu nome é ${nome}.`;
  const numeroDestino = "5511988339183"; // ex: 5511999999999
  const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(msg)}`;

  localStorage.setItem("confirmado_" + telefone, true);
  document.getElementById("mensagemConfirmacao").innerText = "Presença confirmada! Aguardamos você! 🎉";

  botao.disabled = true;
  window.open(url, "_blank");
});
