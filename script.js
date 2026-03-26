const btnShowForm = document.getElementById('btn-show-form');
const btnCancel = document.getElementById('btn-cancel');
const btnSave = document.getElementById('btn-save');
const formWrap = document.getElementById('article-form-wrap');
const articleTitle = document.getElementById('article-title');
const articleText = document.getElementById('article-text');
const blogGrid = document.getElementById('blog-grid');
const template = document.getElementById('blog-card-template');
const btnShowStats = document.getElementById('btn-show-stats');
const statsDialog = document.getElementById('stats-dialog');
const dialogClose = document.getElementById('dialog-close');
const statsCount = document.getElementById('stats-count');

btnShowForm.addEventListener('click', () => {
    formWrap.classList.add('visible');
    formWrap.scrollIntoView({ behavior: 'smooth' });
});

btnCancel.addEventListener('click', () => {
    formWrap.classList.remove('visible');
    articleTitle.value = '';
    articleText.value = '';
});

btnSave.addEventListener('click', () => {
    const title = articleTitle.value.trim();
    const text = articleText.value.trim();

    if (!title || !text) {
        alert('Заполните все поля');
        return;
    }

    const clone = template.content.cloneNode(true);
    clone.querySelector('h3').textContent = title;
    clone.querySelector('time').textContent = new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    blogGrid.appendChild(clone);

    formWrap.classList.remove('visible');
    articleTitle.value = '';
    articleText.value = '';
});

function countArticles() {
    return document.querySelectorAll('.blog-card').length;
}

btnShowStats.addEventListener('click', () => {
    statsCount.textContent = countArticles();
    statsDialog.showModal();
});

dialogClose.addEventListener('click', () => {
    statsDialog.close();
});

statsDialog.addEventListener('click', (e) => {
    if (e.target === statsDialog) {
        statsDialog.close();
    }
});