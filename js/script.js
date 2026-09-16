function opentab(tabname, btn) {
    document.querySelectorAll('.tab-links').forEach(function (el) { el.classList.remove('active-link'); });
    document.querySelectorAll('.tab-contents').forEach(function (el) { el.classList.remove('active-tab'); });
    btn.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

function openMobileMenu() {
    document.getElementById('mobileMenu').classList.add('active');
}
function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
}

document.addEventListener('click', function (event) {
    var mobileMenu = document.getElementById('mobileMenu');
    var toggles = document.querySelectorAll('.menu-toggle');
    var onToggle = false;
    toggles.forEach(function (t) { if (t.contains(event.target)) onToggle = true; });
    if (mobileMenu.classList.contains('active') && !mobileMenu.contains(event.target) && !onToggle) {
        closeMobileMenu();
    }
});

window.addEventListener('scroll', function () {
    var sticky = document.getElementById('stickyNav');
    if (window.scrollY > window.innerHeight * 0.85) {
        sticky.classList.add('show');
    } else {
        sticky.classList.remove('show');
    }
});