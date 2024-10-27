let mainForm = document.getElementById('birthdayForm');

mainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const date = new Date(year, month - 1, day);

    const out = `
        <p>Вы родились в ${getDayOfWeek(date)}.</p><br>
        <p>${year} год ${getLeepYear(date) ? 'является' : 'не является'} високосным.</p><br>
        <p>Вам ${CalculateAge(date)} лет.</p><br>
        <p>Дата вашего рождения:</p><br>
        <div class="date">${formatDateAsDigits(date)}</div>
    `;
    document.getElementById('output').innerHTML = out;
});

function getDayOfWeek(date) {
    const day = date.getDay();
    const weekdays =  ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return weekdays[day];
}

function getLeepYear(date) {
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function CalculateAge(date) {
    const now = new Date();
    const age = now.getFullYear() - date.getFullYear();
    const month = now.getMonth() - date.getMonth();
    if (month < 0 || (month === 0 && now.getDate() < date.getDate())) {
        age--;
    }
    return age;
}

function formatDate(date) {
    let day = date.getDate().toString().padStart(2, '*');
    let month = (date.getMonth() + 1).toString().padStart(2, '*');
    let year = date.getFullYear().toString().padStart(4, '*');

    return `${day}/${month}/${year}`;
}

function formatDateAsDigits(date) {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const digits = `${padZero(day)} ${padZero(month)} ${year}`;
    return `<div class="digits">${digits.split('').map(digit => `<span class="digit">${digit}</span>`).join('')}</div>`;
}

function padZero(num) {
    return num < 10 ? '0' + num : num;
}