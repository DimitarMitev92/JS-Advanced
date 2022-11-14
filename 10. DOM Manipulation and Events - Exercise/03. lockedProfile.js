function lockedProfile() {
    const firstUserLock = document.querySelector('input[name="user1Locked"][value="lock"]');
    const secondUserLock = document.querySelector('input[name="user2Locked"][value="lock"]');
    const thirdUserLock = document.querySelector('input[name="user3Locked"][value="lock"]');

    const firstUserBtn = document.querySelector('div:nth-child(1) button');
    const secondUserBtn = document.querySelector('div:nth-child(2) button');
    const thirdUserBtn = document.querySelector('div:nth-child(3) button');

    const firstUserHiddenFields = document.getElementById('user1HiddenFields');
    const secondUserHiddenFields = document.getElementById('user2HiddenFields');
    const thirdUserHiddenFields = document.getElementById('user3HiddenFields');

    firstUserBtn.addEventListener('click', showFirstUserInfo);
    secondUserBtn.addEventListener('click', showSecondUserInfo);
    thirdUserBtn.addEventListener('click', showThirdtUserInfo);

    function showFirstUserInfo() {
        if (firstUserLock.checked === false && firstUserBtn.textContent === 'Show more') {
            firstUserHiddenFields.style.display = 'inline';
            firstUserBtn.textContent = 'Hide it';
        } else if (firstUserLock.checked === false && firstUserBtn.textContent === 'Hide it') {
            firstUserHiddenFields.style.display = 'none';
            firstUserBtn.textContent = 'Show more';
        }
    }

    function showSecondUserInfo() {
        if (secondUserLock.checked === false && secondUserBtn.textContent === 'Show more') {
            secondUserHiddenFields.style.display = 'inline'
            secondUserBtn.textContent = 'Hide it';
        } else if (secondUserLock.checked === false && secondUserBtn.textContent === 'Hide it') {
            secondUserHiddenFields.style.display = 'none';
            secondUserBtn.textContent = 'Show more';
        }
    }

    function showThirdtUserInfo() {
        if (thirdUserLock.checked === false && thirdUserBtn.textContent === 'Show more') {
            thirdUserHiddenFields.style.display = 'inline'
            thirdUserBtn.textContent = 'Hide it';
        } else if (thirdUserLock.checked === false && thirdUserBtn.textContent === 'Hide it') {
            thirdUserHiddenFields.style.display = 'none';
            thirdUserBtn.textContent = 'Show more';
        }
    }
}