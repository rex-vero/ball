const ball = document.getElementById('ball');
const area = document.getElementById('area');
const score = document.getElementById('score');
const number = document.getElementById('number');
area.addEventListener('mousemove', (e) => {
    ball.style.top = e.pageY - 40 + 'px';
    ball.style.left = e.pageX - 40 + 'px';
});
score.addEventListener('mouseover', () => {
    setTimeout(() => {
        console.log('drfgbrh');
        number.innerText++;
    }, 5000);

});
score.addEventListener('mouseout', () => {
    clearTimeout(score);
});
