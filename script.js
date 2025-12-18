// --- Lógica do Botão Voltar ao Topo ---
    const backToTopBtn = document.getElementById('back-to-top');

    // Monitora o scroll da página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Se rolar mais de 300px
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Ação de clique para subir suavemente
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });