/**
 * createProject.js
 * 
 * This module provides functionality to create new projects in the Todo application.
 * It handles project creation, validation for duplicate projects, DOM manipulation
 * to add project items to the sidebar, and sets up event listeners for project
 * interaction and deletion.
 * 
 * Main functionality:
 * - Creates new Project instances and adds them to the project list
 * - Validates that project names are unique
 * - Dynamically creates and renders project items in the sidebar
 * - Handles click events to navigate to project pages
 * - Provides delete functionality with confirmation
 */

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
    //Create new project
    const project = new Project(projectName, projectDescription);
    projectList.push(project);
    const projectItem = document.createElement('li');
    projectItem.classList.add('project-item');
    projectItem.innerHTML = `
        <span>${projectName}</span>
    `;
    projectItem.addEventListener('click', () => {
        renderProjectPage(project);
    });
    
    //Add delete button
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