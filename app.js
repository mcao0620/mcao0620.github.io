import ProjectCard from "./projectCard.js";

export default class App {
  constructor() {
    this.projectsGrid = document.querySelector(".projects-grid");

    this.sunElem = document.querySelector(".sun");
    this.moonElem = document.querySelector(".moon");

    this.toggleTheme = this.toggleTheme.bind(this);
    this.sunElem.addEventListener("click", this.toggleTheme);
    this.moonElem.addEventListener("click", this.toggleTheme);
  }

  loadThemeIcon() {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  
    const sunElem = document.querySelector(".sun");
    const moonElem = document.querySelector(".moon");
  
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      sunElem?.classList.remove("hidden");
    } else {
      moonElem?.classList.remove("hidden");
    }
  }

  toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    this.sunElem.classList.toggle("hidden");
    this.moonElem.classList.toggle("hidden");
  }

  addProjectCard({ title, url, tools, description }) {
    let projectCard = new ProjectCard();
    projectCard.addToProjects(this.projectsGrid);
    projectCard.setTitle(title);
    projectCard.setLink(url);
    projectCard.setTools(tools);
    projectCard.setDescription(description);
  }
}
