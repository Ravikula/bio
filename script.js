document.addEventListener('DOMContentLoaded', (event) => {
    const texts = ["#gradstudent", "#developer","#videoEditor", "#f1enthusiast"];
    let currentIndex = 0;

    const textChanger = document.getElementById('text-changer');

    setInterval(() => {
        textChanger.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }, 2000);
});

//typing effect
document.addEventListener("DOMContentLoaded", function() {
    const text = "Ravikula";
    let index = 0;
  
    function type() {
      if (index < text.length) {
        document.getElementById("typing-effect").textContent += text.charAt(index);
        index++;
        setTimeout(type, 150); // Adjust speed by changing the timeout duration
      }
    }
  
    type();
  });
