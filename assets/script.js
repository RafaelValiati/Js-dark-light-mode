
function changeMode(){
    changeClasses();
    changeText();

}

function changeClasses(){
    button.classList.toggle(darkclass);
    h1.classList.toggle(darkclass);
    body.classList.toggle(darkclass);
    footer.classList.toggle(darkclass);
}

function changeText() {
    if(body.classList.contains(darkclass)){
        button.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode ON";
        return;
    }

    button.innerHTML = "Dark Mode";
    h1.innerHTML = "Light Mode ON";


}


const darkclass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

console.log(body);

button.addEventListener('click',changeMode);