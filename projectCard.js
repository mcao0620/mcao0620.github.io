export default class ProjectCard {
  constructor() {
    let card = document.querySelector(".template.project-card");
    this.elem = card.cloneNode(true);
    this.elem.classList.remove("template");
  }

  addToProjects(projectsElem) {
    projectsElem.append(this.elem);
  }

  setTitle(title) {
    this.elem.querySelector(".project-title").innerText = title;
  }

  setLink(link) {
    this.elem.querySelector(".project-url").setAttribute("href", link);
  }

  setTools(tools) {
    let tool = this.elem.querySelector(".template.project-tool");
    tools.forEach((toolName) => {
      let newTool = tool.cloneNode(true);
      newTool.classList.remove("template");
      newTool.querySelector(".project-tool-text").innerText = toolName;
      tool.parentNode.insertBefore(newTool, tool);
    });
  }

  setDescription(description) {
    this.elem.querySelector(".project-description").innerText = description;
  }
}
