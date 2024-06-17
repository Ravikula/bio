document.addEventListener('DOMContentLoaded', (event) => {
    const texts = ["#gradstudent", "#developer","#videoEditor", "#f1enthusiast"];
    let currentIndex = 0;

    const textChanger = document.getElementById('text-changer');

    setInterval(() => {
        textChanger.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }, 2000);
});