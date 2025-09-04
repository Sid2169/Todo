//Project.js: Module for Project class

export  class Project {
    constructor(projectName, projectDescription) {
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.tasks = [];
    }
}   