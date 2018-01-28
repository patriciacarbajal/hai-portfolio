var sections = document.querySelectorAll('.panel-background');
var stackedPanels = document.querySelectorAll('.panel-stacked img');

window.onscroll = function() {
    sections.forEach(function(section){            
       if ((section.offsetTop - window.scrollY) < (window.innerHeight * 0.8) ) {
        section.querySelector('.slide-section').classList.add('slide-image')
       } else {
        section.querySelector('.slide-section').classList.remove('slide-image')
       }
    }); 

    stackedPanels.forEach(function(panel) {

        if ((panel.parentElement.offsetTop - window.scrollY) < (window.innerHeight * 0.8) ) {
            if ((panel.parentElement.offsetTop + panel.offsetTop) < (window.scrollY + (window.innerHeight * 0.8))) {
                panel.classList.add('show-panel');
            }
       } else {
        stackedPanels.forEach(function(panel) {
            panel.classList.remove('show-panel');
        });
       }
    });
}