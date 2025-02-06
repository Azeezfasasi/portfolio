document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animated-text');
    const text = 'Frontend Web Developer';
    let index = 0;
    let deleting = false;
    
    function type() {
        if (!deleting && index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else if (deleting && index > 0) {
            textElement.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(type, 100);
        } else if (!deleting && index === text.length) {
            setTimeout(() => deleting = true, 1000); // Pause before deleting
            setTimeout(type, 1000);
        } else if (deleting && index === 0) {
            deleting = false;
            setTimeout(type, 500); // Pause before typing again
        }
    }
    
    type();
    });