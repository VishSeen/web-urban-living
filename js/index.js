const open = 'open';
const visible = 'visible';
const animIn = 'in';





function startupAnimation() {
    const topBar = document.querySelector('.top-bar');
    const heroBlock = document.querySelector('header .block-logo');
    const heroBlockText = document.querySelector('header .block-logo h1');




    setTimeout(() => {
        heroBlock.classList.add(open);
    }, 1000);

    setTimeout(() => {
        heroBlockText.classList.add(visible);
    }, 1600);

    setTimeout(() => {
        topBar.classList.add(visible);
    }, 2000);

    setTimeout(() => {
        for (let i = 1; i < 4; i++) {
            const blockOptionsItem = document.querySelector('.block-options a:nth-child(' + i + ')');
            blockOptionsItem.classList.add(animIn);
        }
    }, 2200);

    setTimeout(() => {
        for (let i = 1; i < 3; i++) {
            const subHeadBlockIntroSpan = document.querySelector('.block-subheader .block-intro h1:nth-child(' + i + ') span');
            subHeadBlockIntroSpan.classList.add(animIn);
        }
    }, 2500);
    setTimeout(() => {
        const subHeadBlockIntroP = document.querySelector('.block-subheader .block-intro p');
        subHeadBlockIntroP.classList.add(visible);
    }, 2800);

    setTimeout(() => {
        for (let i = 1; i < 3; i++) {
            const blockOptionsItems = document.querySelector('.block-options a:nth-child(' + i + ')');
            blockOptionsItems.style.transitionDelay = '0s';
            blockOptionsItems.style.transition = 'all 0.4s ease';
        }
    }, 5000);
}



window.addEventListener('load', (event) => {
    startupAnimation();
});