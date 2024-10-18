document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica se há uma preferência de tema salva no localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Escuro como padrão
    body.classList.add(savedTheme);

    // Atualiza o estado do switch com base no tema
    toggleSwitch.checked = savedTheme === 'light';

    // Alterna entre o modo claro e escuro ao clicar no switch
    toggleSwitch.addEventListener('change', () => {
        const newTheme = toggleSwitch.checked ? 'light' : 'dark';

        body.classList.remove('light', 'dark');
        body.classList.add(newTheme);

        // Salva a preferência do usuário
        localStorage.setItem('theme', newTheme);
    });
});