const buttonScreamer = document.querySelector("#buttonStartScreamer");

function showScreamer() {
    const screamerPicture = document.querySelector("#screamer");
    screamerPicture.classList.add("open");

    const audioPlayer = new Audio();
    audioPlayer.src = "../audio/screamer_sound.mp3";
    audioPlayer.volume = 0.2;
    audioPlayer.play();
}

buttonScreamer.addEventListener("click", showScreamer);

// const userInfo = {
//     name: "Misha",
//     age: 15,
//     address: {
//         country: "USA",
//         city: "Cary",
//     },
//     sayHi: function() {
//         console.log(`My name is ${this.name}`);
//     }
// }

// userInfo.sayHi();

