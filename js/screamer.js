const buttonScreamer = document.querySelector("#buttonStartScreamer");

function showScreamer() {
    const screamerPicture = document.querySelector("#screamer");
    screamerPicture.classList.add("open");
}

buttonScreamer.addEventListener("click", showScreamer);

