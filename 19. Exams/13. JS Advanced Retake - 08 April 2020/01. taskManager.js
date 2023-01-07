function solve() {

    const task = document.querySelector('#task');
    const description = document.querySelector('#description');
    const date = document.querySelector('#date');

    const btnAdd = document.querySelector('#add');

    const openDiv = document.querySelector('.wrapper > section:nth-child(2) > div:nth-child(2)');

    const inProgresDiv = document.querySelector('#in-progress');

    const completeDiv = document.querySelector('.wrapper > section:nth-child(4) > div:nth-child(2)');

    btnAdd.addEventListener('click', function (e) {
        e.preventDefault();

        const taskValue = task.value;

        const descriptionValue = description.value;

        const dateValue = date.value;

        if (!taskValue || !descriptionValue || !dateValue) {
            return;
        }
        console.log('work');

        const articleOpen = document.createElement('article');

        const h3Task = document.createElement('h3');
        h3Task.textContent = `${taskValue}`;

        const pDescription = document.createElement('p');
        pDescription.textContent = `Description: ${descriptionValue}`;

        const pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${dateValue}`;

        const divBtns = document.createElement('div');
        divBtns.setAttribute('class', 'flex');

        const btnStart = document.createElement('button');
        btnStart.textContent = 'Start';
        btnStart.setAttribute('class', 'green');
        btnStart.addEventListener('click', function (e) {

            let currentArticleChildren = e.target.parentElement.parentElement.children;

            const textTask = currentArticleChildren[0].textContent;
            const textDescription = currentArticleChildren[1].textContent;
            const textDate = currentArticleChildren[2].textContent;

            const articleProgress = document.createElement('article');

            const h3ProgressTask = document.createElement('h3');
            h3ProgressTask.textContent = textTask;

            const pProgressDescription = document.createElement('p');
            pProgressDescription.textContent = textDescription;

            const pProgressDate = document.createElement('p');
            pProgressDate.textContent = textDate;

            const divProgressBtns = document.createElement('div');
            divProgressBtns.setAttribute('class', 'flex');

            const btnProgressDelete = document.createElement('button');
            btnProgressDelete.textContent = 'Delete';
            btnProgressDelete.setAttribute('class', 'red');
            btnProgressDelete.addEventListener('click', function (e) {
                e.target.parentElement.parentElement.remove();
            });

            const btnProgressFinish = document.createElement('button');
            btnProgressFinish.textContent = 'Finish';
            btnProgressFinish.setAttribute('class', 'orange');
            btnProgressFinish.addEventListener('click', function (e) {

                let currentArticleChildren = e.target.parentElement.parentElement.children;

                const textTask = currentArticleChildren[0].textContent;
                const textDescription = currentArticleChildren[1].textContent;
                const textDate = currentArticleChildren[2].textContent;

                console.log(textTask);
                console.log(textDescription);
                console.log(textDate);

                const articleComplete = document.createElement('article');

                const h3CompleteTask = document.createElement('h3');
                h3CompleteTask.textContent = textTask;

                const pCompleteDescription = document.createElement('p');
                pCompleteDescription.textContent = textDescription;

                const pCompleteDate = document.createElement('p');
                pCompleteDate.textContent = textDate;

                articleComplete.appendChild(h3CompleteTask);
                articleComplete.appendChild(pCompleteDescription);
                articleComplete.appendChild(pCompleteDate);

                completeDiv.appendChild(articleComplete);

                e.target.parentElement.parentElement.remove();
            });

            divProgressBtns.appendChild(btnProgressDelete);
            divProgressBtns.appendChild(btnProgressFinish);

            articleProgress.appendChild(h3ProgressTask);
            articleProgress.appendChild(pProgressDescription);
            articleProgress.appendChild(pProgressDate);
            articleProgress.appendChild(divProgressBtns);

            inProgresDiv.appendChild(articleProgress);

            e.target.parentElement.parentElement.remove();

        });

        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        btnDelete.setAttribute('class', 'red');
        btnDelete.addEventListener('click', function (e) {
            e.target.parentElement.parentElement.remove();
        });

        divBtns.appendChild(btnStart);
        divBtns.appendChild(btnDelete);

        articleOpen.appendChild(h3Task);
        articleOpen.appendChild(pDescription);
        articleOpen.appendChild(pDate);
        articleOpen.appendChild(divBtns);

        openDiv.appendChild(articleOpen);

    });

}