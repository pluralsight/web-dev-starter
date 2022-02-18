console.log("java booted up!");
changeToTheme('light');
function changeToTheme(theme){
    document.body.setAttribute("theme", theme);
    console.log('set theme to ' + theme + '!')
}

const lightButton = document.getElementById('lightButton');
lightButton.addEventListener("click", () => changeToTheme("light"));

const darkButton = document.getElementById('darkButton');
darkButton.addEventListener('click', () => changeToTheme("dark"));

const sepiaButton = document.getElementById('sepiaButton');
sepiaButton.addEventListener('click', () => changeToTheme("sepia"));

const hafsButton = document.getElementById('hafsButton');
hafsButton.addEventListener('click', () => changeToTheme("hafs"));

const fontUpper = document.getElementById('plus');
const fontDowner = document.getElementById('minus');



fontUpper.addEventListener('click', () => incrementFont(1));
fontDowner.addEventListener('click', () => incrementFont(-1));


function incrementFont(amount){
    let font = parseInt(document.getElementById('font').innerHTML);
    if (Number(amount)>0 && font<5) {
         font++
         console.log('Font Upped to ' + font + " aka " + font*0.5+1 + " rem")
    } else if (Number(amount)<0 && font>1) {
         font--
         console.log('Font Downed to ' + font + " aka " + font*0.5+1 + " rem");
     }
    setFont(font);
}

function setFont(font){
    document.getElementById("font").innerHTML = font;  
    document.body.style.setProperty("--arabicFontSize", font*0.3+1 + "rem");
    switch (font){
        case 1:
            fontDowner.classList.add('kill');
            console.log('- disappear');
            break
        case 2:
            fontDowner.classList.remove('kill');
            console.log('- appear');
            break
        case 4:
            fontUpper.classList.remove('kill');
            console.log('+ appear');
            break
        case 5:
            fontUpper.classList.add('kill');
            console.log('+ disappear');
    } 
}