function previousDay(year, month, day) {
    const previousDay = new Date(year, month - 1, day - 1);
    const previosYears = previousDay.getFullYear();
    const previosMonth = previousDay.getMonth();
    const previosDay = previousDay.getDate();
    console.log(`${previosYears}-${previosMonth + 1}-${previosDay}`);
}