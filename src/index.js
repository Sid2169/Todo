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
});

//Theme Toggle;
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

//Add Project button:
const newProjectModal = document.getElementById('newProjectModal');
const addProjectBtn = document.getElementById('addProjectBtn');
addProjectBtn.addEventListener('click', () => {
    newProjectModal.classList.remove('hidden');
});

//Project form cancel button:
const closeModal = document.getElementById('closeModal');
closeModal.addEventListener('click', () => {
    newProjectModal.classList.add('hidden');
});
