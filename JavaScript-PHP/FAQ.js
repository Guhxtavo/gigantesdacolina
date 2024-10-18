document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;

        // Verifica se a resposta está visível
        if (answer.style.maxHeight) {
            // Se estiver visível, fecha a resposta
            answer.style.maxHeight = null;
            answer.classList.remove('expanded');
        } else {
            // Se não estiver visível, abre a resposta
            document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                otherAnswer.style.maxHeight = null;
                otherAnswer.classList.remove('expanded');
            });
            
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.classList.add('expanded');
        }

        // Alterna a classe 'active' na pergunta
        item.classList.toggle('active');
    });
});