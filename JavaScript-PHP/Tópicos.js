function toggleSubtopics(id) {
    var subtopics = document.getElementById(id);
    if (subtopics.style.display === "none" || subtopics.style.display === "") {
        subtopics.style.display = "block";
    } else {
        subtopics.style.display = "none";
    }
}

function highlight(element) {
    // Remove a classe de destaque de todos os itens da barra lateral
    var sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.classList.remove('highlight');
    });
    // Adiciona a classe de destaque apenas ao item clicado
    element.classList.add('highlight');
}
