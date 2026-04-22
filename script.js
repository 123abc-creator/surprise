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
  window.location.href = "https://openwhenletters.app/c/539186e7-54f0-4e53-9f99-63d85b889162/edit/82cf62435fab68c0d1124c0d53ac4900377be250307488d2dd7d961a25209723K";
}
