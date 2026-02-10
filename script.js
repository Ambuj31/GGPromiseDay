const text = "Today is not about gifts… It’s about what stays.";
const element = document.getElementById("typewriter");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 60);
  } else {
    revealPromises();
  }
}

function revealPromises() {
  const promises = document.querySelectorAll(".promise");

  promises.forEach((promise, i) => {
    setTimeout(() => {
      promise.classList.add("show");
    }, i * 500);
  });

  setTimeout(() => {
    document.getElementById("heart").classList.add("show");
  }, promises.length * 500 + 500);
}

typeWriter();
