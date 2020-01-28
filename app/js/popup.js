const fullLinks = document.querySelectorAll('.news-article__link--fullimg');
const popup = document.querySelector('.news-popup');
const popupImg = popup.querySelector('img');
const closePopup = popup.querySelector('.close-popup__btn');
const bgFade = document.querySelector('.main-bg-fade');
const imagesSrs = 
['./img/blog-6-892x610.jpg',
 './img/blog-5-892x610.jpg',
 './img/blog-4-892x610.jpg',
 './img/blog-3-892x610.jpg',
 './img/blog-2-892x610.jpg',
 './img/blog-1-892x610.jpg'];

for (let i = 0; i < fullLinks.length; i++) {
    fullLinks[i].addEventListener('click', (evt) => {
        evt.preventDefault();
        popup.style.display = 'block';
        bgFade.style.display = 'block';
        popupImg.src = imagesSrs[i];

    })
}

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    bgFade.style.display = 'none';
});