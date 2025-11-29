var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openPortfolioTab(tabname) {
    var portfolioTabLinks = document.querySelectorAll('.portfolio-tab-link');
    var portfolioTabContents = document.querySelectorAll('.portfolio-tab-content');
    
    for (var i = 0; i < portfolioTabLinks.length; i++) {
        portfolioTabLinks[i].classList.remove('active-portfolio-tab');
    }
    
    for (var i = 0; i < portfolioTabContents.length; i++) {
        portfolioTabContents[i].classList.remove('active-portfolio-tab');
    }
    
    event.currentTarget.classList.add('active-portfolio-tab');
    document.getElementById(tabname).classList.add('active-portfolio-tab');
}

function openMobileMenu() {
    document.getElementById('mobileMenu').classList.add('active');
}

function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');
    if (video) {
        video.addEventListener('loadedmetadata', function() {
            this.style.minHeight = '0';
        });
    }
});

document.addEventListener('click', function(event) {
    var mobileMenu = document.getElementById('mobileMenu');
    var menuToggle = document.querySelector('.menu-toggle');
    
    if (mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(event.target) && 
        !menuToggle.contains(event.target)) {
        closeMobileMenu();
    }
});