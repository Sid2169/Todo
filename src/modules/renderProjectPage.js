//renderProjectPage.js: Module for rendering Project Page

import { projectList } from "./projectList.js";

export const renderProjectPage = (project) => {
    
    //Render Project page heading and Description
    if (!project) return;

    const projectPage = document.createElement('div');
    projectPage.innerHTML = `
        <h2>${project.projectName}</h2>
        <p>${project.projectDescription}</p>
    `;
    projectPage.id = project.projectName;

    //Render Task List
    const taskList = document.createElement('ul');
    taskList.classList.add('task-list');
    projectPage.appendChild(taskList);

    project.tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <span>${task.taskName}</span>
        `;
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-task');
        deleteButton.innerHTML = '🗑️';
        deleteButton.addEventListener('click', () => {
            project.tasks.splice(project.tasks.indexOf(task), 1);
            taskItem.remove();
        });
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });

    //Render Add Task button
    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('add-task');
    addTaskBtn.innerHTML = '+ Add Task';
    projectPage.appendChild(addTaskBtn);

    document.getElementById('projectPage').innerHTML = '';
    document.getElementById('projectPage').appendChild(projectPage);
}