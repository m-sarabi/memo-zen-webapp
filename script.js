document.addEventListener('DOMContentLoaded', () => {
    const markdownContainer = document.getElementById('markdown-container');
    const markdownInputFront = document.getElementById('markdown-input-front');
    const markdownInputBack = document.getElementById('markdown-input-back');
    const saveButton = document.getElementById('save');
    const editButton = document.getElementById('edit');
    const cardContainer = document.getElementById('card-container');
    const cardFront = document.getElementById('card-front');
    const cardBack = document.getElementById('card-back');
    let rotation = 0;

    saveButton.addEventListener('click', () => {
        const markdownFront = markdownInputFront.value;
        const markdownBack = markdownInputBack.value;
        const converter = new showdown.Converter();
        converter.setOption('tables', true);
        const htmlFront = converter.makeHtml(markdownFront);
        const htmlBack = converter.makeHtml(markdownBack);
        cardFront.innerHTML = htmlFront;
        cardBack.innerHTML = htmlBack;

        markdownContainer.classList.toggle('visible');
    });

    editButton.addEventListener('click', () => {
        markdownContainer.classList.toggle('visible');
    });

    cardContainer.addEventListener('click', () => {
        rotation += 180;
        cardFront.style.transform = `rotateY(${rotation}deg)`;
        cardBack.style.transform = `rotateY(${rotation + 180}deg)`;
    });
});