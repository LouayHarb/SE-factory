document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
         
            tabs.forEach(t => t.classList.remove('active'));


            this.classList.add('active');


            const tabName = this.getAttribute('data-tab');


            updateContent(tabName);
        });
    });

    // Default tab is FSW
    updateContent('fsw');

    function updateContent(tabName) {
        
        contents.forEach(content => {
            content.style.display = 'none'; 
            if (content.getAttribute('data-tab') === tabName) {
                content.style.display = 'block';
            }
        });
    }
});

const texts = ["Text 1", "Text 2", "Text 3", "Text 4"];
const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

let currentIndex = 0;
const textElement = document.getElementById('text');
const imgElement = document.querySelector('#img-container img');
const points = document.querySelectorAll('.point');

function updateContent() {
    textElement.textContent = texts[currentIndex];
    imgElement.src = images[currentIndex];
    points.forEach((point, index) => {
        point.classList.toggle('active', index === currentIndex);
    });

    currentIndex = (currentIndex + 1) % texts.length;
}

let intervalId; // Declare a variable to store the interval ID

function changeContentAfterDelay() {
    
    clearInterval(intervalId);

    intervalId = setInterval(updateContent, 2000);
}

updateContent();

setTimeout(changeContentAfterDelay, 2000);

