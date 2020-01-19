const menuBtns = document.querySelectorAll('#level-1');
menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener('click', (evt) => {
        evt.preventDefault;
        if(!(menuBtn.classList.contains('accordion-active'))) {
            menuBtns.forEach((menuBtn) => {
                menuBtn.classList.remove('accordion-active');
            })
            menuBtn.classList.add('accordion-active');
        }  else {
            menuBtn.classList.remove('accordion-active');
        }
    })
})

const submenuBtns = document.querySelectorAll('#level-2');
submenuBtns.forEach((submenuBtn) => {
    submenuBtn.addEventListener('click', (evt) => {
        evt.preventDefault;
        if(!(submenuBtn.classList.contains('accordion-active'))) {
            submenuBtns.forEach((submenuBtn) => {
                submenuBtn.classList.remove('accordion-active');
            })   
            submenuBtn.classList.add('accordion-active');
        }   else {
            submenuBtn.classList.remove('accordion-active');
        }
    })
})
