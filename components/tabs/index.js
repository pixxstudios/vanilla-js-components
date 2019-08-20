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

        // tabs selection logic
        var panes = document.querySelectorAll('.tab-pane');
        for(var i = 0; i < panes.length; i++) {
            panes[i].classList.remove('active');
        }
        var activePane = e.target.getAttribute('data-id');
        document.querySelector(activePane).classList.add('active');
    }

    // add click event on all tabs
    for(var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', tabsClick);
    }
});