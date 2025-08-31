export const ProjectFormComp = document.createElement('div');
ProjectFormComp.innerHTML = `
    <div class="modal-content">
    <h2>New Project</h2>
    <form id="newProjectForm">
      <label for="projectName">Project Name</label>
      <input type="text" id="projectName" name="projectName" required>

      <label for="projectDescription">Description</label>
      <textarea id="projectDescription" name="projectDescription" rows="3"></textarea>

      <div class="modal-actions">
        <button type="submit" class="btn btn-accent">Create</button>
        <button type="button" class="btn btn-cancel" id="closeModal">Cancel</button>
      </div>
    </form>
  </div>
`;
ProjectFormComp.classList.add('modal', 'hidden');
ProjectFormComp.id = 'newProjectModal';