const open = 'open';
const visible = 'visible';
const slideLeftIn = 'in';





function startupAnimation() {
    const topBar = document.querySelector('.top-bar');
    const heroBlock = document.querySelector('header .block-logo');
    const heroBlockText = document.querySelector('header .block-logo h1');

    const blockOptionsItems = document.querySelector('.block-options a');


    setTimeout(() => {
        heroBlock.classList.add(open);
    }, 400);

    setTimeout(() => {
        heroBlockText.classList.add(visible);
    }, 1600);

    setTimeout(() => {
        topBar.classList.add(visible);
    }, 2000);

    setTimeout(() => {
        for (let i = 1; i < 4; i++) {
            const blockOptionsItem = document.querySelector('.block-options a:nth-child(' + i + ')');
            blockOptionsItem.classList.add(slideLeftIn);
        }
    }, 2200);

    setTimeout(() => {
        blockOptionsItems.style.transitionDelay = '0';
        blockOptionsItems.style.transition = 'all 0.4s ease';
    }, 7000);
}



window.addEventListener('load', (event) => {
    startupAnimation();
});