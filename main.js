 const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalClose = document.getElementById('modal-close');

    function openModal(title, description) {
      modalTitle.textContent = title;
      modalDescription.textContent = description;
      modal.classList.add('show');
    }

    function closeModal() {
      modal.classList.remove('show');
    }

    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
        const title = card.querySelector('.card-titulo').textContent;
        const description = card.dataset.description || card.querySelector('.card-texto').textContent;
        openModal(title, description);
      });
    });

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    const titulos = document.querySelectorAll(".card-titulo");

titulos.forEach(titulo => {
  titulo.addEventListener("click", () => {
    const card = titulo.parentElement;
    card.classList.toggle("ativo");
  });
});
