function dropdown() {
    document.getElementById('dropdown').classList.toggle('dropdown');
}

function onSearch() {
    const input = document.getElementById('search');
    const val = input.value.toLowerCase();

    const dd = document.getElementById('dropdown');
    const list = dd.getElementsByTagName('li');

    for(i=0; i<list.length; i++) {
        const text = list[i].textValue || list[i].innerText;
        if(text.toLowerCase().indexOf(val) > -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    } 
}