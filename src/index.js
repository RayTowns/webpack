import './styles.scss';
import img from './earth-hug.gif';

function rootStyle(){
    const elemRoot = document.getElementById('root');
    elemRoot.classList.add('container');
}

function titleComponent(){
    const elemH1 = document.createElement('h1');
    elemH1.innerHTML = 'hello world!!';
    elemH1.classList.add('title');
    return elemH1
}

function imageComponent(){
    const elemImage = new Image(220,202);
    elemImage.src = img;
    return elemImage
}

rootStyle()
document.body.appendChild(titleComponent())
document.body.appendChild(imageComponent())