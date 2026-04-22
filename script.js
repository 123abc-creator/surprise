function checkPassword() {
  let pass = document.getElementById("password").value;

  if (pass === "19 June 2025") {
    document.getElementById("login").style.display = "none";
    document.getElementById("giftPage").classList.remove("hidden");
  } else {
    alert("Wrong password 😭");
  }
}

function openEnvelope() {
  document.getElementById("giftPage").style.display = "none";
  document.getElementById("envelopePage").classList.remove("hidden");
}

function showMessage() {
  document.getElementById("envelopePage").style.display = "none";
  document.getElementById("messagePage").classList.remove("hidden");

  document.getElementById("music").play();

  typeText();
}

function typeText() {
  let text = "To My Dearest Mental Tubelight Melulu (Shaminte Melzzzz) .... Ik we are not bf/gf anganee onnum illa but the bond we share is beyond that idk what to name this bond as but something which is really beautiful and I don't wanna label it . A random Stranger to Someone who means everything.";
  let i = 0;

  let speed = setInterval(() => {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(speed);
  }, 40);
}

function openRealLetter() {
  window.location.href = "PASTE-YOUR-LETTER-LINK";
}
