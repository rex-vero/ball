const ball = document.getElementById('ball');
const area = document.getElementById('area');
const score = document.getElementById('score');
const number = document.getElementById('number');
const prosses = document.getElementById('prosses');
area.addEventListener('mousemove', (e) => {
    ball.style.top = e.pageY - 40 + 'px';
    ball.style.left = e.pageX - 40 + 'px';
});
score.addEventListener('mouseover', () => {
    prosses.style.width = 100 + '%';
    prosses.classList.add('transition')
    time = setTimeout(() => {
        number.innerText++;
    }, 5000);
});
score.addEventListener('mouseout', () => {
    prosses.classList.remove('transition')
    prosses.style.width = '';
    clearTimeout(time);
});