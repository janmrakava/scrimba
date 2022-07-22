

const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
    "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",
    ">",".","?","/"
                ];





function initial(){
    let password1El = document.getElementById('first-pass')
    let password2El = document.getElementById('second-pass')
    let password1 = generatePasswords();
    let password2 = generatePasswords();  
    password1El.textContent = password1
    password2El.textContent = password2
}


function generatePasswords(){
    let userInputEl = document.getElementById('passwordLength-el').value
    let password = ''
    let randomNumber;
    for (let i = 0; i < userInputEl; i++){
        randomNumber = Math.floor(Math.random()*91)
        password += characters[randomNumber]    
    }
    return password
}





