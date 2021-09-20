const apps = [
    'app',
    'blog',
    'shop',
    'note',
    'game',
    'grave'
]

let appName = document.getElementById('app-name');
let links = document.querySelectorAll('.navbotton')
let buttons = document.querySelectorAll('.carrot')
appName.innerHTML = apps[0];

const toggleDark = () => {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = '#FFFFFF';
    appName.style.color = 'red';
    links.forEach(link => link.style.color = 'white')
    buttons.forEach(button => button.style.color = 'white')



}

const toggleLight = () => {
    document.body.style.color = "#000000";
    document.body.style.backgroundColor = '#FFFFFF';
    appName.style.color = '#000000';
    links.forEach(link => link.style.color = 'black')
    buttons.forEach(button => button.style.color = 'black')
}

const rotateRight = ()=> {
    apps.push(apps.shift())
    appName.innerHTML = apps[0];
    apps[0] === 'grave' ? toggleDark() : toggleLight()
    return apps;
}

const rotateLeft = ()=> {
    apps.unshift(apps.pop())
    appName.innerHTML = apps[0];
    apps[0] === 'grave' ? toggleDark() : toggleLight()
    return apps;
}

document.getElementById('right-button').onclick = rotateRight;
document.getElementById('left-button').onclick = rotateLeft;
