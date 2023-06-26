const observer = new ResizeObserver( (el, ob) => {

    const main = el[0];

    console.log(main.borderBoxSize[0].blockSize);

    document.querySelector('#wys').innerText = window.getComputedStyle(main.target).height;
    document.querySelector('#szer').innerText = window.getComputedStyle(main.target).width;

});

const main = document.querySelector('.main');
observer.observe(main);