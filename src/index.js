import './styles.css'
console.log("Js is working");
import { loadUI } from './modules/loadUI.js';

//Load UI:
loadUI();

//Side Bar Toggle:
const sideBarToggle = document.querySelector('.sidebar-toggle');
const sideBar = document.getElementById('sidebar')
sideBarToggle.addEventListener('click', () => {
    sideBar.classList.add('open');
});

const closeSideBar = document.getElementById('btn-close-side-bar');
closeSideBar.addEventListener('click', () => {
    sideBar.classList.remove('open');
})
