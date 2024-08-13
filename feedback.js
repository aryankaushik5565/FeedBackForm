

const starElements = document.getElementsByClassName('size-6');

const star1 = document.getElementById('btn1');
const star2 = document.getElementById('btn2');
const star3 = document.getElementById('btn3');
const star4 = document.getElementById('btn4');
const star5 = document.getElementById('btn5');
const thumb = document.getElementById('thumbsup');
const popover = document.getElementById('review-mark');
const submit = document.getElementById('submit-btn');
const popoverContainer = document.getElementById('popover-container');
const ok = document.getElementById('ok');
const feedbackContainer = document.getElementById('feedback-container');

function toggleStars(index) {
    let fillYellow = starElements[index].style.fill !== 'yellow';
    reviewpoint(index);

    for (let i = 0; i < starElements.length; i++) {
        if (i <= index && fillYellow) {
            starElements[i].style.fill = 'yellow';
        } else {
            starElements[i].style.fill = 'white';
        }
    }
}

star1.addEventListener('click', () => toggleStars(0));
star2.addEventListener('click', () => toggleStars(1));
star3.addEventListener('click', () => toggleStars(2));
star4.addEventListener('click', () => toggleStars(3));
star5.addEventListener('click', () => toggleStars(4));

function reviewpoint(count) {
    const messages = ["We will improve", "We are improving", "Good", "Excellent", "Awesome"];
    popover.innerHTML = messages[count];
}

submit.addEventListener('click', () => {
    feedbackContainer.style.display = 'none';
    popoverContainer.style.display = 'flex';
})


ok.addEventListener('click',()=>{
    feedbackContainer.style.display = 'flex';
    popoverContainer.style.display = 'none';
})
