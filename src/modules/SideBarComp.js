export const SideBarComp = document.createElement('div');
SideBarComp.innerHTML = `
     <aside class="sidebar" id="sidebar">
            <button id="btn-close-side-bar">X</button>
            <div class="sidebar-header">
                <h2>Projects</h2>
                <button class="add-project" id="addProjectBtn">+ Add Project</button>
            </div>
            <ul class="project-list" id="projectList">
                <li class="project-item">
                    <span>Project 1</span>
                    <button class="delete-project">🗑️</button>
                </li>
                <li class="project-item">
                    <span>Project 2</span>
                    <button class="delete-project">🗑️</button>
                </li>
                <!-- More projects can be added dynamically -->
            </ul>
        </aside>
`