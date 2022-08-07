import _ from 'lodash';
import './style.css';
import Icon from './hoisting.png';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // adding Image to our div
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

export default document.body.appendChild(component());