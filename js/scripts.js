const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const toggleColor = document.getElementById("toggle-colors");

const rootStyle = document.documentElement.style;

const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async (language)=>{
    const requestJson = await  fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange){
        const section =textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
};


flagsElement.addEventListener("click", (e)=>{
    changeLanguage(e.target.parentElement.dataset.language);
})


toggleTheme.addEventListener("click", ( ) => {
    document.body.classList.toggle("dark"); 
    if(toggleIcon.src.includes("moon.svg")){
        toggleIcon.src ="assets/icons/sun.svg";
        toggleText.textContent = "Light Mode"
    }else{
        toggleIcon.src ="assets/icons/moon.svg";
        toggleText.textContent = "Dark Mode"
        
    }

});

toggleColor.addEventListener("click", (e)=>{
   rootStyle.setProperty('--primary-color', e.target.dataset.color) 
//    datset. es igual al data atributo que ponemos en el html por eso "data-color" cuando lo traemos a js lo ponemos  dataset.color importante 
});

