function solve() {

    const firstNameInput = document.querySelector('#fname');
    const lastNameInput = document.querySelector('#lname');
    const emailInput = document.querySelector('#email');
    const dateBirthInput = document.querySelector('#birth');
    const positionInput = document.querySelector('#position');
    const salaryInput = document.querySelector('#salary');

    const btnHire = document.querySelector('#add-worker');

    const tBody = document.querySelector('#tbody');

    const sum = document.querySelector('#sum');

    btnHire.addEventListener('click', function (e) {
        e.preventDefault();

        const firtNameText = firstNameInput.value;
        firstNameInput.value = '';
        const lastNameText = lastNameInput.value;
        lastNameInput.value = '';
        const emailText = emailInput.value;
        emailInput.value = '';
        const dateText = dateBirthInput.value;
        dateBirthInput.value = '';
        const positionText = positionInput.value;
        positionInput.value = '';
        const salaryText = salaryInput.value;
        salaryInput.value = '';

        if (!firtNameText || !lastNameText || !emailText || !dateText || !positionText || !salaryText) {
            return;
        }

        const tr = document.createElement('tr');
        const tdFirstName = document.createElement('td');
        tdFirstName.textContent = `${firtNameText}`;

        const tdLastName = document.createElement('td');
        tdLastName.textContent = `${lastNameText}`;

        const tdEmail = document.createElement('td');
        tdEmail.textContent = `${emailText}`;

        const tdDate = document.createElement('td');
        tdDate.textContent = `${dateText}`;

        const tdPosition = document.createElement('td');
        tdPosition.textContent = `${positionText}`;

        const tdSalary = document.createElement('td');
        tdSalary.textContent = `${salaryText}`;

        const tdBtns = document.createElement('td');

        const btnFired = document.createElement('button');
        btnFired.textContent = 'Fired';
        btnFired.setAttribute('class', 'fired');
        btnFired.addEventListener('click', function (e) {

            sum.textContent = (Number(sum.textContent) - Number(salaryText)).toFixed(2);

            e.target.parentElement.parentElement.remove();

        });

        const btnEdit = document.createElement('buttton');
        btnEdit.textContent = 'Edit';
        btnEdit.setAttribute('class', 'edit');
        btnEdit.addEventListener('click', function (e) {

            firstNameInput.value = firtNameText;
            lastNameInput.value = lastNameText;
            emailInput.value = emailText;
            dateBirthInput.value = dateText;
            positionInput.value = positionText;
            salaryInput.value = salaryText;

            sum.textContent = (Number(sum.textContent) - Number(salaryText)).toFixed(2);


            e.target.parentElement.parentElement.remove();

        });

        tdBtns.appendChild(btnFired);
        tdBtns.appendChild(btnEdit);

        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdDate);
        tr.appendChild(tdPosition);
        tr.appendChild(tdSalary);
        tr.appendChild(tdBtns);

        tBody.appendChild(tr);

        sum.textContent = (Number(sum.textContent) + Number(salaryText)).toFixed(2);
    });
}