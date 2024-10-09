const generateButton = document.getElementById("generate-button");
const inputText = document.getElementById("input-text");
const copyIcon = document.querySelector(".far.fa-copy");
const alertMessage= document.querySelector(".alert-message");

generateButton.addEventListener("click", () => {
getPassword();
});

copyIcon.addEventListener("click", () => {
  copyNow();
  if(inputText.value){
  alertMessage.classList.remove("active");
  setTimeout(() => {
    alertMessage.classList.add("active");
  }, 2500);
}
});

function getPassword() {
const characters = 
"abcdefghi1234567890ABCDEFGHIJK!@#$%&^=+*";
const maxLength = 12;
let password = "";
for (let index = 0; index < maxLength; index++) {
const randomNum = Math.floor(Math.random() * characters.length);
password += characters.substring(randomNum, randomNum + 1);
//console.log(password);
}
inputText.value= password;
alertMessage.innerText = "Copied: " + password;
}

function copyNow() {
  inputText.select();
  inputText.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputText.value);
}