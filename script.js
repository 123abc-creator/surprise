function checkPassword() {
  let pass = document.getElementById("password").value;

  if (pass === "123") {
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
  let text = "One year with you... and I still can't believe how lucky I am to have you 💖";
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
