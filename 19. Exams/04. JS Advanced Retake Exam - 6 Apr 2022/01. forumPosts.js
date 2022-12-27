function solve() {

    const titleInput = document.querySelector('#post-title');
    const categoryTitle = document.querySelector('#post-category');
    const textArea = document.querySelector('#post-content');

    const btnPublish = document.querySelector('#publish-btn');

    const ulReviewList = document.querySelector('#review-list');

    const ulPublishList = document.querySelector('#published-list');

    btnPublish.addEventListener('click', function (e) {

        const titleInputValue = titleInput.value;
        titleInput.value = '';
        const categoryTitleValue = categoryTitle.value;
        categoryTitle.value = '';
        const textAreaValue = textArea.value;
        textArea.value = '';

        if (!titleInputValue || !categoryTitleValue || !textAreaValue) {
            return;
        }

        const liReviewList = document.createElement('li');
        liReviewList.classList.add('rpost');

        const articleReviewList = document.createElement('article');

        const h4ReviewList = document.createElement('h4');
        h4ReviewList.textContent = titleInputValue;

        const pCategoryReviewList = document.createElement('p');
        pCategoryReviewList.textContent = `Category: ${categoryTitleValue}`;

        const pContentReviewList = document.createElement('p');
        pContentReviewList.textContent = `Content: ${textAreaValue}`;

        const btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.classList.add('action-btn');
        btnEdit.classList.add('edit');
        btnEdit.addEventListener('click', function (e) {

            titleInput.value = titleInputValue;
            categoryTitle.value = categoryTitleValue;
            textArea.value = textAreaValue;

            e.target.parentElement.remove();
        });

        const btnApprove = document.createElement('button');
        btnApprove.textContent = 'Approve';
        btnApprove.classList.add('action-btn');
        btnApprove.classList.add('approve');
        btnApprove.addEventListener('click', function (e) {

            const liPublishList = document.createElement('li');
            liPublishList.classList.add('rpost');

            const articlePublishList = document.createElement('article');

            const h4PublishList = document.createElement('h4');
            h4PublishList.textContent = `${titleInputValue}`;

            const pCategoryPublishList = document.createElement('p');
            pCategoryPublishList.textContent = `Category: ${categoryTitleValue}`;

            const pContentPublishList = document.createElement('p');
            pContentPublishList.textContent = `Content: ${textAreaValue}`;

            articlePublishList.appendChild(h4PublishList);
            articlePublishList.appendChild(pCategoryPublishList);
            articlePublishList.appendChild(pContentPublishList);

            liPublishList.appendChild(articlePublishList);

            ulPublishList.appendChild(liPublishList);

            e.target.parentElement.remove();

        });

        articleReviewList.appendChild(h4ReviewList);
        articleReviewList.appendChild(pCategoryReviewList);
        articleReviewList.appendChild(pContentReviewList);

        liReviewList.appendChild(articleReviewList);
        liReviewList.appendChild(btnEdit);
        liReviewList.appendChild(btnApprove);

        ulReviewList.appendChild(liReviewList);
    });

    btnClear = document.querySelector('#clear-btn');
    btnClear.addEventListener('click', function (e) {

        let publishedList = document.querySelector('#published-list');
        let lis = publishedList.querySelectorAll('li');
        for (let li of lis) {
            li.remove();
        }
    });
}