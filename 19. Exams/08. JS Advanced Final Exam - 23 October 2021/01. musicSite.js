function solve() {

    const genreInput = document.querySelector('#genre');
    const nameSongInput = document.querySelector('#name');
    const authorInput = document.querySelector('#author');
    const dateInput = document.querySelector('#date');

    const btnAdd = document.querySelector('#add-btn');

    const divCollectionOfSongs = document.querySelector('.all-hits-container');

    const divSavedSongs = document.querySelector('.saved-container');

    const pLike = document.querySelector('.likes > p:nth-child(1)');

    btnAdd.addEventListener('click', function (e) {
        e.preventDefault();

        const genre = genreInput.value;
        genreInput.value = '';
        const nameSong = nameSongInput.value;
        nameSongInput.value = '';
        const author = authorInput.value;
        authorInput.value = '';
        const date = dateInput.value;
        dateInput.value = '';

        if (!genre || !nameSong || !author || !date) {
            return;
        }

        const divSong = document.createElement('div');
        divSong.classList.add('hits-info');

        const imgSong = document.createElement('img');
        imgSong.src = './static/img/img.png';

        const h2SongGenre = document.createElement('h2');
        h2SongGenre.textContent = `Genre: ${genre}`;

        const h2SongName = document.createElement('h2');
        h2SongName.textContent = `Name: ${nameSong}`;

        const h2SongAuthor = document.createElement('h2');
        h2SongAuthor.textContent = `Author: ${author}`;

        const h3SongDate = document.createElement('h3');
        h3SongDate.textContent = `Date: ${date}`;

        const btnSaveSong = document.createElement('button');
        btnSaveSong.classList.add('save-btn');
        btnSaveSong.textContent = 'Save song';
        btnSaveSong.addEventListener('click', function (e) {
            e.preventDefault();

            const divSave = document.createElement('div');
            divSave.classList.add('hits-info');

            const imgSave = document.createElement('img');
            imgSave.src = './static/img/img.png';

            const h2SaveGenre = document.createElement('h2');
            h2SaveGenre.textContent = `Genre: ${genre}`;

            const h2SaveName = document.createElement('h2');
            h2SaveName.textContent = `Name: ${nameSong}`;

            const h2SaveAuthor = document.createElement('h2');
            h2SaveAuthor.textContent = `Author: ${author}`;

            const h3SaveDate = document.createElement('h3');
            h3SaveDate.textContent = `Date: ${date}`;

            const btnSaveDelete = document.createElement('button');;
            btnSaveDelete.textContent = 'Delete';
            btnSaveDelete.classList.add('delete-btn');
            btnSaveDelete.addEventListener('click', function (e) {
                e.preventDefault();
                e.target.parentElement.remove();
            });

            divSave.appendChild(imgSave);
            divSave.appendChild(h2SaveGenre);
            divSave.appendChild(h2SaveName);
            divSave.appendChild(h2SaveAuthor);
            divSave.appendChild(h3SaveDate);
            divSave.appendChild(btnSaveDelete);

            divSavedSongs.appendChild(divSave);

            e.target.parentElement.remove();

        });

        const btnLikeSong = document.createElement('button');
        btnLikeSong.classList.add('like-btn');
        btnLikeSong.textContent = 'Like song';
        btnLikeSong.addEventListener('click', function (e) {
            e.preventDefault();
            const newLikes = Number(pLike.textContent.split('Total Likes: ')[1]) + 1;
            pLike.textContent = `Total Likes: ${newLikes}`;
            e.target.disabled = true;
        });

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('delete-btn');
        btnDelete.textContent = 'Delete';
        btnDelete.addEventListener('click', function (e) {
            e.preventDefault();
            e.target.parentElement.remove();
        });

        divSong.appendChild(imgSong);
        divSong.appendChild(h2SongGenre);
        divSong.appendChild(h2SongName);
        divSong.appendChild(h2SongAuthor);
        divSong.appendChild(h3SongDate);
        divSong.appendChild(btnSaveSong);
        divSong.appendChild(btnLikeSong);
        divSong.appendChild(btnDelete);

        divCollectionOfSongs.appendChild(divSong);

    });
}