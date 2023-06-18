let breadCount = 0
const load = () => {
    if (breadCount = localStorage.getItem('breadCount') || 0) {
        updateBread()
    }
}

const feedButton = document.getElementById('feed')
feedButton.addEventListener('click', () => {
    breadCount++
    const feedAudio = new Audio("assets/Sounds/Quack.mp3")
    feedAudio.currentTime = 0.4
    feedAudio.play()
    updateBread()
})

const breadCounter = document.getElementById('bread')
const updateBread = () => {
    breadCounter.innerText = `${breadCount}`
    localStorage.setItem('breadCount', breadCount)
}

// Modal
const accountModal = document.getElementById('accountModal');
const accountBtn = document.getElementById('profile');
const closeModal = document.getElementsByClassName('close')[0];

const stats_breadGiven = document.getElementById('stats_breadGiven');
accountBtn.onclick = function () {
    accountModal.style.display = 'block';
    stats_breadGiven.innerText = breadCount;
}

closeModal.onclick = function () {
    accountModal.style.display = 'none';
};

const eraseAll = document.getElementById('eraseAll')
let eraseAllConfirmation = 0;
const eraseAllConfirmationMessages = ['', 'Are you sure you want to delete everything?', 'You are one click away from deleting everything']
eraseAll.onclick = () => {
    if(eraseAllConfirmation != 2) {
        eraseAllConfirmation++
        eraseAll.innerText = eraseAllConfirmationMessages[eraseAllConfirmation]
        return
    }
    localStorage.clear()
    window.location.reload()
}