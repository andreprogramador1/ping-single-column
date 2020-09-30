const input = document.querySelector(".input");
const erroText = document.querySelector(".error-text");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(input.value)) {
    input.classList.add("error");
    erroText.style.setProperty("display", "block");
  } else {
    input.classList.remove("error");
    erroText.style.setProperty("display", "none");
  }
});
