import GitLogo from "../assets/github-logo.png";

function cargarImagenes(){
    const gitLogo = document.querySelector(".git-logo");
    gitLogo.src = GitLogo;
}

export {cargarImagenes};
