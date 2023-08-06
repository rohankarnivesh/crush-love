const showPopupBtn = document.getElementById('showPopupBtn');
const popupContainer = document.getElementById('popupContainer');
const loadingBar = document.getElementById('loadingBar');
const loadingText = document.getElementById('loadingText');
const msgs = document.getElementById('msgs');

const messages = [
  "Initializing my magic...",
  "Preparing your crush to fall for you...",
  "Remembering my crush in between hehehe...",
  "your crush too...",
  "Sorry sorry my mistake...",
  "Almost there...",
  "ohhhh shit someone is already there ...",
  "Some message for you ..."
];

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}


showPopupBtn.addEventListener('click', () => {
  popupContainer.style.display = 'block';
  simulateLoading();
});

function simulateLoading() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 1;
    loadingBar.style.width = `${progress}%`;
    loadingText.innerText = `Loading ${progress}%`;

    const messageIndex = Math.floor(progress / 13); 
    msgs.innerText = messages[messageIndex];

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        window.location.href = 'jldihato.html'; // Replace 'new-page.html' with the URL of the new page you want to open.
      }, 500); // Delay to show 100% completed loading before redirecting
    }
  }, 200); // Adjust the interval time as needed
}
