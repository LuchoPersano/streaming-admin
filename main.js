var open = false;
var mobileNav = document.querySelector('.mobile-nav');
var openMobileNavBtn = document.querySelector('.open-mobile-nav-btn');
var closeMobileNavBtn = document.querySelector('.close-mobile-nav-btn');

function openMobileNav(){
    console.log('Entró al if');
    console.log('tremendo');
    mobileNav.style.top = '0';
    mobileNav.style.opacity = '1';
    openMobileNavBtn.style.opacity = '0';
    openMobileNavBtn.style.transform = 'rotate(180deg)';
    closeMobileNavBtn.style.opacity = '1';
    closeMobileNavBtn.style.transform = 'rotate(180deg)';
    openMobileNavBtn.style.zIndex = '90';

    open = true;
}

function closeMobileNav(){
    mobileNav.style.top = '-110vh';
    mobileNav.style.opacity = '0';
    openMobileNavBtn.style.opacity = '1';
    openMobileNavBtn.style.transform = 'rotate(0deg)';
    closeMobileNavBtn.style.opacity = '0';
    closeMobileNavBtn.style.transform = 'rotate(0deg)';
    openMobileNavBtn.style.zIndex = '200';
    open = false;
}