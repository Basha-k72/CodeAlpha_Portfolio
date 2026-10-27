// Typing effect
const roles = [
    'Full Stack Developer',
    'Frontend Developer',
    'Software Developer',
    'B.Tech ECE Student',
    'Problem Solver'
];
  
let roleIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typed');

function typeLoop() {
    const word = roles[roleIdx];
    typedEl.textContent = word.substring(0, charIdx);

    if (!deleting && charIdx < word.length) {
        charIdx++;
    } else if (deleting && charIdx > 0) {
        charIdx--;
    } else {
        if (!deleting) {
            deleting = true;
            setTimeout(typeLoop, 1500);
            return;
        }
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
    }
    setTimeout(typeLoop, deleting ? 60 : 120);
}
typeLoop();
  
// Scroll reveal
const reveals = document.querySelectorAll('.section');
reveals.forEach(s => s.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));