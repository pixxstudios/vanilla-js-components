window.addEventListener('load', function() {
    // get all li items
    var tabs = document.querySelectorAll('ul.nav-tabs > li');

    // tabs click handler
    function tabsClick(e) {
        // remove active class from all the tabs
        for(var i=0; i<tabs.length; i++) {
            tabs[i].classList.remove('active');
        }
        e.currentTarget.classList.add('active');
        e.preventDefault();
    }

    // add click event on all tabs
    for(var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', tabsClick);
    }
});