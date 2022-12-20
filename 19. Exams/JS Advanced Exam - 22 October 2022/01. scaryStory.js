function solve() {


    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const age = document.querySelector('#age');
    const storyTitle = document.querySelector('#story-title');
    const genre = document.querySelector('#genre');

    const story = document.querySelector('#story');

    const btnPublish = document.querySelector('#form-btn');

    const previewUl = document.querySelector('#preview-list');

    const main = document.querySelector('#main');

    btnPublish.addEventListener('click', function (e) {
        e.preventDefault();


        const firstNameValue = firstName.value;
        firstName.value = '';
        const lastNameValue = lastName.value;
        lastName.value = '';
        const ageValue = age.value;
        age.value = '';
        const storyTitleValue = storyTitle.value;
        storyTitle.value = '';
        const genreValue = genre.value;
        genre.value = '';
        const storyValue = story.value;
        story.value = '';

        btnPublish.setAttribute('disabled', 'true');
        if (firstNameValue === '' || lastNameValue === '' || ageValue === '' || storyTitleValue === '' || genreValue === '' || storyValue === '') {
            return;
        }

        console.log('work');

        const li = document.createElement('li');
        li.setAttribute('class', 'story-info');

        const article = document.createElement('article');


        // childrens
        const h4Name = document.createElement('h4');
        h4Name.textContent = `Name: ${firstNameValue} ${lastNameValue}`;

        const pAge = document.createElement('p');
        pAge.textContent = `Age: ${ageValue}`;

        const pTitle = document.createElement('p');
        pTitle.textContent = `Title: ${storyTitleValue}`;

        const pGenre = document.createElement('p');
        pGenre.textContent = `Genre: ${genreValue}`;

        const pStory = document.createElement('p');
        pStory.textContent = `${storyValue}`;

        const btnSave = document.createElement('button');
        btnSave.textContent = 'Save Story';
        btnSave.setAttribute('class', 'save-btn');
        btnSave.addEventListener('click', function (e) {
            console.log('btnsave work');

            Array.from(main.children).forEach(el => el.remove());
            const h1 = document.createElement('h1');
            h1.textContent = `Your scary story is saved!`;

            main.appendChild(h1);
        });


        const btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit Story';
        btnEdit.setAttribute('class', 'edit-btn');
        btnEdit.addEventListener('click', function (e) {
            btnPublish.disabled = false;
            // btnSave.setAttribute('disabled', 'true')
            // btnEdit.setAttribute('disabled', 'true')
            // btnDelete.setAttribute('disabled', 'true')
            const children = Array.from(e.target.parentElement.children[0].children);

            const fullName = children[0].textContent.split('Name: ')[1];

            let [first, second] = fullName.split(' ');
            firstName.value = first;
            lastName.value = second;

            const ageV = children[1].textContent.split('Age: ')[1];
            age.value = ageV;

            const titleV = children[2].textContent.split('Title: ')[1];
            storyTitle.value = titleV;

            const genreV = children[3].textContent.split('Genre: ')[1];
            genre.value = genreV;

            const storyV = children[4].textContent;
            story.value = storyV;

            e.target.parentElement.remove();

        });

        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete Story';
        btnDelete.setAttribute('class', 'delete-btn');
        btnDelete.addEventListener('click', function (e) {
            console.log('btn delete work');

            btnPublish.disabled = false;

            e.target.parentElement.remove();
        });

        article.appendChild(h4Name);
        article.appendChild(pAge);
        article.appendChild(pTitle);
        article.appendChild(pGenre);
        article.appendChild(pStory);

        li.appendChild(article);
        li.appendChild(btnSave);
        li.appendChild(btnEdit);
        li.appendChild(btnDelete);

        previewUl.appendChild(li);
    });
}