const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

const urls = {
    img1: 'https://youtu.be/gelYJQyoxzo',
    img2: 'https://youtu.be/i5vq0TANEg0',
    img3: 'https://www.youtube.com/playlist?list=PLcnN2_C3CTLvGaCdEmEkffuuLaA5dX1-H'
};

img1.addEventListener('click', () => {
    window.location.href = urls.img1;
});

img2.addEventListener('click', () => {
    window.location.href = urls.img2;
});

img3.addEventListener('click', () => {
    window.location.href = urls.img3;
});

const logo1 = document.getElementById('logo1');
const logo2 = document.getElementById('logo2');

const headerUrls = {
    logo1: 'https://www.youtube.com/channel/UCORLWlV-93pDSCo-vJ2c7jg',
    logo2: 'https://www.youtube.com/@dbzmadeiradabr303'
};

logo1.addEventListener('click', () => {
    window.location.href = headerUrls.logo1;
});

logo2.addEventListener('click', () => {
    window.location.href = headerUrls.logo2;
});
