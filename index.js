const generateButton = document.querySelector(".generate-button");

generateButton.addEventListener("click", () => {
getPassword();
})

let getPassword = () => {
const characters = 
"abcdefghi1234567890ABCDEFGHIJK!@#$%&*";
const maxLength = 12;
let password = "";
for (let index = 0; index < maxLength; index++) {
const randomNum = 
Math.floor(Math.random() * characters.length);
password += characters.substring(randomNum, randomNum + 1);
}
}