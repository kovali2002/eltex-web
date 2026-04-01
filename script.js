document.addEventListener('DOMContentLoaded', () => {

    //  Константы 
    const STORAGE_KEY = 'kovali-blog-articles';

    //  Начальные статьи (seed) 
    const INITIAL_ARTICLES = [
        {
            id: 1,
            title: 'Как я начал изучать iOS-разработку и прошёл интенсив ШИФТ',
            text: 'Расскажу о своём опыте прохождения интенсива ШИФТ в ЦФТ: как проходило обучение, что изучали и что получилось в итоге.',
            date: 'Jan 10, 2025',
            isoDate: '2025-01-10',
        },
        {
            id: 2,
            title: 'Git для начинающих: основные команды',
            text: '',
            date: 'Feb 5, 2025',
            isoDate: '2025-02-05',
        },
        {
            id: 3,
            title: 'Первые шаги в HTML: структура страницы',
            text: '',
            date: 'Mar 1, 2025',
            isoDate: '2025-03-01',
        },
        {
            id: 4,
            title: 'Семантические теги HTML: зачем они нужны',
            text: '',
            date: 'Mar 5, 2025',
            isoDate: '2025-03-05',
        },
        {
            id: 5,
            title: 'Aurora OS: опыт бета-тестирования',
            text: '',
            date: 'Mar 8, 2025',
            isoDate: '2025-03-08',
        },
        {
            id: 6,
            title: 'CSS Flexbox: как выравнивать элементы',
            text: '',
            date: 'Mar 10, 2025',
            isoDate: '2025-03-10',
        },
        {
            id: 7,
            title: 'CSS Grid: сетки для вёрстки',
            text: '',
            date: 'Mar 15, 2025',
            isoDate: '2025-03-15',
        },
    ];

    //  Элементы интерфейса 
    const blogArticlesSection = document.getElementById('blog-articles');
    const blogGrid = document.getElementById('blog-grid');
    const noArticlesState = document.getElementById('no-articles-state');
    const formWrap = document.getElementById('article-form-wrap');
    const template = document.getElementById('blog-card-template');

    const btnShowForm = document.getElementById('btn-show-form');
    const btnCancel = document.getElementById('btn-cancel');
    const btnSave = document.getElementById('btn-save');

    const articleTitle = document.getElementById('article-title');
    const articleText = document.getElementById('article-text');

    const btnShowStats = document.getElementById('btn-show-stats');
    const statsDialog = document.getElementById('stats-dialog');
    const dialogClose = document.getElementById('dialog-close');
    const statsCount = document.getElementById('stats-count');
    const browseBtnWrap = document.querySelector('.browse-btn-wrap');


    // ─── LocalStorage helpers ─────────────────────────────────────

    function getArticles() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        } catch {
            return [];
        }
    }

    function saveArticles(articles) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    }

    // Записываем начальные статьи только если ключа ещё не существует.
    // Если пользователь удалил все статьи — ключ есть (пустой массив), seed не повторяется.
    function initStorage() {
        if (localStorage.getItem(STORAGE_KEY) === null) {
            saveArticles(INITIAL_ARTICLES);
        }
    }

    //  Рендеринг 

    function renderArticles() {
        const articles = getArticles();

        const existingFeatured = blogArticlesSection.querySelector('.blog-featured');
        if (existingFeatured) existingFeatured.remove();

        blogGrid.innerHTML = '';

        if (articles.length === 0) {
            noArticlesState.style.display = 'flex';
            browseBtnWrap.style.display = 'none';  
            return;
        }


        noArticlesState.style.display = 'none';
        browseBtnWrap.style.display = 'block'; 


        blogArticlesSection.insertBefore(
            createFeaturedElement(articles[0]),
            noArticlesState
        );

        for (let i = 1; i < articles.length; i++) {
            blogGrid.appendChild(createCardElement(articles[i]));
        }
    }

    function createFeaturedElement(article) {
        const el = document.createElement('article');
        el.className = 'blog-featured';
        el.dataset.articleId = article.id;
        el.innerHTML = `
            <button type="button" class="delete-btn" aria-label="Удалить статью">✕</button>
            <div class="blog-featured-image">
                <img src="assets/images/Selection.png" alt="Статья" />
            </div>
            <div class="blog-featured-text">
                <h2>${escapeHtml(article.title)}</h2>
                ${article.text ? `<p>${escapeHtml(article.text)}</p>` : ''}
                <time datetime="${article.isoDate}">${article.date}</time>
            </div>
        `;
        return el;
    }

    function createCardElement(article) {
        const clone = template.content.cloneNode(true);
        const cardEl = clone.querySelector('article');
        cardEl.dataset.articleId = article.id;
        clone.querySelector('h3').textContent = article.title;
        const timeEl = clone.querySelector('time');
        timeEl.textContent = article.date;
        timeEl.setAttribute('datetime', article.isoDate);
        return clone;
    }

    function escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    //  Удаление статьи 

    blogArticlesSection.addEventListener('click', (e) => {
        if (!e.target.classList.contains('delete-btn')) return;

        const article = e.target.closest('article');
        if (!article) return;

        if (!confirm('Вы уверены, что хотите удалить эту статью?')) return;

        const id = Number(article.dataset.articleId);
        saveArticles(getArticles().filter(a => a.id !== id));
        renderArticles();
    });

    //  Добавление новой статьи 

    btnSave.addEventListener('click', (e) => {
        e.preventDefault();

        const title = articleTitle.value.trim();
        const text = articleText.value.trim();

        if (!title || !text) {
            alert('Заполните все поля');
            return;
        }

        const dateObj = new Date();
        const newArticle = {
            id: Date.now(),
            title,
            text,
            date: dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            isoDate: dateObj.toISOString().split('T')[0],
        };

        const articles = getArticles();
        articles.unshift(newArticle);
        saveArticles(articles);

        renderArticles();
        closeForm();
    });

    //  Управление формой 

    function closeForm() {
        formWrap.classList.remove('visible');
        articleTitle.value = '';
        articleText.value = '';
    }

    btnShowForm.addEventListener('click', () => {
        formWrap.classList.add('visible');
        formWrap.scrollIntoView({ behavior: 'smooth' });
    });

    btnCancel.addEventListener('click', closeForm);

    //  Статистика 

    btnShowStats.addEventListener('click', () => {
        statsCount.textContent = getArticles().length;
        statsDialog.showModal();
    });

    dialogClose.addEventListener('click', () => statsDialog.close());

    statsDialog.addEventListener('click', (e) => {
        if (e.target === statsDialog) statsDialog.close();
    });

    //  Инициализация 
    initStorage();
    renderArticles();
});