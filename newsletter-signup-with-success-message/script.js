const main = document.querySelector("main");
const form = document.querySelector("form");
const errorLabel = document.getElementsByClassName("error-label")[0];
const successCard = document.getElementById("success-card");
const dismissButton = successCard.querySelector("button");

function validateEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return emailRegex.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailAddress = form[0].value;
  if (emailAddress !== "" && validateEmail(emailAddress)) {
    errorLabel.style.display = "none";
    form[0].value = "";
    main.style.display = "none";
    successCard.style.display = "flex";
    successCard.children[2].innerHTML = `A confirmation email has been sent to <span>${emailAddress}</span>. Please open it and click the button inside to confim your subscription.`;
  } else {
    form[0].style.border = "1px solid hsla(4, 100%, 67%, 0.159)";
    form[0].style.backgroundColor = "hsla(4, 100%, 67%, 0.159)";
    form[0].style.color = "hsl(4, 100%, 67%)";
    errorLabel.style.display = "inline";
  }
});

dismissButton.addEventListener("click", () => {
  window.location.reload();
});
