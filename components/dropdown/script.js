function dropdown() {
    document.getElementById('dropdown').classList.toggle('dropdown');
}

function onSearch() {
    const input = document.getElementById('search');
    const val = input.value;
    console.log(val);
}