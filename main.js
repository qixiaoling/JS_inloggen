
const usernameInput = document.getElementById("input-username");
const passwordInput = document.getElementById("input-password");

usernameInput.addEventListener("keyup", checkUsername);
passwordInput.addEventListener("keyup", checkPassword);

const usernameWarning = document.getElementById("user-warming");
const passwordWarning = document.getElementById("password-warming");


function checkUsername (e){
    if(e.target.value.includes("@")){
        usernameWarning.textContent = "Gebruikersnaam mag geen @ bevatten";
    }else{
        usernameWarning.textContent = "";
    }
}

function checkPassword(e){
    if(e.target.value.length >6 || e.target.value === ""){
        passwordWarning.textContent = "";
    }else{
        passwordWarning.textContent = "Wachtwoord is te kort, gebruik minimaal 6 tekens";
    }
}

