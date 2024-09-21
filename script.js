document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.dropdown').classList.toggle('show');
});

// Stars animation
const starContainer = document.querySelector('.star-container');
for (let i = 0; i < 100; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 10 + 5}s`;
    starContainer.appendChild(star);
}

