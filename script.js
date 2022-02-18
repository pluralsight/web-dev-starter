console.log("booted up!");

const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

if(userPrefersDark){
    console.log("User prefers a dark interface");
    changeToTheme("dark")
}

if(userPrefersLight){
    console.log("User prefers a light interface");
    changeToTheme("light")
}


function changeToTheme(theme){
    document.body.setAttribute("theme", theme);
    console.log('changed theme to ' + theme + '!')
}

const lightButton = document.getElementById('lightButton');
lightButton.addEventListener("click", () => changeToTheme("light"));

const darkButton = document.getElementById('darkButton');
darkButton.addEventListener('click', () => changeToTheme("dark"));

const sepiaButton = document.getElementById('sepiaButton');
sepiaButton.addEventListener('click', () => changeToTheme("sepia"));

const hafsButton = document.getElementById('hafsButton');
hafsButton.addEventListener('click', () => changeToTheme("hafs"));

// const sepiaButton = document.getElementById('sepiaButton');
// sepiaButton.addEventListener('click', changeToSepiaTheme());


// const checkbox = document.getElementById('123');


// checkbox.addEventListener('change', () => {
//     let theme =document.body.getAttribute('theme')
    
//     switch(theme){
//         case 'light':   changeToLightTheme()
//         break;
//         case 'dark':    changeToDarkTheme()
//         break;
//         default:        changeToSepiaTheme()
//     }});




// document.body.setAttribute('theme','sepia')
    
    // classList.toggle('dark')