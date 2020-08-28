
const tabs = () => {
    const createTabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
        const header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);

        function hideTabContent() {
            content.forEach(item => {
                item.style.display = 'none';
            });

            tab.forEach(item => {
                item.classList.remove(activeClass);
            });
        }

        function showTabContent(i = 0) {
            content[i].style.display = display;
            tab[i].classList.add(activeClass);
        }

        hideTabContent();
        showTabContent();

        header.addEventListener('click', (e) => {
            const target = e.target;
            if (target &&
                (target.classList.contains(tabSelector.replace(/\./, "")) ||
                    target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    };
    createTabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    createTabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    createTabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
};

export default tabs;

