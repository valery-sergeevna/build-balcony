const images = () => {
    const imgPopup = document.createElement('div'),
        works = document.querySelector('.works'),
        bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    works.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = "none";
    imgPopup.appendChild(bigImage);

    works.addEventListener('click', e => {
        e.preventDefault();
        const target = e.target;
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = "flex";
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute("src", path);
            bigImage.style.width = "60%";
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    });

};
export default images;