const reasons = [
  "fiza aap na mere liye bht khaas ho so eek shayari aapke liye 😊",
  "Fiza tumhe sochna aadat nahi thi meri par ab har khayal tumse shuru hota hai😍",
  "ik ki somedays are just too much for you par thats okay thats life 💖",
  " i meow yoou my cutieeee 😍😋"
];

let reasonIndex = 0;

// Typing effect
const text = "mene aapke liye kuch chota sa banaya hai😊";
let typingIndex = 0;

function typeEffect() {
  if (typingIndex < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// 🦋 Butterfly function
function createButterfly() {
  const butterfly = document.createElement("div");
  butterfly.classList.add("butterfly");
  butterfly.innerText = "🦋";

  butterfly.style.left = Math.random() * 100 + "vw";
  butterfly.style.fontSize = Math.random() * 20 + 20 + "px";

  document.body.appendChild(butterfly);

  setTimeout(() => {
    butterfly.remove();
  }, 6000);
}

// Main function
function showReason() {
  if (reasonIndex < reasons.length) {
    document.getElementById("reason").innerText = reasons[reasonIndex];
    reasonIndex++;

    // 🦋 butterflies on each click
    for (let i = 0; i < 5; i++) {
      createButterfly();
    }

  } else {
    document.getElementById("final").innerText =
      "Fiza… tumhari aadat si ho rahi hai, aur mujhe yeh bilkul bura nahi lag raha ❤️";

    // 💥 extra butterflies on final
    for (let i = 0; i < 15; i++) {
      createButterfly();
    }
  }
}