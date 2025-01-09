import { getRandomColor as color} from "./utils";

export default function initApp() {
    console.log('Hello world');

    const btn = document.createElement('button');
    btn.className = 'button';
    btn.textContent = 'Изменить цвет страницы'
    const body = document.querySelector('body');
    body.append(btn);

    btn.addEventListener('click', () => {
        body.style = `background-color: ${color()}`
    });
}