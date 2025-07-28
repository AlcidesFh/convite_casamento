const form = document.getElementById('formConfirmacao');
const botao = form.querySelector("button");

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Impede segundo envio se já estiver submetendo
  if (form.classList.contains('is-submitting')) return;

  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const mensagem = document.getElementById('mensagemConfirmacao');

  // Validações
  if (nome === '' || telefone.length < 10) {
    mensagem.textContent = 'Por favor, preencha todos os campos corretamente.';
    mensagem.style.color = 'red';
    return;
  }

  // Marca como em submissão
  form.classList.add('is-submitting');
  botao.disabled = true;

  // Verifica confirmação anterior
  if (localStorage.getItem("confirmado_" + telefone)) {
    mensagem.textContent = "Você já confirmou presença. Obrigado!";
    return;
  }

  // Prepara mensagem e WhatsApp
  const msg = `Olá! Eu confirmo minha presença. Meu nome é ${nome}.`;
  const numeroDestino = "5511981284618";
  const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(msg)}`;

  // Marca presença e abre WhatsApp
  localStorage.setItem("confirmado_" + telefone, true);
  mensagem.textContent = "Presença confirmada! Aguardamos você! 🎉";
  mensagem.style.color = 'white';
  window.open(url, "_blank");
});
