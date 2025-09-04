export const SideBarComp = document.createElement('div');
SideBarComp.innerHTML = `
     <aside class="sidebar" id="sidebar">
            <button id="btn-close-side-bar">X</button>
            <div class="sidebar-header">
                <h2>Projects</h2>
                <button class="add-project" id="addProjectBtn">+ Add Project</button>
            </div>
            <ul class="project-list" id="projectList">
            </ul>
        </aside>
`