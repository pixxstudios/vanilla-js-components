window.addEventListener('load', function() {
    // get all li items
    var tabs = document.querySelectorAll('ul.nav-tabs > li');
    console.log(tabs);

    for(var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', tabsClick);
    }
});