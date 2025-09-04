import { Project } from "./Project.js";
import { projectList } from "./projectList.js";
import { renderProjectPage } from "./renderProjectPage.js";

//Create Project and update project list in sidebar
export const createProject = (projectName, projectDescription) => {
    //Check if project already exists
    const projectExists = projectList.find(project => project.projectName === projectName);
    if (projectExists) {
        alert('Project already exists');
        return;
    }

    const project = new Project(projectName, projectDescription);
    projectList.push(project);
    const projectItem = document.createElement('li');
    projectItem.classList.add('project-item');
    projectItem.innerHTML = `
        <span>${projectName}</span>
    `;
    projectItem.addEventListener('click', () => {
        renderProjectPage(projectName);
    });
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-project');
    deleteButton.innerHTML = '🗑️';
    deleteButton.addEventListener('click', () => {
        projectList.splice(projectList.indexOf(project), 1);
        projectItem.remove();
    });
    projectItem.appendChild(deleteButton);
    document.getElementById('projectList').appendChild(projectItem);
}