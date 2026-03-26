document.addEventListener('DOMContentLoaded', () => {
    // Основные элементы интерфейса
    const blogArticles = document.getElementById('blog-articles');
    const blogGrid = document.getElementById('blog-grid');
    const formWrap = document.getElementById('article-form-wrap');
    const template = document.getElementById('blog-card-template');

    // Кнопки управления
    const btnShowForm = document.getElementById('btn-show-form');
    const btnCancel = document.getElementById('btn-cancel');
    const btnSave = document.getElementById('btn-save');

    // Поля формы
    const articleTitle = document.getElementById('article-title');
    const articleText = document.getElementById('article-text');

    // Элементы статистики
    const btnShowStats = document.getElementById('btn-show-stats');
    const statsDialog = document.getElementById('stats-dialog');
    const dialogClose = document.getElementById('dialog-close');
    const statsCount = document.getElementById('stats-count');

    // 1. УДАЛЕНИЕ СТАТЕЙ
    blogArticles.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const article = e.target.closest('article');
            if (!article) return;

            if (confirm('Вы уверены, что хотите удалить эту статью?')) {
                // Если удаляем ГЛАВНУЮ статью
                if (article.classList.contains('blog-featured')) {
                    const nextArticle = blogGrid.querySelector('.blog-card');

                    if (nextArticle) {
                        // Переносим данные из первой маленькой карточки в главную
                        const newImgSrc = nextArticle.querySelector('img').src;
                        const newTitle = nextArticle.querySelector('h3').textContent;
                        const newTimeDate = nextArticle.querySelector('time').getAttribute('datetime');
                        const newTimeText = nextArticle.querySelector('time').textContent;

                        article.querySelector('img').src = newImgSrc;
                        article.querySelector('h2').textContent = newTitle;
                        
                        const featuredTime = article.querySelector('time');
                        featuredTime.setAttribute('datetime', newTimeDate);
                        featuredTime.textContent = newTimeText;

                        // Скрываем описание, так как у маленьких карточек его нет
                        const featuredDesc = article.querySelector('p');
                        if (featuredDesc) featuredDesc.style.display = 'none';

                        // Удаляем маленькую карточку, которую "подняли" наверх
                        nextArticle.remove();
                    } else {
                        // Если маленьких карточек нет, удаляем главную совсем
                        article.remove();
                    }
                } else {
                    // Если удаляем обычную карточку из сетки
                    article.remove();
                }
            }
        }
    });

    // ДОБАВЛЕНИЕ НОВОЙ СТАТЬИ
     
    btnSave.addEventListener('click', (e) => {
        e.preventDefault();

        const title = articleTitle.value.trim();
        const text = articleText.value.trim();

        if (!title || !text) {
            alert('Заполните все поля');
            return;
        }

        const dateObj = new Date();
        const formattedDate = dateObj.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        const isoDate = dateObj.toISOString().split('T')[0];

        const featured = document.querySelector('.blog-featured');

        if (featured) {
            // 1. Копируем данные ТЕКУЩЕЙ главной статьи в новую маленькую карточку
            const currentImg = featured.querySelector('img').src;
            const currentTitle = featured.querySelector('h2').textContent;
            const currentTime = featured.querySelector('time');

            const clone = template.content.cloneNode(true);
            clone.querySelector('img').src = currentImg;
            clone.querySelector('h3').textContent = currentTitle;
            clone.querySelector('time').textContent = currentTime.textContent;
            clone.querySelector('time').setAttribute('datetime', currentTime.getAttribute('datetime'));

            // Вставляем её в начало сетки
            blogGrid.prepend(clone);

            // 2. Обновляем ГЛАВНУЮ статью данными из формы
            featured.querySelector('h2').textContent = title;
            
            let desc = featured.querySelector('p');
            if (!desc) {
                desc = document.createElement('p');
                featured.querySelector('.blog-featured-text').insertBefore(desc, featured.querySelector('time'));
            }
            desc.textContent = text;
            desc.style.display = 'block';

            const featuredTime = featured.querySelector('time');
            featuredTime.textContent = formattedDate;
            featuredTime.setAttribute('datetime', isoDate);
        } else {
            // Если главной статьи не существует, создаем её структуру
            blogArticles.insertAdjacentHTML('afterbegin', `
                <article class="blog-featured">
                    <button type="button" class="delete-btn" aria-label="Удалить статью">✕</button>
                    <div class="blog-featured-image">
                        <img src="assets/images/Selection.png" alt="Статья" />
                    </div>
                    <div class="blog-featured-text">
                        <h2>${title}</h2>
                        <p>${text}</p>
                        <time datetime="${isoDate}">${formattedDate}</time>
                    </div>
                </article>
            `);
        }

        closeForm();
    });

    // УПРАВЛЕНИЕ ФОРМОЙ

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

    // 4. СТАТИСТИКА
    function countArticles() {
        // Считаем и главную, и карточки в сетке
        return document.querySelectorAll('.blog-card, .blog-featured').length;
    }

    btnShowStats.addEventListener('click', () => {
        statsCount.textContent = countArticles();
        statsDialog.showModal();
    });

    dialogClose.addEventListener('click', () => statsDialog.close());

    // Закрытие диалога кликом по фону
    statsDialog.addEventListener('click', (e) => {
        if (e.target === statsDialog) statsDialog.close();
    });
});