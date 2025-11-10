document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona o formulário pelo ID 'formContato'
    const form = document.getElementById('formulario');

    // Se o formulário existe, adiciona o evento de submissão
    if (form) {
        form.addEventListener('submit', function(event) {
            
            // Impede o envio padrão para que o JS possa fazer a validação e o processamento
            event.preventDefault(); 

            // 2. Coleta os valores dos campos
            const nome = document.getElementById('inputNome').value.trim();
            const email = document.getElementById('inputEmail').value.trim();
            const celular = document.getElementById('inputCelular').value.trim();
            const mensagem = document.getElementById('textAreaMensagem').value.trim();

            // 3. Validação Adicional de Email (REGEX simples)
            if (!validarEmail(email)) {
                alert('Por favor, insira um email válido.');
                // Você pode adicionar um estilo CSS para destacar o campo do email aqui
                return; // Para a execução do script
            }

            // 4. Se a validação passou, prepara os dados para envio
            const dadosDoFormulario = {
                nome: nome,
                email: email,
                celular: celular,
                mensagem: mensagem
            };

            // 5. Exibe os dados no console (simulando um envio de sucesso)
            console.log('--- Dados Prontos para Envio (Via API ou AJAX) ---');
            console.log(dadosDoFormulario);
            
            // Mensagem de sucesso para o usuário
            alert('Mensagem enviada com sucesso! Em breve, retornaremos o contato.');

            // Opcional: Limpar o formulário após o sucesso
            form.reset();
        });
    }

    // Função auxiliar para validar o formato do email
    function validarEmail(email) {
        // Regex (Expressão Regular) para um formato básico de email
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }
});