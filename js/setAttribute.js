document.addEventListener('DOMContentLoaded', function () {
    const formatButtons = document.querySelectorAll('.format-button');
    const textArea = document.getElementById('text-area');

    formatButtons.forEach(button => {
        button.addEventListener('click', function () {
            const format = this.getAttribute('data-format');
            toggleFormat(format);
            updateTextAreaStyles();
        });
    });

    function toggleFormat(format) {
        textArea.classList.toggle(`font-${format}`);
    }

    function updateTextAreaStyles() {
        textArea.style.fontWeight = textArea.classList.contains('font-bold') ? 'bold' : 'normal';
        textArea.style.fontStyle = textArea.classList.contains('font-italic') ? 'italic' : 'normal';
        textArea.style.textDecoration = textArea.classList.contains('font-underline') ? 'underline' : 'none';
    }
});
