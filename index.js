const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

box1El = document.getElementById("box1-el")
box2El = document.getElementById("box2-el")

let password1Filled = false;
let password2Filled = false;

pass=[]

function getPassword()
{
    box1El.textContent=""
    box2El.textContent=""
    generatePassword()
}

function generatePassword()
{
    for (let i =0; i < 15; i++)
    {
        j = Math.floor(Math.random()*characters.length)
        k = Math.floor(Math.random()*characters.length)
        box2El.textContent += characters[j]
        box1El.textContent += characters[k]
    }
}
