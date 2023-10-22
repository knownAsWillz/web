document.addEventListener("DOMContentLoaded", function() {
    const aboutMeLink = document.querySelector("#more");
    const aboutMeSection = document.querySelector(".about");
    const aboutText = document.querySelector("#aboutText");

    const fullText = "I'm a passionate programmer deeply drawn to backend development. My path in software engineering is marked by a relentless pursuit of knowledge and a profound love for coding. Crafting elegant solutions to complex problems, driven by my fascination with technology and a strong affinity for mathematics, brings me immense satisfaction. Challenges like optimizing algorithms, refining databases, and architecting scalable systems ignite my passion.";

    let isAboutMeVisible = false;
    let isTypingAnimationRunning = false;

    aboutMeLink.addEventListener("click", function(event) {
        event.preventDefault();

        if (!isAboutMeVisible) {
            aboutMeSection.style.display = "block";
            if (!isTypingAnimationRunning) {
                aboutText.innerHTML = "";
                typeText(aboutText, fullText);
                isTypingAnimationRunning = true;
            }
            isAboutMeVisible = true;

            // Scroll to the About Me section
            aboutMeSection.scrollIntoView({ behavior: "smooth" });
        } else {
            aboutMeSection.style.display = "none";
            stopTypingAnimation();
            isAboutMeVisible = false;
        }
    });

    function typeText(element, text) {
        const delay = 15;
        let index = 0;

        function addCharacter() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(addCharacter, delay);
            } else {
                isTypingAnimationRunning = false;
            }
        }

        addCharacter();
    }

    function stopTypingAnimation() {
        isTypingAnimationRunning = false;
        aboutText.innerHTML = "";
    }
});
