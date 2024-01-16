const targetEl = document.querySelector("span");

const setOnline = () => {
    targetEl.innerText = "Online 😍";
    targetEl.style.color = "#30cf59";
}

const setOffline = () => {
    targetEl.innerText = "Offline 😒";
    targetEl.style.color = "red";
}

window.addEventListener('online0', setOnline);
window.addEventListener('offline', setOffline);

window.navigator.onLine ? setOnline() : setOffline();